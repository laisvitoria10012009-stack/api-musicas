const musicasModel = require('../models/musicasModel');
function listarTodos(req, res) {
try {
// Chamar a função do Model para buscar os produtos
const produtos = musicasModel.listarTodos();
// Retornar sucesso com status 200
res.status(200).json(produtos);

} catch (erro) {
// Em caso de erro inesperado
res.status(500).json({
mensagem: 'Erro ao listar produtos',
erro: erro.message
});
}
}
function buscarPorId(req, res) {
try {
const id = parseInt(req.params.id);
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido - deve ser uma música'
});
}
const musicas = musicasModel.buscarPorId(id);
if (musicas) {
res.status(200).json(musicas);
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar música',
erro: erro.message
});
}
}

function buscarPorNome(req, res) {
try {
const { nome } = req.query;
if (!nome) {
return res.status(400).json({
mensagem: 'O parâmetro de consulta "nome" é obrigatório'
});
}
const musicas = musicasModel.buscarPorNome(nome);
res.status(200).json(musicas);
} catch (erro) {    
res.status(500).json({
mensagem: 'Erro ao buscar músicas por nome',
erro: erro.message
});
}
}


function incluirMusica (req, res) {
try {
const { nome, autor, link } = req.body;
if (!nome || !autor || !link) {
return res.status(400).json({
mensagem: 'Todos os campos são obrigatórios: nome, autor, link'
});
}
const novamusicas = musicasModel.incluirMusica({
nome,
autor,
link
});
res.status(201).json(novamusicas);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao criar música',
erro: erro.message
});
}
}
function atualizar(req, res) {
try {
const id = parseInt(req.params.id);
const { nome, autor, link } = req.body;
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}
if (!nome || !autor || !link) {
return res.status(400).json({
mensagem: 'Todos os campos são obrigatórios para atualização completa'
});
}
const musicasAtualizada = musicasModel.atualizar(id, {
nome,
autor,
link
});
if (musicasAtualizada) {
res.status(200).json(musicasAtualizada);
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao atualizar música',
erro: erro.message
});
}
}
function deletar(req, res) {
try {
const id = parseInt(req.params.id);
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}
const deletado = musicasModel.deletar(id);
if (deletado) {
res.status(200).json({
mensagem: `Música com ID ${id} removida com sucesso`
});
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao deletar música',
erro: erro.message
});
}
}
function buscarPorCategoria(req, res) {
try {
const { categoria } = req.params;
const musicas = musicasModel.buscarPorCategoria(categoria);
res.status(200).json(musicas);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar músicas por categoria',
erro: erro.message
});
}
}
module.exports = {
listarTodos,
buscarPorId,
incluirMusica,
atualizar,
deletar,
buscarPorCategoria,
buscarPorNome
};