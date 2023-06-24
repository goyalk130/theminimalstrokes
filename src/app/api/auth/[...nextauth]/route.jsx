import NextAuth from "next-auth/next";
import prisma from "../../../../libs/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import geturl from "@/libs/geturl";


const handler = NextAuth({
    providers:[CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          
            const res = await fetch(geturl("/api/login"),{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:credentials?.username,
                    password:credentials?.password
                })
            })

            const user = await res.json();

            if(user){
                return user
            }else{
                return null
            }

        }


      })],

      pages:{
        signIn:"/login"
      },

      callbacks:{
        async jwt({token,user}){
            return {...token,...user}
        },
        async session({session,token}){
            session.user = token
            return session
        }


      }
})


export {handler as GET, handler as POST}