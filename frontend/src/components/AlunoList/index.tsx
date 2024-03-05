import AlunoItem from "../../components/AlunoItem";
import { AlunoListProps } from "../../interfaces/AlunoListProps";

const AlunoList = ({ alunos, totalAlunos }: AlunoListProps) => {
  if (alunos.length === 0) return <h1>Nenhum aluno foi encontrado.</h1>;

  return (
    <>
      <span>
        {alunos.length}{" de "}{totalAlunos}{" "}
        {totalAlunos > 1 ? "alunos encontrados" : "aluno encontrado"}
      </span>

      <ul>
        {alunos.map((aluno) => (
          <AlunoItem key={aluno.id} {...aluno} />
        ))}
      </ul>
    </>
  );
};

export default AlunoList;
