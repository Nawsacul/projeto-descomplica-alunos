import { useState, useEffect } from 'react';
import styles from "./Alunos.module.css";
import useAlunos from "../../graphql/alunos/hooks";
import { useSearch } from "../../hooks/useSearchContext";
import usePagination from "../../hooks/usePagination";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import AlunoList from "../../components/AlunoList";
import AlunoListPagination from "../../components/AlunoListPagination";

const Alunos = () => {
  const { searchString, filter } = useSearch();
  const [searchParams, setSearchParams] = useState({ nome: '', cpf: '', email: '' });
  const alunosPorPagina = 10;

  useEffect(() => {
    const trimmedSearchString = searchString.trim();
  
    setSearchParams({
      nome: filter === 'nome' ? trimmedSearchString : '',
      cpf: filter === 'cpf' ? trimmedSearchString : '',
      email: filter === 'email' ? trimmedSearchString : '',
    });
  }, [searchString, filter]);

  const { loading, error, data } = useAlunos(searchParams);

  const {
    currentItems: selectedAlunos,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages,
  } = usePagination(data?.alunos || [], alunosPorPagina);

  return (
    <section className={styles.container}>
      <SearchInput />
      {error ? (
        <Error mensagem={error.message} />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <AlunoListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
          <AlunoList
            alunos={selectedAlunos}
            totalAlunos={data ? data.alunos.length : 0}
          />
        </>
      )}
    </section>
  );
};

export default Alunos;