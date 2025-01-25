import * as ReactQuery from "@tanstack/react-query";
import * as EstimatorReactQueryUtils from "../../queries";
import { queryClient } from "../../query-client";
import {
  removeRepair,
  retrieveRepairs,
  storeRepair,
} from "./repairs-database";

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

type UseRepairMutationArgs = { repairId: string };

export function createRepairQueryKey(repairId: string) {
  return ["repair", repairId] as const;
}

export function createRepairQueryOptions(repairId: string) {
  return EstimatorReactQueryUtils.createQueryOptions({
    queryKey: createRepairQueryKey(repairId),
    queryFn: async () => retrieveRepairs(repairId),
    id: "repairs/all",
  });
}

export function createRepairMutationKey(repairId: string) {
  return ["repairs", repairId] as const;
}

export function createRepairMutationOptions(repairId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createRepairQueryKey(repairId),
    mutationFn: async ({
      repairId,
      name,
      params,
    }: {
      repairId: string;
      name: string;
      params: Record<string, unknown>;
    }) => {
      const repair = {
        id: "uuid",
        repairId: repairId,
        name: name,
        values: params as Record<string, unknown>,
      };
      await storeRepair(repair);
      return repair;
    },
  });
}

export function useRepairMutation(
  args: UseRepairMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<
      unknown,
      Error,
      { repairId: string; params: Record<string, unknown> }
    >,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { repairId } = args as Merge<UseRepairMutationArgs>;
  const mutation = ReactQuery.useMutation({
    ...createRepairMutationOptions(repairId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["repairs"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}

export function createRepairRemoveKey(repairId: string) {
  return ["repairs", repairId] as const;
}

export function createRepairRemoveOptions(repairId: string) {
  return EstimatorReactQueryUtils.createMutationOptions({
    mutationKey: createRepairRemoveKey(repairId),
    mutationFn: async ({ repairId }: { repairId: string }) => {
      await removeRepair(repairId);
      return repairId;
    },
  });
}

export function useRepairRemove(
  args: UseRepairMutationArgs,
  {
    onSettled,
    ...options
  }: Omit<
    ReactQuery.UseMutationOptions<unknown, Error, { repairId: string }>,
    "mutationKey" | "mutationFn"
  > = {}
) {
  const { repairId } = args as Merge<UseRepairMutationArgs>;
  const mutation = ReactQuery.useMutation({
    ...createRepairRemoveOptions(repairId),
    onSettled: async (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["repairs"],
      });
      return onSettled?.(...args);
    },
    ...options,
  });
  return mutation;
}
