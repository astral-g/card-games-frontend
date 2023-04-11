import React from 'react'
import getDataFromRoute from '../middleware/dataRoute';

function Hello() {
   return(
      <>
         <button onClick={console.log(getDataFromRoute('http://localhost:8080/greeting'))}>Test</button>
      </>
   )
}

export default Hello;
