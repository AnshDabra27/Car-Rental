import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
const [error, setError] = useState("")
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("submitted");
    navigate("/")
  };

  return (
    <div className="container-fluid h-screen w-full">

      <div className="row">
        <div className="column mt-5">
          <div className="d-flex justify-content-center align-items-center flex-column shadow-lg rounded w-50 mx-auto p-5 border border-white">
            <h3 className="text-center">SIGN IN </h3>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="form-label">
                  Email address
                  <input type="email" value={email} defaultValue={"garganubhav2004@gmail.com"} data-testid="email-input" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="form-control border border-white bg-transparent text-white" />
                </label>
              </div>
              <br />
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                  <input type="password" value={password} defaultValue={"18765"} data-testid="password-input"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" className="form-control border border-white bg-transparent text-white" />
                </label>
              </div>
              <br />
              <button type="submit" className="btn btn-secondary ml-100" >
                sign in
              </button>

              <div className="mt-3"><p> New to this site <a href="">Sign Up</a></p></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;