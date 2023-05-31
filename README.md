## Mock Server

To setup mock server we are using `json-server`. We created db.json, and added a script in package.json.

## Query Cache

By default query cached for 5min. However a background refetched is triggered. So let's say i request for key A first time, data loads and I get latest data. If I query within 5min again, cached data will be returned but background refetch will run to fetch new data, however refetched data can override the result.
To update cache time, pass 3rd argument to useQuery as `{cacheTime:6000}` for 6s.

## Stale Data

If we know API data will not change too frequently, we can add staleTime similar to cacheTime. For the period of `staleTime`, refetching will not happen(unlike in cache where refetching happens). Default stale time is 0s.

## refetchOnMount

By default it is `true`. If false, useQuery will not refetch data on re-mount. Another possible value is `always` which says that irrespective of what stale time is, if component is re-mounted then do refetch. There is also `refetchOnWindowFocus`

## refetchInterval

By default set to false. But you can set it to seconds in millisecond format, to continuously fetch data after certain period. Note: refetching stops as window loose focus. To run it in background set `refetchIntervalInBackground`

## onSuccess and onError callback

If we want to perform some action after query fetch is successfull or some error happens, we can use onSuccess and onError properties passed in 3rd parameter object. NOTE: if error happens react query tries 3 times hitting that query.

## select option

To transform or filter data returned from API

## Parallel queries:

You can make parallel queries by multiple useQuery or if parallel queries are dynamic, let's say of dynamic id, u can use useQueries. You can specify unique query key as ['key-name', 'id'].

## Dependent queries:

## Initial Data

We can extract data from cache and pass as initial data. This will result in showing that data till background fetching is running.

## Paginated Date

There is a option keepPreviousData that keep previous data till next data is fetched.

## Mutation

## Query Invalidation

## Reuse post response in get data
