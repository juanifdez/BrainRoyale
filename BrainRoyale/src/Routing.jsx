import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import TeamPage from './pages/TeamPage'
import RulesPage from './pages/RulesPage'
import MainPage from './pages/MainPage'


function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/navbar'} element={<Navbar/>}/>
                <Route path={'/teampage'} element={<TeamPage/>}/>
                <Route path={'/rulespage'} element={<RulesPage/>}/>
                <Route path={'/app'} element={<MainPage/>}/>
                <Route path={'/'} element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing