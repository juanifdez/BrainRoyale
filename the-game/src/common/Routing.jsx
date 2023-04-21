import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import TeamPage from './TeamPage'
import RulesPage from '../game/RulesPage'
import App from './App'


function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/navbar'} element={<Navbar/>}/>
                <Route path={'/teampage'} element={<TeamPage/>}/>
                <Route path={'/rulespage'} element={<RulesPage/>}/>
                <Route path={'/app'} element={<App/>}/>
                <Route path={'/'} element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing