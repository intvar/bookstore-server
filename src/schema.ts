import { gql } from 'apollo-server'

export const typeDefs = gql`type Publisher {
  id: ID!
  name: String!
  foundationYear: Int!
  site: String!
}

type Author {
  id: ID!
  fullName: String!
  birthdate: String!
}

type Book {
  id: ID!
  name: String!
  price: Int!
  quantity: Int!
  author: Author!
  publisher: Publisher!
}

type Query {
  books: [Book!]!
}

input CreateBookInput {
  name: String!
  price: Int!
  quantity: Int!
  author_id: Int!
  publisher_id: Int!
}

input UpdateBookInput {
  id: ID! 
  name: String
  price: Int
  quantity: Int
  author_id: Int
  publisher_id: Int
}

type Mutation {
  createBook(book: CreateBookInput!): Book!
  updateBook(book: UpdateBookInput!): Book!
  deleteBook(id: Int!): Book!
}`