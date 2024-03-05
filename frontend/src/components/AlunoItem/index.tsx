import Aluno from '../../interfaces/Aluno';
import { formatarCPF } from '../../utils/formatarCPF';
import styles from './AlunoItem.module.css';

const AlunoItem = ({ id, nome, cpf, email }: Aluno) => (
  <li key={id} className={styles.aluno__container}>
    <h3 className={styles.aluno__nome}>Nome: {nome}</h3>
    <p className={styles.aluno__cpf}>CPF: {formatarCPF(cpf)}</p>
    <p className={styles.aluno__email}>Email: {email}</p>
  </li>
);

export default AlunoItem;
