// import { createContext, useState } from "react";


// const LoginUserContext = createContext({
//     username: null
// })

// function LoginUserProvider({children}){
//     const [username, setUsername] = useState(null)
//     return <LoginUserContext.Provider value = {
//         {
//             username,
//             doLogin: username => setUsername(username)
//         }
//     }>
//         {children}
//     </LoginUserContext.Provider>
// }
// const useLoginUserContext = () => useContext(LoginUserContext)
// export {
//     LoginUserContext, useLoginUserContext
// }

