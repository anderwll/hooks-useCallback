import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button'
import { Grid, Typography } from '@mui/material';

const UseStateHook: React.FC = () => {
    const [nome, setNome] = useState('Ander');
    const [contador, setContador] = useState(0);

    useEffect(() => {
        if(contador !== 0) {
            document.title = String(contador)
        } else {
            document.title = 'React App'
        }
    }, [contador])

    const showNome = () => {
        if(nome === 'Ander') {
            setNome('Will')
        } else {
            setNome('Ander')
        }
    }

    return (
        <Grid container>
            <Grid item sx={{flexDirection: 'column', textAlign: 'center'}}>
                <Typography variant="h2" color="initial">HOOKS</Typography>
                <Typography 
                    variant="body1" 
                    color="initial"
                    sx={{marginTop: 3}}
                >
                    {nome}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary"
                    sx={{marginTop: 3}}
                    onClick={() => showNome()}
                >
                    Clique aqui
                </Button>
                
                <Typography 
                    variant="body1" 
                    color="initial"
                    sx={{marginTop: 3}}
                >
                    {contador}
                </Typography>
                <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{marginTop: 3}}
                    onClick={() => setContador(() => contador +1)}
                >
                    Contador
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{marginLeft: 2, marginTop: 3}}
                    onClick={() => setContador(0)}
                >
                    Zerar
                </Button>
                {/* <img src={img7} alt="teste"  /> */}
            </Grid>
        </Grid>
    );
};

export default UseStateHook;
