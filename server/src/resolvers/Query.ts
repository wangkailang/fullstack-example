import { prisma } from './../generated/prisma-client/index';
import { QueryResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  posts: (parent, args, ctx) => {
    return ctx.prisma.posts(args)
  },
};