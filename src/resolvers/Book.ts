import { IResolverObject } from 'apollo-server';
import { Book as BookModel } from 'prisma/prisma-client';
import { Context } from '../context';

export const Book: IResolverObject<BookModel, Context> = {
   publisher: async (parent, args, context) => {
    return context.prisma.publisher.findUnique({ where: { id: parent.publisherId } });
   },
   author: async (parent, args, context) => {
    return context.prisma.author.findUnique({ where: { id: parent.authorId } });
   }
 }
