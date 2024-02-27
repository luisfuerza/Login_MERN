// usamos createcontex nos permite crear reglas y almacenamietno de la informacion
// usecontext es un hook nos permite consmir uncontexto , es un atajo para compartir la informacion entre componentes
import {createContext,useState,useContext} from 'react'

import { registerRequest } from './../api/auth';//importamos el registeRequest de la api

export const AuthContext = createContext();

export const useAuth = () => {
    const context  = useContext(AuthContext);
    if(!context){
        // si el contexto no se encuentra(!context),no se debe 
        // hacer sin estar autorizado 
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}                           //REcibimos elhijo 
export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [isAuthenticathed, setIsAuthenticathed] = useState(false);//para saber si esta autenticado
    const [ errors, setErrors] = useState([]);//recibimos los errores que se manejan en la libreria de zod

    const signup = async (user)=>{
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            // aqui lo que hacemos es que si este proceso 
            // devuelve valores modificamos el setIsAuthenticathed que esta en falso
            setIsAuthenticathed(true);
        } catch (error) {
            setErrors(error.response.data)//resultado del error
            console.log(error);
        }
    }
    return(//retorno funcion provider
        <AuthContext.Provider value = {{
            signup,
            user,
            isAuthenticathed,
            errors
        }}>
            {children}  {/* enviamos el hijo */}
        </AuthContext.Provider>
    )
}