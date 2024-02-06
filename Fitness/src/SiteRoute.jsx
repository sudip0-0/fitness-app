import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Layout } from "./Pages/Layout"
import Home from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"
import { BodyPart } from "./Pages/BodyPart"
import { Muscle } from "./Pages/Muscle"
import { List } from "./Pages/List"
import { SearchPage } from "./Components/SearchPage"
export const SiteRoute = () =>
{
    return <BrowserRouter>
    <Routes>
      
        <Route path ="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="bodypart" element={<BodyPart />} />
            
            <Route path="muscle" element={<Muscle />} />
            
                <Route path=":etype/info/:list" element={<List />} />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="search/name/:id" element={<SearchPage/>}/>
        
        </Route>
    
    </Routes>
    </BrowserRouter>
}