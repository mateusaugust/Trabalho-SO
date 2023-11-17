import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {  FaSearchDollar } from 'react-icons/fa';

import SearchTicker from './services/tickerServices';

import siglasData from "./components/siglasData";
import {  Button, Grid, Typography } from '@mui/material';


type THome ={
  setTicket:React.Dispatch<React.SetStateAction<string>>;
  ticket: string,
  setData: React.Dispatch<React.SetStateAction<any>>;
  setPrintReport: React.Dispatch<React.SetStateAction<boolean>>;
 }

const Home = ({setTicket, ticket, setData, setPrintReport}:THome) => {
  const handleSearch = () => {
    if(ticket){
      SearchTicker.get(`/${ticket}`)
      .then((response) => {
        setData(response.data);
        setPrintReport(true);
      })
      .catch((err) => console.log(err));
    }
  };

  return (

    <Grid container spacing={2} >
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        <FaSearchDollar size='36px' color='#1976D2'/>
        <Typography fontSize="30px" fontFamily='monospace'>Busque por seu Ticker</Typography>
      </Grid>

      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={siglasData}
        sx={{ width: 400}}
        value={ticket}
        onChange={(event, newEvent) => {
          setTicket(newEvent || '');
        }}

        inputValue={ticket}

        onInputChange={(event, newInputValue) =>{setTicket(newInputValue)}}
        renderInput={(params) => <TextField {...params} placeholder='Digite o ticker aqui'  InputLabelProps={{
          shrink: false, // Impede que o rótulo apareça na borda
        }}/>}
        />
      </Grid>

    

      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
        <Button variant='contained' onClick={() => handleSearch()}>
          <Typography fontFamily='monospace'>Buscar</Typography>
        </Button>
      </Grid>
    </Grid>
  )};

export default Home
