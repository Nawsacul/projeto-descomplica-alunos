import IAluno from "../../interfaces/IAluno";
import pool from "../../database/dbConnection.js";

interface AlunosArgs {
  nome?: string;
  cpf?: string;
  email?: string;
}

const failSearch = (mode: string): void => {
  throw new Error(`Falha na busca por ${mode}`);
};

const resolvers = {
  Query: {
    alunos: async (_: any, args: AlunosArgs): Promise<IAluno[]> => {
      try {
        let query = 'SELECT * FROM alunos WHERE 1=1';
        const queryParams: Array<string | number> = [];
        
        if (args.nome) {
          query += ' AND nome LIKE ?';
          queryParams.push(`%${args.nome}%`);
        }
        if (args.cpf) {
          query += ' AND REPLACE(cpf, ".", "") LIKE ?';
          queryParams.push(args.cpf.replace(/\./g, ""));
        }
        if (args.email) {
          query += ' AND email = ?';
          queryParams.push(args.email);
        }

        const [rows] = await pool.query(query, queryParams);

        return rows as IAluno[];
      } catch (error) {
        console.error(error);
        failSearch("alunos");

        return []; 
      }
    },
  },
};

export default resolvers;
