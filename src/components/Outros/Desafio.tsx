import React from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login: React.FC= () => {

   /*  interface DadoI {
        email: string,
        senha: number
    } */

    /* const [dado, setDado] = useState<DadoI>(); */

  return (
    <>
     <Grid container>
       <Grid item sx={{ display: 'flex',marginTop: 3, flexDirection: 'column', textAlign: 'center', gap: 2}}>
            <TextField
              id="email"
              label="Email"
              type='email'
            />
            <TextField
              id="senha"
              label="Senha"
              type='password' 
            />
            <Button 
                variant="contained" 
                color="success"
            >
              Login
            </Button>
       </Grid>
     </Grid>
    </>
  );
};

export default Login;
