import { createContext,  useState } from "react";
import { auth } from "../Firebase/firebse.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUsers = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const authInfo = {
        user,
        setUser,
        setLoader,
        createUsers,
        signInUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;