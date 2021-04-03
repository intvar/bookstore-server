function createBook(parent, args, context) {
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

function updateBook(parent, args, context) {
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

function deleteBook(parent, args, context) {
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
