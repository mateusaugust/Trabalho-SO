import React, {  useEffect, useState } from 'react';
import Home from './Home';
import { Box, Modal } from '@mui/material';
import Report from './Report';



function App() {
  const [ticket, setTicket ] = useState('');
  

  const [data, setData] = useState();
  const [printReport, setPrintReport] = useState(false);
 

  return (
    <Modal
    disablePortal
    disableEnforceFocus
    disableAutoFocus
    open
    sx={{
      display: 'flex',
      p: 1,
      alignItems: 'center',
      justifyContent: 'center',

    }}
    
  >
     <Box
          sx={{
            display:"flex",
            alignItems:"center", 
            justifyContent:"center",
            position: 'relative',
            width: "99%",
            minHeight:"90%",
            bgcolor: 'background.paper',
            borderRadius:"15px",
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          {!printReport &&(<Home 
            setTicket={setTicket} 
            ticket={ticket} 
            setData={setData}
            setPrintReport={setPrintReport}  
          />)}


          {printReport &&(<Report
            setData={setData}
            data={data}
            setPrintReport={setPrintReport}
          />)}
  
          
        </Box>
  </Modal>
   
  );
}

export default App;
