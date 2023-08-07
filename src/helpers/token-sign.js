import jwt  from "jsonwebtoken";

const generarJWT = (tipo, usuario)=>{
    return new Promise( (resolve, reject)=>{
        const payload = {tipo, usuario};
        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: '3h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })
}

export default generarJWT