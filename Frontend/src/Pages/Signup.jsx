// import { useState } from "react";
//  import "../Styles/registration.css"
// // import { useNavigate } from "react-router-dom";





// export default function Signup(){
//     // const [users, setUsers] = useState({
//     //     mail:"",
//     //     password: "",
//     //     confirmpassword: ""
//     // }) 
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmpassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');
//     //const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//     //const { loginStatus, SERVER_ADDRESS } = useContext(UserContext);
//     // const navigate = useNavigate()

//     // useEffect(() => {

//     //     loginStatus ? navigate('/list') : navigate('/signup');
//     //   }, []);
//     // const SERVER_ADDRESS = "localhost:4500"
//     const validatePassword = () => {
        
//         if (password.length < 5) {
//           setPasswordError('Password should be at least 6 characters long.');
//           return false;
//         }
//         setPasswordError('');
//         return true;
//       };
    
//       const validateConfirmPassword = () => {
//         if (password !== confirmPassword) {
//           setConfirmPasswordError('Passwords are not matching.');
//           return false;
//         }
//         setConfirmPasswordError('');
//         return true;
//       };

//       const handleSignUp = () => {

//         if (!validatePassword() || !validateConfirmPassword()) {
//           return;
//         }
    
//         // Create an object with the user data
    
//         const userData = {
//           email: email,
//           password: password,
//           confirmPassword: confirmPassword
//         };
    
       
    
//         // Send a POST request to the signup endpoint
//         fetch("localhost:4500/user/register", {
    
//           method: 'post',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(userData)
//         })
//           .then(response => {
//             if (response.status === 201) {
//               alert('User registered successfully!');
//             //   navigate('/signin');
//             }
//             return response.json();
//           })
//           .then(data => {
//             console.log(data);
//           })
//           .catch(error => {
//             // Handle any errors that occur during the request
//             console.error('Error:', error);
//           });
    
//         setEmail('');
//         setPassword('');
//         setConfirmpassword('');
//       };
    
//     //   if (redirectToSignIn) {
//     //     return <SignInPage />;
//     //   }





// return <div id="form-container">
    
//     <form  action="#" method="POST" onSubmit={e => {
//         e.preventDefault()
//         {handleSignUp}
//         console.log(email)
//         console.log(password)

//     }}>
//           <div className="input-container"> 
            
//             <input type="email" placeholder="Mail Id" 
//             label='Mail'
//             value={email}
//             onChange={e => setEmail(
//                e.target.value
//             )}
//             />
//             </div>
            
//             <div className="input-container">
//             <input type="Password" placeholder="Password" 
//              label='Password'
//              value={password}
//              onChange={e => setPassword(
//                 e.target.value
//              )}
            
           
           
//             />
//             </div>
//             <div className="input-container">
//             <input type="Password" placeholder="Confirm Password" 
//              label='Password'
//              value={confirmPassword}
//              onChange = {e => setConfirmpassword(
//                 e.target.value
//              )}
           
           
//             />
//             </div>
//             <div id="input-container">
//             <button type="submit" >Login</button> 
//             </div>
//     </form>
// </div>

// }
// import './Signup.css';
// import React, { useState } from 'react';


// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
  

//   const validateEmail = () => {
//     // Check if the email contains the @ symbol
//     if (!email.includes('@')) {
//       setEmailError('Invalid email format. Email should contain @.');
//       return false;
//     }
//     setEmailError('');
//     return true;
//   };

//   const validatePassword = () => {
//     // Check if the password has a minimum length of 6 characters
//     if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters long.');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const validateConfirmPassword = () => {
//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords are not matching.');
//       return false;
//     }
//     setConfirmPasswordError('');
//     return true;
//   };

//   const handleSignUp = () => {
//     // Validate the email, password, and confirm password
//     if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
//       return;
//     }

//     // Create an object with the user data

//     const userData = {
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };
    
    
   

//     // Send a POST request to the signup endpoint
//     fetch("localhost:3000/user/register", {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           alert('User registered successfully!');
//         //   navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });

//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };


//   return (
//     <div className="App">
//       <header className="App-main">
//         <div className="cont-app">
         
//           <p className="Text">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           {emailError && <p className="finderror">{emailError}</p>}
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputf"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           {passwordError && <p className="finderror">{passwordError}</p>}
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputF"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           {confirmPasswordError && <p className="finderror">{confirmPasswordError}</p>}
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
      
//       </header>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import "./Signup.css"
import BrandLogo from '../../utils/BrandLogo';
import { Link, useNavigate} from 'react-router-dom';


export default function signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const EmailValidation = () => {

    if (!email.includes('@')) {
      setEmailError('Email should contain @.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const PasswordValidation = () => {
    
    if (password.length < 5) {
      setPasswordError('Password should be at least five characters to longin.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const ConfirmPasswordValidation = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords are mismatching.');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const onsubmit = async () => {
    
    if (!EmailValidation () || !PasswordValidation() || !ConfirmPasswordValidation) {
      return;
    }

    const signupData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    
    
   

    ////
     await fetch("http://localhost:4500/user/register", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupData)
    })
      .then(response => {
        if (response.status === 201) {
          alert('User registration Done');
       
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
      })
      .catch(error => {
       
        console.error('Error Message:', error);
      });

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };


  return (
    <div className="App">
      <header className="App-main">
        <div className="cont-app">
        <BrandLogo />
          <p className="Text">Create New Account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <p className="finderror">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            className="inputf"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && <p className="finderror">{passwordError}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            className="inputF"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className="finderror">{confirmPasswordError}</p>}
          <button className="signInButton" onClick={ onsubmit }>
            Sign Up
          </button>
        </div>
        <Link className="login" to="/login">
          Sign In
        </Link>
      </header>
    </div>
  );
}
