import React, { useState, useEffect} from 'react'
import axios from 'axios'
import BulletChart from '../Charts/BulletChart'


export default function MapCard() {

    const [maps, setMaps] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/allMaps`)
        .then(response => {
            setMaps(response.data)
        })
    }, [])



  return (
    <div>
      {
        maps.map( x => 
          <BulletChart maps={x}></BulletChart>
          )
      }
    </div>
  )
}
