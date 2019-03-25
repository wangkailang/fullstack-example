import { prisma } from './../generated/prisma-client/index';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../generated/graphqlgen";
import * as bcrypt from 'bcryptjs';
import { APP_SECRET } from '../utils';
import { sign } from 'jsonwebtoken';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createPost: (parent, args, ctx) => {
    return ctx.prisma.createPost(args.input);
  },
  deletePost: (parent, args, ctx) => {
    return ctx.prisma.deletePost({
      id: args.id
    });
  },
  signup: async (parent, args, ctx) => {
    const password = await bcrypt.hashSync(args.input.password, 10);
    const user = await ctx.prisma.createUser({ ...args.input, password });
    const token = sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user,
    }
  },
  login: async (parent, args, ctx) => {
    const user = await ctx.prisma.user({ email: args.input.email });
    if (!user) {
      throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.input.password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }
    const token = sign({ userId: user.id }, APP_SECRET);
    console.log('token', token);
    return {
      token,
      user,
    }
  }
};
