import { prisma } from './../generated/prisma-client/index';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, args, ctx) => {
    return ctx.prisma.createUser({
      name: args.name
    });
  },
  deleteUser: (parent, args, ctx) => {
    return ctx.prisma.deleteUser({
      id: args.id
    });
  }
};
