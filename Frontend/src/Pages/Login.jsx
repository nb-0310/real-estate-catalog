// // import { useEffect, useState } from "react"
// // import { useLoginUserContext } from "../Components/LoginUserContext"
// // import { useNavigate } from "react-router-dom";




// // export default function Login() {

// //     const [user, setUser] = useState({
// //         username: "",
// //         password: ""
// //     })

// //     const {username, doLogin} = useLoginUserContext()
    
// //     const navigate = useNavigate()
// //     useEffect(() => {
// //         if(username){
// //             navigate('/')
// //         }
// //     }, [])
    
// //     return <div id='login-container'>
// //          <form action="#" method="POST" onSubmit={
// //             e => {
// //                 e.preventDefault()
// //                 doLogin(user)
// //                 console.log(user)
// //             }
// //          }>
        
            
// //             <div className="input-container"> 
// //             <input type="text" placeholder="User Id" 
// //             label='Username'
// //             onChange={e => setUser(user => ({
// //                 ...user,
// //                 username:e.target.value
// //             }))}
// //             value={user.username}/>
// //             </div>
// //             <div className="input-container">
// //             <input  type="Password" placeholder="Password" 
// //              label='Password'
            
// //             onChange={e => setUser(user => ({
// //                 ...user,
// //                 password:e.target.value
// //             }))}
// //             value={user.password}
           
// //             />
// //             </div>
// //             <div className="input-container">
// //             <button  type="submit">Login</button>     
// //             </div>
// //             </form>
                            
// //     </div>
// // }





// import './Login.css';
// import { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import BrandLogo from '../../utils/BrandLogo';
// import { UserContext } from '../../context/UserContext';

// function Login() {
//   const [email, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const { loginStatus, updateUserData, updateLoginStatus, SERVER_ADDRESS } = useContext(UserContext);
//   const navigate = useNavigate();
//   SERVER_ADDRESS = "localhost:4500"
//   useEffect(() => {
//     loginStatus ? navigate('/list') : <></>;
//   }, []);

//   const handleSignIn = async () => {
//     // Create the payload object with user credentials

//     // Make an HTTP POST request to save user data to the database

//     await fetch(`${SERVER_ADDRESS}user/Login`, {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email : email,
//         password : password
//       })
//     })

//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else if (response.status === 401) {
//         throw new Error("User not registered. Please sign up to continue.");
//       } else {
//         throw new Error("Sign in failed.");
//       }
//     })

//     // .then(response => response.json())
//     .then(data => {
//       // Handle the response from the API
//       if(data.status === "success"){
//         console.log(data)
//         updateUserData(data);
//         updateLoginStatus(true);
//         navigate('/list')
//         console.log('Response from server:', data);
//       }
//       else{
//         throw new Error("sign in failed")
//       }

//     })
//     // .catch(error => {
//     //   console.error('Error:', error);
//     //   // Handle the error
//     // });
//     .catch(error => {
//       console.error('Error:', error.message);
//       alert(error.message); // Display the error message as an alert
//     });
    

//     setUserId('');
//     setPassword('');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="whiteBox">
//           <BrandLogo/>
//           <p className="subText">Enter your credentials to access your account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField11"
//             value={email}
//             onChange={event => setUserId(event.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField22"
//             value={password}
//             onChange={event => setPassword(event.target.value)}
//           />
//           <button className="signInButton" onClick={handleSignIn}>Sign In</button>
//           <Link className="signIn" to="/signup">Sign Up</Link>
//         </div>
//         <p className="signInn">
//           Don't have an account?
//           <Link to="/signup"> Sign Up</Link>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default Login;



export default function Login(){
    return<>
    </>
}
