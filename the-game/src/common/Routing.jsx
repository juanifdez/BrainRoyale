import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'./landing'} element={<LandingPage/>}/>
                <Route path={'./team'} element={<TeamPage/>}/> 
            </Routes>
        </BrowserRouter>
        </>
    )
}