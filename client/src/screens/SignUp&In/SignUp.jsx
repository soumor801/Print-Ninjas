import Layout from "../../components/Layout";
import { TextField, Button } from "@mui/material";
import App from "../../App";
import {   makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const SignUp = ({ handleOpen, handleClose }) => {
  const theme = createTheme();
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  return (
    <Layout>
    <div>
        <div>This is the Sign up page </div>
        <form >
          <TextField label="First Name" variant="filled" required />
          <TextField label="Last Name" variant="filled" required />
          <TextField label="Email" variant="filled" type="email" required />
          <TextField label="Password" variant="filled" type="password" required />
          <div>
  <Button variant="contained">
    Cancel
  </Button>
  <Button type="submit" variant="contained" color="primary">
    Signup
  </Button>
</div>
</form>
      </div>
      </Layout>
  )
}
export default SignUp;