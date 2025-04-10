import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  
  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password: '',
  // });

  const loginUser = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    // console.log('로그인폼', formValues);
    setAuthenticate(true);
    navigate('/');
  };


  return (
    <Container maxWidth="xs" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        로그인
      </Typography>
      <form onSubmit={loginUser} noValidate autoComplete="off">
        <TextField
          label="id"
          name="id"
          type="id"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={formValues.email}
          sx={{
            '& label.Mui-focused': {
              color: 'black',  
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              },
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={formValues.password}
          sx={{
            '& label.Mui-focused': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
        <Button 
          variant="contained"
          type="submit"
          fullWidth
          style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white' }}
        >
          로그인
        </Button>
      </form>
    </Container>
  );
};

export default Login;
