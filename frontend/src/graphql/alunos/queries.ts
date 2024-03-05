import { gql } from '@apollo/client';

export const GET_ALUNOS = gql`
  query GetAlunos($nome: String, $cpf: String, $email: String) {
    alunos(nome: $nome, cpf: $cpf, email: $email) {
      id
      nome
      cpf
      email
    }
  }
`;
