// function Counter(props){
//   console.log("Counter received from props",props)
//   return <h3>Counter:{props.value}
//   is married:{props.isMarried?"yes":"no"}</h3>;

// }

import {useState} from "react";


function Counter(){
  const [counter,setCounter] = useState(0);

  // if using age then const[age,setAge] =useState();

  const handleChange = (value)=>{
    
      setCounter(counter+value);
    }

    //  setCounter((prev)=>{
    //     if(prev<0){
    //    return 0;
    //     }
    //     return prev+value;
    //   });
    // }
    
  return (
<div>
    <h3> Counter :{counter}</h3>
    <button onClick={()=>handleChange(1)}
      > Add 1 </button>
    <button
    onClick={()=>{ if(counter>=1){
      handleChange(-1)}
    }}> Deduct 1 </button>
  </div>
  )
}

export {Counter}