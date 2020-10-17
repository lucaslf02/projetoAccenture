import {decoder} from "../utils/decoder.js";

const decode = async (req,res)=> {
    const {code} = req.params;        
    try{        
        const text = await decoder(code);
        if (text === ""){
            throw new Error("Parametro invalido");
        }
        res.status(200).send("deu certo, code: "+ text);
    }catch(error){
        res.status(500).send({message: "erro na requisição ao decodificar; erro: "+ error});
    }
}

export default {decode};