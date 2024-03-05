import pool from "../../database/dbConnection.js"; // Ajuste o caminho conforme necessário
const failSearch = (mode) => {
    throw new Error(`Falha na busca por ${mode}`);
};
const resolvers = {
    Query: {
        alunos: async (_, args) => {
            try {
                let query = 'SELECT * FROM alunos WHERE 1=1';
                const queryParams = [];
                if (args.nome) {
                    query += ' AND nome LIKE ?';
                    queryParams.push(`%${args.nome}%`);
                }
                if (args.cpf) {
                    query += ' AND cpf = ?';
                    queryParams.push(args.cpf);
                }
                if (args.email) {
                    query += ' AND email = ?';
                    queryParams.push(args.email);
                }
                const [rows] = await pool.query(query, queryParams);
                return rows;
            }
            catch (error) {
                console.error(error);
                failSearch("alunos");
                // A função failSearch sempre lança um erro, então este retorno é apenas formalidade.
                return [];
            }
        },
    },
};
export default resolvers;
