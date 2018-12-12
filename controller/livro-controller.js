'use strict'

const mongoose = require ('mongoose')
var teste;

class LivroController{

    constructor(app){
        app.get ('/livro', this.buscarLivros)
        app.post('/livro', this.cadastrarLivro)
        app.delete('/livro', this.deletarLivro)
    }

    async buscarLivros(req, res){
        res.json(await mongoose.model('livros') .find());
    }

    async cadastrarLivro(req, res){
        let livro = req.body;   
        res.json(await mongoose.model('livros').create(livro));
    }
    async deletarLivro(req, res){
        let id = req.body._id;
        res.json(await mongoose.model('livros').deleteOne({_id: id}));
    }
}








module.exports = LivroController;