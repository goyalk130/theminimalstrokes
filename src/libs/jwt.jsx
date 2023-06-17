import jwt from "jsonwebtoken"
const DEFAULT_SIGN_OPTION={
    expiresIn:"1h"
}

export function signJwtAccessToken(payload,options=DEFAULT_SIGN_OPTION){
    const secretKey = process.env.SECRET_KEY
    
    const token = jwt.sign(payload,secretKey,options)
    return token
}

export function verifyJwt(token){
    try{const secretKey = process.env.SECRET_KEY

    const decode = jwt.verify(token,secretKey);
    return decode}
    catch(error){
        console.log(error)
        return null 
    }
}