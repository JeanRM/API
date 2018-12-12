'use strict'
// Importando Mongoose
const mongoose = require ('mongoose')

// Importando body-parser
const bodyParser = require ('body-parser')

// Importando Express
const Express = require('express')

//Importando models
const Livro = require ('./model/livro')

//Importando controllers
const LivroController = require ('./controller/livro-controller')



class Server {
    
    constructor() {
        // Instanciando o Express
        this.app = new Express();

        // Configurando Body Parser
        this.app.use(bodyParser.json());

        // Configuração de CORS
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
            next();
        });

        // Conectando ao Banco de Dados MongoDB (mLab)
        mongoose.connect("mongodb://admin:1vksjuvhi1@ds145289.mlab.com:45289/livro", { useNewUrlParser: true })

        // Registrando os Models (Collections)
        new Livro();

        //Instanciar o LivroController
        this.livroController = new LivroController(this.app);

        this.app.listen(3000);
    }
}

new Server();





