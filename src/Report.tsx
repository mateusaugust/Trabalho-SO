import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import Graphic from './components/Graphic';
import { IoColorFill } from 'react-icons/io5';


type TReport = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  setPrintReport: React.Dispatch<React.SetStateAction<boolean>>;
};

const Report = ({ setData, data, setPrintReport }: TReport) => {

  const handleClickBack = () => {
    setPrintReport(false);
    setData([]);
  };

  return (
    <>
    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography fontSize="30px" fontFamily="monospace">
          RELATÓRIO
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography fontSize="15px" fontFamily="monospace">{`Última atualização: ${data["Meta Data"]["3. Last Refreshed"].split('-').reverse().join('-')}`}</Typography>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Graphic data={data}/>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap:"30px" }}>
        <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <IoColorFill color='#FF5733'/>
            <Typography fontFamily="monospace">Fechamento</Typography>
        </Box>

        <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <IoColorFill color='#6842d9'/>
            <Typography fontFamily="monospace">7 Dias</Typography>
        </Box>

        <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <IoColorFill color='#3d7b30'/>
            <Typography fontFamily="monospace">30 Dias</Typography>
        </Box>


        <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <IoColorFill color='#fba725'/>
            <Typography fontFamily="monospace">60 Dias</Typography>
        </Box>
      </Grid>

     
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => handleClickBack()}>
          <Typography fontFamily="monospace">Voltar</Typography>
        </Button>
      </Grid>

    </Grid>
    </>
  );
}

export default Report;
