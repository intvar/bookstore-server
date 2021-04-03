 export const Query = {
  books: async (parent, args, context) => {
    return context.prisma.book.findMany()
  }
 }
