import React, {useState} from 'react'


const Register = () => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
        <div className='container-sm mt-5' style={{width:"50%"}}>
        <h1 className="form-title display-3">RegisterForm</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter username.."
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last firstname.."
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last name.."
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password2
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm your password.."
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
        </div>
    
  )
}

export default Register