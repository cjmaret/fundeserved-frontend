import casual from 'casual';
import { PAGINATION_COUNT_QUERY } from '../components/Pagination';

casual.seed(777);

const fakeFundraiser = () => ({
  id: 'abc123',
  name: 'test-fundraiser',
  description: 'fundraiser description',
  status: 'ACTIVE',
  amount: 500,
  goal: 600,
  dateCreated: '2022-08-25T16:00:00.000Z',
  user: {
    id: '123',
  },
  photo: {
    id: 'abc123',
    altText: 'test-fundraiser',
    image: {
      publicUrlTransformed: 'dog.jpg',
    },
  },
  donations: [
    {
      total: 50,
      dateCreated: '2022-09-25T16:00:00.000Z',
      user: {
        name: 'Colin',
        avatar: {
          publicUrlTransformed: 'dog.jpg',
        },
      },
    },
  ],
});

const fakeUser = (overrides) => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  createdOn: '2022-05-25T16:00:00.000Z',
  avatar: {
    publicUrlTransformed: 'colin.jpg',
  },
  fundraisers: [
    {
      id: '123',
      name: 'fundraiser1',
      description: 'fundraiser',
      amount: 5000,
      goal: 6000,
      dateCreated: '2022-09-25T16:00:00.000Z',
      photo: {
        image: {
          publicUrlTransformed: 'fundraiser1.jpg',
        },
      },
    },
  ],
  donations: [
    {
      id: '123',
      total: 25,
      dateCreated: '2022-05-26T16:00:00.000Z',
      fundraiser: {
        id: '456',
        name: 'fundraiser2',
        description: 'fundraiser',
        photo: {
          image: {
            publicUrlTransformed: 'fundraiser2.jpg',
          },
        },
      },
    },
  ],
  permissions: ['OVERLORD'],

  ...overrides,
});

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2022-12-11T20:16:13.797Z',
  user: fakeUser(),
});

const fakeCartItem = (overrides) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  product: fakeItem(),
  user: fakeUser(),
  ...overrides,
});


class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

function makePaginationMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_COUNT_QUERY },
      result: {
        data: {
          _allFundraisersMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
        },
      },
    },
  ];
}

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeFundraiser,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
};
