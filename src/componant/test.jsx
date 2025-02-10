
import React, { useState } from 'react'
import axios from 'axios'
function Test() {
    const [phpque,setphpque]=useState('')
    async function fetchdata() {
        const dat=await axios.get('Quiz.json');
    
        // console.log(dat.data.Php.Easy);
        // setphpque(JSON.stringify(dat.data.Php.Easy[0].que));
         setphpque(dat.data.Php.Easy);
        
        
    }

    console.log(phpque.length)
    for(let i=0; i<phpque.length; i++){
        console.log(phpque[i].que)
    }
    // console.log(phpque);
    
  return (
    <div>
      
      <button onClick={fetchdata}>click me</button>
    </div>
  )
}

export default Test;
