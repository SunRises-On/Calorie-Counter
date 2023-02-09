import '../components/CurrDateStyle.css';
import React from 'react';
export default function CurrDate(){
    console.log("CurrDate");
    const weekday = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];

    
    return(
        <div className='body' >
            <h1
            className='h1'
            //tyle={{ color:"rgb(121,125,127)" }}
            >{day}</h1>
        </div>
    )
}