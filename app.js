const express = require('express')
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/' , (req, res) =>{
    res.json({
        Clothes:[
            {
                name: 'Bermuda Moleton',size: 'M',color: 'Oliva',price: 59.99,quantity: 10,
                description: 'Bermuda Moletom Marrom Esverdeado com detalhe Lateral.',
                images:[
                    'https://images2.marisa.com.br/medias/sys_master/images/images/ha7/h3e/12096496140318/VIRT-BERM-MOL-JET-MASC-MAT-ROVI-VRD-M-10042887232-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hea/hbc/12096496238622/VIRT-BERM-MOL-JET-MASC-MAT-ROVI-VRD-M-10042887232-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h09/hf9/12096496369694/VIRT-BERM-MOL-JET-MASC-MAT-ROVI-VRD-M-10042887232-C3.jpg'
                ]
            },    
            {
                name: 'Calça Jeans Reta',size: 'G',color: 'Azul-Cobalto',price: 99.99,quantity: 15,
                description: 'Calça Jeans Azul-Marinho solta com cós alto',
                images: [
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hd4/ha6/12008531623966/VIRT-CALCA-MASC-AZL-ZAMA-75886-AZUL-42-10043267477-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h85/h4e/12008532082718/VIRT-CALCA-MASC-AZL-ZAMA-75886-AZUL-42-10043267477-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h4e/hc2/12008532541470/VIRT-CALCA-MASC-AZL-ZAMA-75886-AZUL-42-10043267477-C3.jpg'
                ]
            },
            {
                name: 'Camisa Regata', size: 'G', color: 'Cinza', price: 34.99, quantity: 25,
                description: 'Camisa Regata Cinza com listras pretas.',
                images:[
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h7c/h0e/12143632678942/VIRT-MCH-MASC-MSC-ROVI-6020035-MSC-M-10042927761-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h60/ha8/12143633006622/VIRT-MCH-MASC-MSC-ROVI-6020035-MSC-M-10042927761-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hdb/h15/12143633399838/VIRT-MCH-MASC-MSC-ROVI-6020035-MSC-M-10042927761-C3.jpg'
                ]
            },
            {
                name: 'Camisa Polo', size: 'M', color: 'Vermelho', price: 49.99, quantity: 20,
                description: 'Camisas de Cores variadas, com gola média.',
                images:[
                    'https://www.casasbahia-imagens.com.br/Moda/RoupasMasculinas/CamisasPolo/1501500377/1232207990/kit-camisetas-masculinas-basicas-5-cores-1501500377.jpg',
                    'https://www.casasbahia-imagens.com.br/Moda/RoupasMasculinas/CamisasPolo/1501500377/1232208451/kit-camisetas-masculinas-basicas-5-cores-1501500377.jpg',
                    'https://www.casasbahia-imagens.com.br/Moda/RoupasMasculinas/CamisasPolo/1501500377/1232208308/kit-camisetas-masculinas-basicas-5-cores-1501500377.jpg'
                ]
            },
            {
                name: 'Carteira Básica', size: '-', color: 'Preta',price: 15.99, quantity: 30,
                description: 'Carteira Masculina de Couro Preto simples.',
                images:[
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hf2/h23/12092616146974/CARTEIRA-MASC-COURO-PT-05-334-PTO-UN-10043768554-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h73/hce/12092616802334/CARTEIRA-MASC-COURO-PT-05-334-PTO-UN-10043768554-C4.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hf2/h23/12092616146974/CARTEIRA-MASC-COURO-PT-05-334-PTO-UN-10043768554-C1.jpg'
                ]
            },
            {
                name: 'Chinelo', size: '42', color: 'Preto', price: 19.99, quantity: 10,
                description: 'Chinelo Preto de Praia.',
                images:[
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h0f/hf9/12134015926302/VIRT-CHIN-MASC-PRETO-CATA-11619-PTO-42-10043003754-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hd1/h88/12134017663006/VIRT-CHIN-MASC-PRETO-CATA-11619-PTO-42-10043003754-C3.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hd1/h88/12134017663006/VIRT-CHIN-MASC-PRETO-CATA-11619-PTO-42-10043003754-C3.jpg'
                ]
            },
            {
                name: 'Jaqueta com Botões', size: 'M', color: 'Bege', price: 129.99, quantity: 5,
                description: 'Jaqueta Social Masculina Branca com Botões.',
                images: [
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h49/hd5/12116198653982/VIRT-JAQ-MASC-OFW-GIAS-JNBM34420-OFW-M-10043310593-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h0e/hc5/12116198817822/VIRT-JAQ-MASC-OFW-GIAS-JNBM34420-OFW-M-10043310593-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h73/h68/12116202291230/VIRT-JAQ-MASC-OFW-GIAS-JNBM34420-OFW-M-10043310593-C4.jpg'
                ]
            },
            {
                name: 'Mochila Cross', size: '-', color: 'Preta', price: 59.99, quantity: 5,
                description: 'Mochila Azul grande com 3 aberturas para bagagem, e 2 abas laterais.',
                images: [
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h9d/h2f/12017210621982/VIRT-MOCHILA-MASC-AZL-CROSS-CR2031-AZL-10043071050-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/ha6/ha7/12017211539486/VIRT-MOCHILA-MASC-AZL-CROSS-CR2031-AZL-10043071050-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hc1/h88/12017211473950/VIRT-MOCHILA-MASC-AZL-CROSS-CR2031-AZL-10043071050-C4.jpg'
                ]
            },
            {
                name: 'Relógio de pulso', size: '-', color: 'Prateado', price: 129.99, quantity: 3,
                description: 'Relógio Prateado, com detalhes em dourado.',
                images:[
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h04/h0c/12129383546910/REL-KIT-MASC-PRA-99252G0MVNE2K1-PRA-10044124762-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h2b/h52/12129383219230/REL-KIT-MASC-PRA-99252G0MVNE2K1-PRA-10044124762-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/he4/hf4/12129384005662/REL-KIT-MASC-PRA-99252G0MVNE2K1-PRA-10044124762-C5.jpg'
                ]
            },
            {
                name: 'Sapato Social', size: '40', color: 'Marrom', price: 89.99, quantity: 7,
                description: 'Sapato Social de Couro do tipo slip-on.',
                images: [
                    'https://images2.marisa.com.br/medias/sys_master/images/images/hec/hde/12030729748510/VIRT-SAPA-MASC-BROWN-PEGA-12210-Mrm-42-10043451494-C1.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h7a/h9a/12030729945118/VIRT-SAPA-MASC-BROWN-PEGA-12210-Mrm-42-10043451494-C2.jpg',
                    'https://images2.marisa.com.br/medias/sys_master/images/images/h7a/h9a/12030729945118/VIRT-SAPA-MASC-BROWN-PEGA-12210-Mrm-42-10043451494-C2.jpg'
                ]
            }
        ]
        
    })
})

app.listen(PORT, () =>{
    console.log('Escutando na porta ' + PORT);
})