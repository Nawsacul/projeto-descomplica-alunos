import styles from './AlunoListPagination.module.css';
import { PaginationProps } from "../../interfaces/PaginationProps";

const AlunoListPagination = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.container}>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Próximo
      </button>
    </div>
  );
};

export default AlunoListPagination;
