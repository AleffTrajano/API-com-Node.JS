const express = require('express');
const router = express.Router();


router.get('/',(req, res,next) => {
    res.status(200).send({
        mensagem:"retorna todos os produtos"
    });
});

router.post('/',(req,res,next) => {
    const produto ={
       nome:req.body.nome,
        preco:req.body.preco
    };
    res.status(201).send({
        mensagem:"Insere um produto",
        produtoCriado:produto
    })

});

module.exports=router;