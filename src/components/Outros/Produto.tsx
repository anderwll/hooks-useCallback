import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Produto: React.FC = () => {
    useEffect(()=> {

    }, []);

    const buscarProduto = (e: any) => {
        if(e) {
            console.log('Achou')
        }
    }

    return (
        <Grid container>
            <Grid item sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: 2}}>
                <TextField
                    id="outlined-basic"
                    variant='outlined'
                    label="Buscar produtos..."
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    sx={{marginTop: 2}}
                    onClick={() => buscarProduto(true)}
                >
                  Buscar
                </Button>
            </Grid>
        </Grid>
    );
};

export default Produto;
