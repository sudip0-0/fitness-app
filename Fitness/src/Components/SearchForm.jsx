import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchForm=()=>{
    let [term,setTerm]=useState('')

    const navigate=useNavigate()

    const handleChange=e=>{
        setTerm(e.target.value)
    }

    const handleSubmit=()=>{
navigate(`search/name/${term}`)
    }
    return <div className="input-group">
    <input type="search" className=" form form-control" placeholder="Search" value={term} onChange={handleChange}/>
    <button className="btn btn_src ms-2" onClick={handleSubmit}><i className="fa-solid fa-search"></i></button>
</div>
}