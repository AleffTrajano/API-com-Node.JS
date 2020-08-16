const express = require('express');
const app = express();
const morgan = require('morgan')

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);


app.use((res,res,next)=>{
    const erro = new Error("Nao encontrado")
    erro.status=404;
    next(erro);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    return res.send({
        erro:{
            mensagem:error.mensagem
        }
    });
});



module.exports=app;