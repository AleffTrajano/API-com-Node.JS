const express = require('express');
const router = express.Router();


router.get('/',(req, res,next) => {
    res.status(200).send({
        mensagem:"retorna todos os pedidos"
    });
});

router.post('/',(req,res,next) => {

    const pedido ={
        idproduto:req.body.idproduto,
        quantidade:req.body.quantidade
    };
    res.status(201).send({
        mensagem:"Insere um pedido",
        pedidoCriado:pedido

    })

});

module.exports=router;