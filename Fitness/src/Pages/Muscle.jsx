import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Muscle = () => {
    let[muscle,setMuscle] = useState([]) 

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
  headers: {
    'X-RapidAPI-Key': 'aade9c8618msha5fc9e7be27b90fp10b0fejsn10e4130078d9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
useEffect(() => {
    axios.request(options).then(function (response) {
        setMuscle(response.data)
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
},[])
 return <>
 <div>
    
     {muscle.map((item) => 
          <div className="list-group">

     <Link to={'/muscle/info/'+item}  className="list-group-item list-group-item-action exe_name"><div>{item}</div></Link>
     </div>
     
     )}
 </div>

 </>
}