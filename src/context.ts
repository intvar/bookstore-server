import { PrismaClient } from '@prisma/client'
import { ExpressContext } from 'apollo-server-express';

const prisma = new PrismaClient()

export interface Context extends ExpressContext {
  prisma: PrismaClient;
}

export const createContext = async (ctx: ExpressContext): Promise<Context> => ({
  ...ctx,
  prisma,
});