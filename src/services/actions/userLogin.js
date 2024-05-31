"use server"


export const userLogin =async (data)=>{
    const res = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },

        body:JSON.stringify(data),
        cache:"no-store"
    })

      const userInfo = await res.json()

      return userInfo

}