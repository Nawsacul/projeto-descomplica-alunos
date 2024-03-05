import { ErrorProps } from "../../interfaces/ErrorProps";

const Error = ({ mensagem }: ErrorProps) => (
  <h1>Opa.. Parece que tivemos um erro: {mensagem}</h1>
);

export default Error;
