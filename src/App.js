import React, {useEffect} from 'react';

import './App.module.scss';
import Preloader from "./features/Preloader/Preloader";
import {useDispatch} from "react-redux";
import {changeTheme} from "./features/Game/GameReducer";
const Game = React.lazy(() => import('./features/Game/Game.js'));

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const cookie = document.cookie;
        const theme = cookie.substring(cookie.indexOf('=')+1).trim();
        if (theme.length > 0) {
            dispatch(changeTheme(theme));
        }
    }, [])
    return (
        <React.Suspense fallback={<Preloader />}>
            <Game />
        </React.Suspense>
    )
}
