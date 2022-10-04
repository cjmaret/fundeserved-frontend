import { PAGINATION_COUNT_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // allows custom
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // reads number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_COUNT_QUERY });
      const count = data?._allFundraisersMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check for existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // If there are items, and there aren't enough items to satisfy how many were requested, and we're on the last page, then just send the data
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false; // no items, need to fetch from network
      }
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache, sending to Apollo`
        );
        return items;
      }
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // merge runs when Apollo client comes back from the network with items
      console.log(`Merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
