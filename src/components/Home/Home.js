import React, { useEffect, useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    const[fruits, setFruits] =  useState([])
    useEffect(()=>{
        fetch('https://stark-castle-51698.herokuapp.com/fruits')
        .then(response => response.json())
        .then(result=>{
            console.log(result);
            setFruits(result);
        })
    },[])
      
    return (
        <div className='row'>

            {
                fruits.map( fruit=> <Fruits key={fruit._id} fruit={fruit}></Fruits>)
                
            }
           
        </div>
    );
};

export default Home;