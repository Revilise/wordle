import React from 'react';

import './App.module.scss';
// import Game from "./features/Game/Game";
import Preloader from "./features/Preloader/Preloader";
const Game = React.lazy(() => import ('./features/Game/Game.js'));

export default function App() {
    // return <Game />;
    return (
        <React.Suspense fallback={<Preloader />}>
            <Game />
        </React.Suspense>
    )
}
