import React from 'react';
import Sdata from './Sdata'
import Card  from './Card'


const App=()=>{
  const ndata= Sdata.map(( Val,i)=><Card key={i}  imgsrc={Sdata[i].img}
  cardtitle={Val.stitle}
  sname={Sdata[i].sname}
  link={Sdata[i].link} />)
  return(
    ndata
  
  ) 
}

export default App;
