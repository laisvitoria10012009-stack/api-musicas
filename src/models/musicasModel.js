let musicas = [
{
id: 1,
nome: 'Baby',
autor: 'Justin Bieber',
link: 'https://www.youtube.com/watch?v=kffacxfA7G4'
},
{
id: 2,
nome: ' Beauty And A Beat',
autor: 'Justin Bieber',
link: 'https://www.youtube.com/watch?v=Ys7-6_t7OEQ'
},
{
id: 3,
nome: 'Sorry',
autor: 'Justin Bieber',
link: 'https://www.youtube.com/watch?v=fRh_vgS2dFE'
},
{
id: 4,
nome: 'Love Yourself',
autor: 'Justin Bieber',
link: 'https://www.youtube.com/watch?v=oyEuk8j8imI'
},

];
let proximoId = 5;
function listarTodos() {
return musicas;
}
function buscarPorId(id) {
return musicas.find(p => p.id === id);
}

function buscarPorNome(nome) {
return musicas.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
}

const incluirMusica = (novaMusica) => {
    const novoId = proximoId++;

    const musicaCompleta = {
        id: novoId,
        ...novaMusica
    };
    musicas.push(musicaCompleta);
    return musicaCompleta;
};




function atualizar(id, dados) {
const index = musicas.findIndex(musica => musica.id === parseInt(id));
if (index !== -1) {
    musicas [index] = {
id: parseInt(id),
...musicas[index],
...dados
    };
    return musicas[index];
}
return null;
    };
    


function deletar(id) {
const index = musicas.findIndex(musica => musica.id === parseInt(id));
if (index !== -1) {
    const musicaRemovida = musicas[index];
    musicas.splice(index, 1);
    return musicaRemovida;
}
return null;
}



module.exports = {
listarTodos,
buscarPorId,
incluirMusica,
atualizar,
deletar,
buscarPorNome

};