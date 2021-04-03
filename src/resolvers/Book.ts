 export const Book = {
   publisher: async (parent, args, context) => {
     return context.prisma.publisher.findOne({ where: { id: parent.publisherId  }  });
   },
   author: async (parent, args, context) => {
     return context.prisma.author.findOne({ where: { id: parent.authorId } });
   }
 }
