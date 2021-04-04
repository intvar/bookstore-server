import { IResolverObject } from 'apollo-server';
import { Context } from '../context';

export const Query: IResolverObject<unknown, Context> = {
  books: async (parent, args, context) => {
    return context.prisma.book.findMany()
  }
}
