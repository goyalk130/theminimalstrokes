export default function geturl(url){
    if(process.env.VERCEL_URL){
        return `${process.env.VERCEL_URL}/${url}`
    }else{
        return `http://localhost:3000${url}`
    }
}