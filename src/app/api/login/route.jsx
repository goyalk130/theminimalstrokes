import prisma from "@/libs/prismadb"
import * as bcrypt from "bcrypt"


export async function POST(req){
    const body = await req.json()

    const user =await prisma.user.findFirst({
        where:{
            email:body.username
        }
    })

    if(user && (await bcrypt.compare(body.password,user.password))){
        const {password,...result} = user;
        return new Response(JSON.stringify(result))
    }else{
        return new Response(JSON.stringify(null))
    }
}