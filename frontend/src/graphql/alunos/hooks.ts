import { useQuery } from '@apollo/client';
import { GET_ALUNOS } from './queries';

interface Params {
  nome?: string;
  cpf?: string;
  email?: string;
}

const useAlunos = (params: Params) => {
  const { loading, error, data } = useQuery(GET_ALUNOS, { variables: params });
  return { loading, error, data };
};

export default useAlunos;