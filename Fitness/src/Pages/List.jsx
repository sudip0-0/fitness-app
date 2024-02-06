import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const List =() => {
    let[list,setList] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log(params);
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/${params.etype === "muscle" ? "target" : params.etype === "bodypart" ? "bodyPart" : "" }/${params.list}`,
            headers: {
              'X-RapidAPI-Key': 'aade9c8618msha5fc9e7be27b90fp10b0fejsn10e4130078d9',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
          
            setList(response.data.splice(0,10))
          }).catch(function (error) {
              console.error(error);
          });
    },[])


    
    return (<>
    <div className="row">
    
    {list.map((item)=>{
        return <>
        {console.log(item)}
          <div className="col-4">
            
          <div className="display_gif"> 
          <img src={item.gifUrl} alt="no img " className="img-thumbnail"/>
          </div>
          <div className="exe_name ">Name: {item.name} <br /> Equipment: {item.equipment}</div>

          <div>

        </div>
        </div>
        </>
    }
    
    )}
    
    </div>
    </>)
}