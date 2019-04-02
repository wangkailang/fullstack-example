import { prisma } from './../generated/prisma-client/index';
import { QueryResolvers } from "../generated/graphqlgen";
import { getUserId } from '../utils';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  feed: (parent, args, ctx) => {
    return ctx.prisma.posts({
      where: {
        published: true,
      }
    })
  },
  posts: (parent, args, ctx) => {
    return ctx.prisma.posts(args);
  },
  drafts: (parent, args, ctx) => {
    const id = getUserId(ctx);
    const where = {
      published: false,
      author: {
        id,
      }
    };
    return ctx.prisma.posts({ where });
  },
  me: (parent, args, ctx) => {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  }
};