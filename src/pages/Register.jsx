import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword ) {
            setError("Passwords do not match");
        }
        else if(password == "") {
            setError("Password should not be blank");
        }
        else {
            setError("");
            alert("submitted");
            navigate("/login");
        }
    };

    return (
        <div className="container-fluid h-screen w-full bg-[url('https://i.pinimg.com/564x/6e/66/77/6e6677ef20d725ff0985eb1ef90fc367.jpg')]">
            <div className="row bg-[url('https://i.pinimg.com/564x/6e/66/77/6e6677ef20d725ff0985eb1ef90fc367.jpg')]">
                <div className="column mt-5 bg-[url('https://i.pinimg.com/564x/6e/66/77/6e6677ef20d725ff0985eb1ef90fc367.jpg')]">
                    <div className="d-flex justify-content-center align-items-center flex-column shadow-lg rounded w-50 mx-auto p-5 border border-white ">
                        <h3 className="text-center">SIGN UP</h3>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="form-label">
                                    Email address
                                    <input
                                        type="email"
                                        data-testid="email-input"
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        className="form-control border border-white bg-transparent text-white"
                                    />
                                </label>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="password" className="form-label">
                                    Password
                                    <input
                                        type="password"
                                        data-testid="password-input"
                                        placeholder="Enter password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        className="form-control border border-white bg-transparent text-white"
                                    />
                                </label>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                    <input
                                        type="password"
                                        data-testid="confirm-password-input"
                                        placeholder="Confirm password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control border border-white bg-transparent text-white"
                                    />
                                </label>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </div>
                            <br />
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                disabled={!!error} // Disables the button if there is an error
                            >
                                Sign up
                            </button>
                            <div className="mt-3"><p> Already a Member <a href="" >Login</a></p></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
