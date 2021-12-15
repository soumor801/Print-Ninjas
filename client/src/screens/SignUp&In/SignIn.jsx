import Layout from "../../components/Layout";
import {useState } from 'react' 
import { TextField, Button } from "@mui/material";
import SignInCSS from '../SignUp&In/SignIn.css'
import { useNavigate } from "react-router";
const SignIn = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();
  const { email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    
  };
  return (
    <Layout>
    <div className='sign-in-form-wrapper'>
       <h1>Sign In here!</h1>
        <form
          className='form-sign-in'
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData)
            navigate('/prints')
        }}
        >
          <TextField label="Email" variant="filled" name='email' type="email" value={email} onChange={handleChange} required />
          <TextField label="Password" variant="filled" name='password' type="password" value={password} onChange={handleChange} required />
          <div>

  <Button type="submit" variant="contained" color="primary">
    Sign In
  </Button>
</div>
</form>
      </div>
      </Layout>
  )
}
export default SignIn;