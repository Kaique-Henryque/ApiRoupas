const express = require('express')
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/' , (req, res) =>{
    res.json({
        Clothes:[
            {
                name: 'Bermuda Moleton',size: 'M',color: 'Oliva',price: 59.99,quantity: 10,
                description: ''
            },    
            {
                name: 'Calça Jeans Reta',size: 'G',color: 'Azul-Cobalto',price: 99.99,quantity: 15,
                description: ''
            },
            {
                name: 'Camisa Regata', size: 'G', color: 'Cinza', price: 34.99, quantity: 25,
                description: ''
            },
            {
                name: 'Camisa Polo', size: 'M', color: 'Vermelho', price: 49.99, quantity: 20,
                description: ''
            },
            {
                name: 'Carteira Simples', size: '-', color: 'Preta',price: 15.99, quantity: 30,
                description: ''
            },
            {
                name: 'Chinelo', size: '42', color: 'Preto', price: 19.99, quantity: 10,
                description: ''
            },
            {
                name: 'Jaqueta com Botões', size: 'M', color: 'Bege', price: 129.99, quantity: 5,
                description: ''
            },
            {
                name: 'Mochila', size: '-', color: 'Preta', price: 59.99, quantity: 5,
                description: ''
            },
            {
                name: 'Relógio de pulso', size: '-', color: 'Prateado', price: 129.99, quantity: 3,
                description: ''
            },
            {
                name: 'Sapato Social', size: '40', color: 'Marrom', price: 89.99, quantity: 7,
                description: ''
            }
        ]
        
    })
})

app.listen(PORT, () =>{
    console.log('Escutando na porta ' + PORT);
})