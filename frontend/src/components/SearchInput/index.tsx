import styles from "./SearchInput.module.css";
import { useSearch } from "../../hooks/useSearchContext";
import { useState } from "react";

const SearchInput = () => {
  const [selectValue, setSelectValue] = useState("nome");
  const { setSearchString, setFilter } = useSearch();

  return (
    <div>
      <input
        className={styles.searchField}
        type="text"
        placeholder={`Digite o ${selectValue} do(a) aluno(a)`}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <select
      className={styles.selectField}
        onChange={(e) => {
          setSelectValue(e.target.value.toLowerCase());
          setFilter(e.target.value);
        }}
      >
        <option className={styles.selectFieldOption} value="nome">Nome</option>
        <option className={styles.selectFieldOption} value="cpf">CPF</option>
        <option className={styles.selectFieldOption} value="email">Email</option>
      </select>
    </div>
  );
};

export default SearchInput;
