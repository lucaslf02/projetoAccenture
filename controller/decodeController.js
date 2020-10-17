

const decode = async (req,res)=> {
    const {code} = req.params;
    console.log(req.params)
    try{        
        res.status(200).send("deu certo, code: "+code);
    }catch(error){
        res.status(500).send({message: "erro na requisição de decodificação; erro: "+ error});
    }
}

export default {decode};