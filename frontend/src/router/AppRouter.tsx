import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ClassPage from '../pages/ClassPage';
import SchedulePage from '../pages/SchedulePage'; 
import PricePage from '../pages/PricePage';


const routes = [
    {path: '/', element: <MainPage/>},
    {path: '/classes', element: <ClassPage/>},
    {path: '/schedule', element: <SchedulePage/>},
    {path: '/price', element: <PricePage/>},

];


const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
