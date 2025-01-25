import * as ReactQuery from "@tanstack/react-query";
import * as EstimatorReactQueryUtils from "../../queries";
import {
  removeProperty,
  retrieveProperties,
  storeProperty,
} from "./properties-database";
import { unknown } from "zod";

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

type UsePropertyMutationArgs = { propertyId: string };

export function createPropertyQueryKey() {
  return ["property"] as const;
}

export function createPropertyQueryOptions() {
  return EstimatorReactQueryUtils.createQueryOptions({
    queryKey: createPropertyQueryKey(),
    queryFn: async () => retrieveProperties(),
    id: "properties/all",
  });
}

export function useProperty() {
  return ReactQuery.useQuery(createPropertyQueryOptions());
}

export function createPropertyMutationKey(propertyId: string) {
  return ["properties", propertyId] as const;
}

export function createPropertyMutationOptions(propertyId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createPropertyMutationKey(propertyId),
    mutationFn: async ({
      propertyId,
      inspector,
      params,
    }: {
      propertyId: string;
      inspector: string;
      params: Record<string, unknown>;
    }) => {
      console.log("[propertyId, inspector, params]", [propertyId, inspector, params])
      const property = {
        id: "uuid",
        propertyId: propertyId,
        inspector: inspector,
        values: params as Record<string, unknown>,
      };
      await storeProperty(property);
      return property;
    },
    onSettled: (data) => {
      console.log("Property mutation success with data", data);
    },
    onError: (error) => {
      console.log("Property mutation error", error);
    },
  });
}

export function usePropertyMutation(
  args: UsePropertyMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<
      unknown,
      Error,
      { propertyId: string; params: Record<string, unknown> }
    >,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { propertyId } = args as Merge<UsePropertyMutationArgs>;
  const queryClient = ReactQuery.useQueryClient();
  const mutation = ReactQuery.useMutation({
    ...createPropertyMutationOptions(propertyId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}

export function createPropertyRemoveKey(propertyId: string) {
  return ["properties", propertyId] as const;
}

export function createPropertyRemoveOptions(propertyId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createPropertyRemoveKey(propertyId),
    mutationFn: async ({ propertyId }: { propertyId: string }) => {
      await removeProperty(propertyId);
      return propertyId;
    },
  });
}

export function usePropertyRemove(
  args: UsePropertyMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<unknown, Error, { propertyId: string }>,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { propertyId } = args as Merge<UsePropertyMutationArgs>;
  const queryClient = ReactQuery.useQueryClient();
  const mutation = ReactQuery.useMutation({
    ...createPropertyRemoveOptions(propertyId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}
