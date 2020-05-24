import { IResolvers } from "graphql-tools";
import query from "./query";

const resolversMap: IResolvers = {
  Query: {
    ...query,
  },
};

export default resolversMap;
