const mongoose = require ('mongoose');

class Livro{
    constructor(){
        mongoose.model('livros', { 
            id: String,
            livro: String,
            paginas: String
         });
    }
}

module.exports = Livro;