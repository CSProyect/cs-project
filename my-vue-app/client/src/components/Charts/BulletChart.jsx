import { Bullet } from '@ant-design/plots';
import { red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import './BulletChart.css'

export default function BulletChart({ maps }) {

 

useEffect(()=> {

    console.log('---',maps)

})
 
 if(maps.length === 0) return <p>Loading...</p>

  const ttWonSum = maps.ttWon.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const ctWonSum = maps.ctWon.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalSum = ttWonSum + ctWonSum;

  const ttWonPercentage = (ttWonSum / totalSum) * 100;
  const ctWonPercentage = (ctWonSum / totalSum) * 100;

  const roundedTtWonPercentage = Math.round(ttWonPercentage);
  const roundedCtWonPercentage = 100 - roundedTtWonPercentage; 

    

    const data = [
        {
          title: maps.mapName.toUpperCase(),
          ranges: [50,100],
          measures: [roundedTtWonPercentage, roundedCtWonPercentage],
          target: 50,
        },
      ];
      const config = {
        data,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
          range: ['#FFbcb8', '#FFe0b0'],
          measure: ['#5B8FF9', '#61DDAA'],
          target: '#39a3f4',
        },
        label: {
          measure: {
            position: 'middle',
            style: {
              fill: '#fff',
            },
          },
        },
        xAxis: {
          line: null,
        },
        yAxis: false,
        tooltip: {
          showMarkers: false,
          shared: true,
        },
        legend: {
          custom: true,
          position: 'bottom',
          items: [
            {
              value: 'CT',
              name: 'Counter',
              marker: {
                symbol: 'square',
                style: {
                  fill: '#5B8FF9',
                  r: 5,
                },
              },
            },
            {
              value: 'TT',
              name: 'Terrorist',
              marker: {
                symbol: 'square',
                style: {
                  fill: ' #61DDAA',
                  r: 5,
                },
              },
            },
          ],
        },
      };
 

 

  return (
  
      <div style={{ backgroundColor: 'white', padding: '10px'}}>
      <Bullet style={{ height: '100px'}} {...config} />
      </div>
        
   
  )
}
