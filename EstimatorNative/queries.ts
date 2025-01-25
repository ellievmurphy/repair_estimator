import * as TanstackQueryCore from "@tanstack/query-core";
import * as ReactQuery from "@tanstack/react-query";

export type SafeQueryOptions<
  TQueryFnData,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[]
> = ReactQuery.UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  id: string;
};

export function createQueryOptions<
  TQueryFnData,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
  TQueryOptions extends SafeQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  > = SafeQueryOptions<TQueryFnData, TError, TData, TQueryKey>
>(options: TQueryOptions) {
  return options;
}

export function createMutationOptions<
  TData,
  TError = Error,
  TVariables = void,
  TContext = unknown
>(options: ReactQuery.MutationOptions<TData, TError, TVariables, TContext>) {
  return options;
}

export function mergeQueries<TData>(
  primaryQuery: ReactQuery.UseQueryResult<TData>,
  otherQueries: ReactQuery.UseQueryResult<unknown>[]
): ReactQuery.UseQueryResult<TData> {
  const mergedQueries = {
    ...primaryQuery,
    error:
      primaryQuery.error ??
      otherQueries.find((query) => query.error)?.error ??
      null,
    isLoading:
      primaryQuery.isLoading || otherQueries.some((query) => query.isLoading),
    isFetching:
      primaryQuery.isFetching || otherQueries.some((query) => query.isFetching),
    isError:
      primaryQuery.isError || otherQueries.some((query) => query.isError),
    failureReason:
      primaryQuery.failureReason ??
      otherQueries.find((query) => query.failureReason)?.failureReason ??
      null,
    failureCount:
      primaryQuery.failureCount +
      otherQueries.reduce((acc, query) => acc + query.failureCount, 0),
    status:
      primaryQuery.status === "pending"
        ? otherQueries.find((query) => query.status === "error")?.status ??
          "pending"
        : primaryQuery.status,
    isInitialLoading:
      primaryQuery.isLoading || otherQueries.some((query) => query.isLoading),
    refetch: (options: ReactQuery.RefetchOptions) => {
      primaryQuery.refetch(options);
      otherQueries.forEach((query) => query.refetch(options));
    },
    isPaused:
      primaryQuery.isPaused || otherQueries.some((query) => query.isPaused),
    isRefetching:
      primaryQuery.isRefetching ||
      otherQueries.some((query) => query.isRefetching),
    isRefetchError:
      primaryQuery.isRefetchError ||
      otherQueries.some((query) => query.isRefetchError),
    isPending:
      primaryQuery.isPending || otherQueries.some((query) => query.isPending),
    fetchStatus:
      primaryQuery.fetchStatus === "idle"
        ? otherQueries.find((query) => query.fetchStatus !== "idle")
            ?.fetchStatus ?? "idle"
        : primaryQuery.fetchStatus,
    isLoadingError:
      primaryQuery.isLoadingError ||
      otherQueries.some((query) => query.isLoadingError),
  };
  return mergeQueries as unknown as ReactQuery.UseQueryResult<TData>; //wae ??
}

export const queryClient = new TanstackQueryCore.QueryClient();

export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TBuildOptionsContext = unknown,
  TOptionsContext = unknown
>(
  buildOptions: ReactQuery.UseMutationOptions<
    TData,
    TError,
    TVariables,
    TBuildOptionsContext & TOptionsContext
  > & {
    mutationFn: (variables: TVariables) => Promise<TData>;
    invalidateOnSettled?: ReactQuery.QueryKey;
  }
) {
  return ({
    onSettled,
    onError,
    onMutate,
    onSuccess,
  }: Pick<
    ReactQuery.UseMutationOptions<
      TData,
      TError,
      TVariables,
      TBuildOptionsContext & TOptionsContext
    >,
    "onSettled" | "onError" | "onMutate" | "onSuccess"
  > = {}) => {
    const queryClient = ReactQuery.useQueryClient();
    return ReactQuery.useMutation<
      TData,
      TError,
      TVariables,
      TBuildOptionsContext & TOptionsContext
    >({
      ...buildOptions,
      onSettled: (...args) => {
        if (buildOptions.invalidateOnSettled) {
          queryClient.invalidateQueries({
            queryKey: buildOptions.invalidateOnSettled,
          });
        }
        buildOptions.onSettled?.(...args);
        onSettled?.(...args);
      },
      onError: (...args) => {
        buildOptions?.onError?.(...args);
        onError?.(...args);
      },
      onSuccess: (...args) => {
        buildOptions?.onSuccess?.(...args);
        onSuccess?.(...args);
      },
      onMutate: (...args) => {
        const buildContext = buildOptions.onMutate?.(...args);
        const context = onMutate?.(...args);
        const mergedContext = Object.assign({}, buildContext, context);
        return mergedContext as TBuildOptionsContext & TOptionsContext;
      },
    });
  };
}

export function createQuery<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends ReactQuery.QueryKey = ReactQuery.QueryKey
>(
  buildOptions: ReactQuery.UseQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >
) {
  return <TOptionsData = TData>({
    enabled,
    initialData,
    select,
  }: Pick<
    ReactQuery.UseQueryOptions<TQueryFnData, TError, TOptionsData, TQueryKey>,
    "enabled" | "initialData" | "select"
  > = {}) => {
    return ReactQuery.useQuery<TQueryFnData, TError, TOptionsData, TQueryKey>({
      ...buildOptions,
      enabled,
      initialData,
      select,
    });
  };
}

export function createQueryWithArgs<
  TArguments extends readonly unknown[] = [],
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends ReactQuery.QueryKey = ReactQuery.QueryKey
>(
  buildOptions: (
    ...args: TArguments
  ) => ReactQuery.UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) {
  return <TOptionsData = TData>(
    args: TArguments,
    {
      enabled: enabledFromArgs,
      initialData,
      select,
    }: Pick<
      ReactQuery.UseQueryOptions<TQueryFnData, TError, TOptionsData, TQueryKey>,
      "enabled" | "initialData" | "select"
    > = {}
  ) => {
    const queryClient = ReactQuery.useQueryClient();
    const options = buildOptions(...args);

    const queryResult = ReactQuery.useQuery<
      TQueryFnData,
      TError,
      TOptionsData,
      TQueryKey
    >({
      ...options,
      enabled: enabledFromArgs && options.enabled,
      initialData,
      select,
    });
    return {
      ...queryResult,
      cancel: () => {
        queryClient.cancelQueries({ queryKey: options.queryKey });
      },
    };
  };
}
