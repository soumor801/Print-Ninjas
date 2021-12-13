import Layout from "../../components/Layout";
import {useState } from 'react' 
import { TextField, Button } from "@mui/material";
const SignIn = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
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
    <div>
        <div>This is the Sign In page </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData)
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