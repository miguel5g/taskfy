import { jest } from '@jest/globals';

jest.mock('../../libs/prisma', () => {
  return {
    __esModule: true,
    prisma: {
      user: {
        count: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
      },
    },
  };
});
