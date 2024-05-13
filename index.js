import express from 'express';
import path from 'path';

const porta = 3000;
const host = '0.0.0.0';
const app = express();

var listaUsuarios = [];

app.use(express.static(path.join(process.cwd(), 'publico')));


app.use('/cadastraUsuarios', (req, resp) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const usuario = req.query.usuario;
    const aplicacao = req.query.aplicacao;

    listaUsuarios.push({
        nome: nome,
        sobrenome: sobrenome,
        usuario: usuario,
        aplicacao: aplicacao
    });

    resp.send(`Usuário ${nome} ${sobrenome} cadastrado com sucesso!`);
});

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
});


