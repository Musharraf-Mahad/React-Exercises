import { useState } from "react"

 export const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isLogout, setLogout] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        if(username && Password) {
            setLoggedIn(true);
        }
    }

        const handleLogout = () => {
        setUsername('');
        setPassword('');
        setLoggedIn(false);
    }

    if(isLoggedIn) {
        return(
            <>
            <h1>Welcome, {username}</h1>
            <button onClick={handleLogout}>Logout</button>
            </>
        )
    }

    return(
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
        Username: <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} required
        /> <br />
        Password: <input type="password"
        value={Password}
        onChange={(e)=>setPassword(e.target.value)} required
         /> <br />
        <button type="submit">Login</button>
        </form>

        
    )
}