import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient(process.env.CONTENT_API!);

export default graphqlClient;
