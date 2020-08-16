const express = require('express');
const router = express.Router();


router.get('/',(req, res,next) => {
    res.status(200).send({
        mensagem:"retorna todos os pedidos"
    });
});

router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem:"Insere um pedido"

    })

});

module.exports=router;