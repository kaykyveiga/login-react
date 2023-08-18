import { useState } from "react"
import "./Login.css"
import useFetch from '../hooks/useFetch';
import Button from "./Button";

const url = " http://localhost:3000/users"

const Login = () => {
    const { httpConfig } = useFetch(url)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const users = {
            email, password
        }
        httpConfig(users, "POST")
        setEmail("")
        setPassword("")
    }
    return (
        <div className="login">
            <h1 id="title">Login</h1>
            <form onSubmit={handleSubmit} id="form" >
                <label>
                    <input type="email" name="name" className="input" required placeholder="Enter your email" autoComplete="userName" value={email} onChange={handleEmail} />
                </label>
                <label>
                    <input type="password" name="password" className="input" required placeholder="Enter your password" autoComplete="current-password" value={password} onChange={handlePassword} />
                </label>
                <Button type="submit" id="enter-btn" text="Enter" />
            </form>
        </div>
    )
}

export default Login