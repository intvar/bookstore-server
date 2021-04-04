import { IFieldResolver } from 'apollo-server';
import { Book as BookModel } from 'prisma/prisma-client';
import { Context } from '../context';

const createBook: IFieldResolver<BookModel, Context> = (parent, args, context) => {
  const book = args.book;
  return context.prisma.book.create({
    data: {
      name: book.name,
      price: book.price,
      quantity: book.quantity,
      author: { connect: { id: book.author_id } },
      publisher: { connect: { id: book.publisher_id } }
    }
  })
}

const updateBook: IFieldResolver<BookModel, Context> = (parent, args, context) => {
  const book = args.book;
  return context.prisma.book.update({
    where: { id: +book.id },
    data: {
      name: book.name,
      price: book.price,
      quantity: book.quantity,
      author: { connect: { id: book.author_id } },
      publisher: { connect: { id: book.publisher_id } }
    }
  })
}

const deleteBook: IFieldResolver<BookModel, Context> = (parent, args, context) => {
  return context.prisma.book.delete({
    where: {
      id: args.id
    }
  })
}

export const Mutation = {
  createBook,
  updateBook,
  deleteBook,
}
