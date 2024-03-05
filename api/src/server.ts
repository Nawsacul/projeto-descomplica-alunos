import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './graphql/schemas/alunoSchema.js';
import resolvers from './graphql/resolvers/AlunoResolver.js';

const server = new ApolloServer({ typeDefs, resolvers });

const port = Number(process.env.PORT) || 4000; 

const { url } = await startStandaloneServer(server, {
  listen: { port },
})

console.log(`🚀 Server ready at: ${url}`);