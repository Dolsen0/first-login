import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsBXBK-QQHss71FdX46qeD5w3NH3cAMHo",
  authDomain: "first-login-do.firebaseapp.com",
  projectId: "first-login-do",
  storageBucket: "first-login-do.appspot.com",
  messagingSenderId: "173160310921",
  appId: "1:173160310921:web:4264e85ba360ca3b1a7e58",
};

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    //connect to firebase project
    const app = initializeApp(firebaseConfig);
    //connect to auth
    const auth = getAuth(app);
    //send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err.message));
    //if all ok...
    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="you@here.com"
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input 
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="your password" />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </form>
  );
}

export default Login;
