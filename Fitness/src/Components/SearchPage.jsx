import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export const SearchPage=()=>{
    let [exercise,setExercise]=useState([])
    const params = useParams()
 

    useEffect(() => {
        console.log(params);
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/name/${params.id}`,
            headers: {
              'X-RapidAPI-Key': 'aade9c8618msha5fc9e7be27b90fp10b0fejsn10e4130078d9',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
          
            setExercise(response.data.splice(0,10))
          }).catch(function (error) {
              console.error(error);
          });
    },[params])

    // return <main className="row">
    //         <div className="col-12">
    //         <div className="row">
    //             <div className="col-12">
    //                 <h3>Searching for '{qs.get('term')}'</h3>
    //             </div>
    //         </div>
    //         <div className="row row-cols-5">
    //             {
    //                 exercise.map(exercise=><IndivisualCard exercise={exercise}/>)
    //              }
    //         </div>
    //         </div>
    // </main>}
    return (<>
        <div className="row">
        
        {exercise.map((item)=>{
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
