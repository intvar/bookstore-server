import { GraphQLServer  } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { Query } from './resolvers/Query'
import { Book } from './resolvers/Book'
import { Mutation } from './resolvers/Mutation'

    
const prisma = new PrismaClient()

const resolvers = {
  Query,
  Book,
  Mutation
}
const server = new GraphQLServer({ 
  typeDefs: './src/schema.graphql', 
  resolvers,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on localhost:4000'))
