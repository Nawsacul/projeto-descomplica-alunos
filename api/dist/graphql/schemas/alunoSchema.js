const typeDefs = `#graphql
  type Query {
    alunos(nome: String, cpf: String, email: String): [Aluno!]!
  }

  type Aluno {
    id: ID!
    nome: String!
    cpf: String!
    email: String!
  }
`;
export default typeDefs;
