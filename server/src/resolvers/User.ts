// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { UserResolvers } from "../generated/graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  post: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  comments: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
