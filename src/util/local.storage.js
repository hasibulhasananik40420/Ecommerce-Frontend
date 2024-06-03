export const setToLocalStorage =(key,token)=>{
    if(!key || typeof window === "undefined"){
        return ""
    }

    return localStorage.setItem(key,token)
}



export const getToLocalStorage =(key)=>{
    if(!key || typeof window === "undefined"){
        return ""
      }
    
      return localStorage.getItem(key)
}




export const removeToLocalStorage =(key)=>{
    if(!key || typeof window === "undefined"){
        return ""
      }
    
      return localStorage.removeItem(key)
}