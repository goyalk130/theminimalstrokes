import prisma from "@/libs/prismadb"
import * as bcrypt from "bcrypt"


export async function POST(req){
    const body = await req.json()
    const salt = await bcrypt.genSalt(10);

    const user =await prisma.user.create({
        data:{
            name:body.name,
            email:body.email,
            password: await bcrypt.hash(body.password,salt),
        }
    })

    const {password, ...result} = user

    return new Response(JSON.stringify(result))
 }