import * as ReactQuery from "@tanstack/react-query";
import * as EstimatorReactQueryUtils from "../../queries";
import { queryClient } from "../../query-client";
import {
  removeCategory,
  retrieveCategories,
  storeCategory,
} from "./categories-database";
import Category from "../../models/category";

type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any }
  ? T[K]
  : undefined;
type PickTypeOf<T, K extends string | number | symbol> = K extends AllKeys<T>
  ? PickType<T, K>
  : never;

type AllKeys<T> = T extends any ? keyof T : never;
type CommonKeys<T extends object> = keyof T;

type Merge<T extends object> = {
  [k in CommonKeys<T>]: PickTypeOf<T, k>;
};

type UseCategoryMutationArgs = { categoryId: string };

export function createCategoryQueryKey(categoryId: string) {
  return ["category", categoryId] as const;
}

export function createCategoryQueryOptions(categoryId: string) {
  return EstimatorReactQueryUtils.createQueryOptions({
    queryKey: createCategoryQueryKey(categoryId),
    queryFn: async () => retrieveCategories(categoryId),
    id: "categories/all",
  });
}

export function createCategoryMutationKey(categoryId: string) {
  return ["categories", categoryId] as const;
}

export function createCategoryMutationOptions(categoryId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createCategoryQueryKey(categoryId),
    mutationFn: async ({
      categoryId,
      name,
      params,
    }: {
      categoryId: string;
      name: string;
      params: Record<string, unknown>;
    }) => {
      const category = {
        id: categoryId,
        name: name,
        values: params as Record<string, unknown>,
      };
      await storeCategory(category);
      return category;
    },
  });
}

export function useCategoryMutation(
  args: UseCategoryMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<
      unknown,
      Error,
      { categoryId: string; params: Record<string, unknown> }
    >,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { categoryId } = args as Merge<UseCategoryMutationArgs>;
  const mutation = ReactQuery.useMutation({
    ...createCategoryMutationOptions(categoryId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}

export function createInitCategoryMutation(categories: Category[]) {
  categories.map(async (cat) => await storeCategory({id: cat.id, name: cat.name, values: cat as object as Record<string, unknown>}))
}

export function createCategoryRemoveKey(categoryId: string) {
  return ["categories", categoryId] as const;
}

export function createCategoryRemoveOptions(categoryId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createCategoryRemoveKey(categoryId),
    mutationFn: async ({ categoryId }: { categoryId: string }) => {
      await removeCategory(categoryId);
      return categoryId;
    },
  });
}

export function useCategoryRemove(
  args: UseCategoryMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<unknown, Error, { categoryId: string }>,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { categoryId } = args as Merge<UseCategoryMutationArgs>;
  const mutation = ReactQuery.useMutation({
    ...createCategoryRemoveOptions(categoryId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}
