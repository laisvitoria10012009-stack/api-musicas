const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const musicasRoutes = require('./src/routes/musicasRoutes');
app.use('/musicas', musicasRoutes);
app.listen(PORT, () => {
console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
console.log(`📦 API MVC implementada com sucesso!`);
});