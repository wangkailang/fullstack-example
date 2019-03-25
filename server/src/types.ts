import { Prisma } from './generated/prisma-client';
export interface AuthPayload {
  user: any;
  token: string | null
}

export interface Context {
  prisma: Prisma
}
