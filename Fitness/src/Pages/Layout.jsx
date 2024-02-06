import "../Style/style.css"
import * as bootstrap from 'bootstrap'
import { useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../services/firebase"
import { remove } from "../store/userSlice"
import { auth } from "../services/firebase"
import { set } from "../store/userSlice"

import Dropdown from 'react-bootstrap/Dropdown';
import { SearchForm } from "../Components/SearchForm"


export const Layout = () =>
{
    let user = useSelector(state => state.user.value)

    const navigate = useNavigate()

const dispatch  = useDispatch()

    const logout = () => {
        logoutUser()
        .then(()=> {
            dispatch(remove())
            navigate('/login')
        })
        .catch(error => {})
    }

useEffect(() => {
    auth.onAuthStateChanged((user) =>{
        if(user) {
            dispatch(set(user.reloadUserInfo))
            console.log(user);
        }
    })
},[])

return <div className="container bg-white pt-3">
<header className="row">
<div className="row">
    <div className="col-auto my-3">
        <Link to="/" className="text_element text-decoration-none">
            <h1><i className="zeus fa-solid fa-dumbbell">Zeus Gym</i> </h1>
        </Link>
    </div>
    <br/>

    <div className="col-auto my-3">
        <Link to="/" className=" text_element text-decoration-none hover-item">
            <div className="home"><h3> Home</h3></div>
        </Link>
    </div>
   
    <div className="col-auto my-3"> 
    <Dropdown>
      <Dropdown.Toggle className="bg-footer" id="dropdown-basic">
        <h4 className="text_element my-0">Exercise</h4>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >  <Link to = "/bodypart" className="text_element text-decoration-none dropdown-item">Body Part</Link>
</Dropdown.Item>
        <Dropdown.Item >  <Link to = "/muscle" className="text_element text-decoration-none dropdown-item">Muscle</Link>
</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    {/* <div className="dropdown">
  <button className="btn link-danger text-decoration-nones dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Exercise
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link to = "/bodypart" className="link-success text-decoration-none dropdown-item">Body Part</Link>
  <Link to = "/muscle" className="link-success text-decoration-none dropdown-item">Muscle</Link>
   
  </div>
</div> */}

    <div className="col">
        <ul class="nav justify-content-end">
            {
                Object.keys(user).length ? <>   

                 <li className="nav-item hover-item">
                 <span className="log  nav-link my-3 " >{user.email}</span>
                  </li>
                 <li className="nav-item hover-item">
                 <button className="log text_element hover-item btn btn-link nav-link " onClick={logout} >Logout</button>
                  </li>
                </> : 
                <> 
                <li className="nav-item hover-item">
                <Link className=" log text_element hover-item text-decoration-none mx-3 my-4" to='login'> Login </Link>
                  </li>
                <li className="nav-item hover-item">
                <Link className="log text_element  hover-item text-decoration-none  mx-3 my-4" to='register'> Register </Link>
                  </li>
                  </>
            }
            <li className="nav-item">
                             
             <SearchForm/>

                  </li>
            </ul>
          
        </div>
       
 </div> 
 
 </header>
    <Outlet/>
    
   
   

    <footer className="row bg-footer py-3" >
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            <i className="fa-solid fa-dumbbell"></i>Zeus Gym
                        </h2>
                    </div>
                    <div className="col-12">
                        <strong>Email: </strong>
                        <a href="mailto:info@movieinfo.com" className="link-light text-decoration-none">info@zeusgym.com</a>
                    </div>
                </div>
            </div>
        
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Find us on</h3>
                    </div>
                    <div className="col-12">
                        <a href="https://facebook.com/ZeusGym" target="_blank" className="link-light">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/ZeusGym" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://instagram.com/ZeusGym" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://youtube.com/ZeusGym" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-youtube fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="row">
                    <div className="co-12">
                        <h3>Subscribe to out newsletter</h3>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter email here"/>
                            <button className="btn btn-outline-light">
                                <i className="fa-solid fa-send"></i>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 my-3 text-center">
                &copy;Zeus Gym,2023.All rights reserved.
            </div>
        </footer>
    </div>
}