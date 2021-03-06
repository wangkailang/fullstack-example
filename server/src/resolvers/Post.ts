// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { PostResolvers } from "../generated/graphqlgen";

export const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,

  author: ({ id }, args, context) => {
    return context.prisma.post({ id }).author();
  },
  comments: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
