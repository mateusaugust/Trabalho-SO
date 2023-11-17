import React, { useEffect, useState } from 'react';
import { Line } from '@nivo/line';

type TGraphic = {
  data: any;
};

const Graphic = ({data}:TGraphic) => {
  var dataToGraphic = [
    {
      id: 'Close',
      data: [
        {x:"", y: null as number | null},
      ],
    },
    {
      id: '7 dias',
      data: [
        {x:"", y: null as number | null},
      ],
    },
    {
      id: '30 dias',
      data: [
        {x:"", y: null as number | null},
      ],
    },
    {
      id: '60 dias',
      data: [
        {x:"", y: null as number | null},
      ],
    }
  ]; 

  const handleGetData = () => {
    const labels = Object.keys(data["Time Series (Daily)"]);

    const first60Labels = labels.slice(0, 20);

    first60Labels.forEach(day => {
      
      
      const closeValue = parseFloat(data["Time Series (Daily)"][day]["4. close"]);
      const sevenDays = data["Time Series (Daily)"][day]["6. average 7 days"];
      const thirtyDays = data["Time Series (Daily)"][day]["6. average 30 days"];
      const sixtyDays = data["Time Series (Daily)"][day]["6. average 60 days"];    

      dataToGraphic[0].data.push({ x: day, y: closeValue });

      if(sevenDays !== undefined && sevenDays !== null && closeValue !== null){
        dataToGraphic[1].data.push({ x: day, y: sevenDays });
      } 

      if(thirtyDays !== undefined && thirtyDays !== null ){
        dataToGraphic[2].data.push({ x: day, y: thirtyDays });
      } 

      if(sixtyDays !== undefined && sixtyDays !== null ){
        dataToGraphic[3].data.push({ x: day, y: sixtyDays });
      } 
      
    });
    return dataToGraphic;
  };
  
  

 const colors = ['#FF5733','#6842d9', '#3d7b30', '#fba725'];

  return (
    <div style={{ height: "300px"}}>
      <Line
        data={handleGetData()}
        width={800}
        height={300}
        margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear',min: 'auto', max: 'auto', }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 2.5,
          tickPadding: 5,
          tickRotation: 25, // Girar a legenda em 90 graus
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enablePoints={true}
        enableGridX={false}
        enableGridY={true}
        colors={colors}
      />
    </div>
  );
};

export default Graphic;
