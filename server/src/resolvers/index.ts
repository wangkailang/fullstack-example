import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Post } from "./Post";
import { User } from "./User";
import { Comment } from "./Comment";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";

export const resolvers: Resolvers = {
  Query,
  Post,
  User,
  Comment,
  Mutation,
  AuthPayload
};

export default resolvers;
