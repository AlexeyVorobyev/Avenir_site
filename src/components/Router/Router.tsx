import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {BasePage} from "../pages/BasePage/BasePage";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {NavLayout} from "../pages/NavLayout/NavLayout";
import {AchievementsPage} from "../pages/AchievementsPage/AchievementsPage";
import {TeamPage} from "../pages/TeamPage/TeamPage";

const Router:React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to="/app/landing"/>}/>
            <Route path={'/app'} element={<BasePage/>}>
                <Route path={'landing'} element={<LandingPage/>}/>
                <Route path={'nav'} element={<NavLayout/>}>
                    <Route path={'contacts'} element={<TeamPage/>}/>
                    <Route path={'achievements'} element={<AchievementsPage/>}/>
                    <Route path={'team'}/>
                    <Route path={'service'}/>
                </Route>
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export {Router}