import { useMemo, useState } from 'react';

const usePagination = (items: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items.length, itemsPerPage]);
  
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, items]);

  const goToNextPage = () =>
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

  return { currentItems, goToNextPage, goToPreviousPage, currentPage, totalPages };
};

export default usePagination;
