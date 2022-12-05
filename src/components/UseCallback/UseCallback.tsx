import React, {useCallback, useState} from 'react';

// MUI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Paper, Button } from '@mui/material';

// TABLE LISTA
import TableList from './TextList';


// HOOK
const UseCallback: React.FC = () => {
  const [texto, setTexto] = useState<string>('');
  const [textoLista, setTextoLista] = useState<string[]>([]);

  const handleSubmit = () => {
    setTextoLista([...textoLista, texto])
    setTexto('')
  };

 // COM USECALLBACK 
  /* const listaModifica = useCallback((list: Array<string>) => {
    const espaco = list.map((item) => item.split('').join('-'));

    return espaco;

  }, []); */

  // SEM USECALLBACK
  const listaModifica = (list: Array<string>) => {
    const espaco = list.map((item) => item.split('').join('-'));

    return espaco;
  };

  return (
    <Grid container display='flex' textAlign='center' flexDirection='column' gap={3}>

      <Typography variant="h2" color="initial">useCallback</Typography> 

      <TextField id="input" label="Digite algo..." variant="outlined" color='secondary'
        value={texto}
        onChange={e=> setTexto(e.target.value)}
      />

      <Button variant='outlined' color="secondary" sx={{p: 1}}
        type='button'
        onClick={handleSubmit}
      >
        Adicionar
      </Button>
     
      <Grid item sm={12} textAlign='start'>
        <Typography variant="h5" color="initial">Minha lista:</Typography>

        <Paper sx={{
            height: 400,
            width: '100%',
            backgroundColor: '#A0A6AC',
            borderRadius: '0.2rem',
            p:3
        }}>
          <TableList list={textoLista} listModifier={listaModifica}/>
        </Paper>
      </Grid>
    
    </Grid>  
  );
};

export default UseCallback;

