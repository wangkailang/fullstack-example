import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Post } from "./Post";
import { Mutation } from "./Mutation";

const resolvers: Resolvers = {
  Query,
  User,
  Post,
  Mutation
};

export default resolvers;
