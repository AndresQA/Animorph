import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

    if (props.location.pathname === "/") {
        var background = document.getElementById('background');
        background.style.backgroundImage = 'url(/images/homebackground.jpg)';
    }


    return <div>
        <Link to='/instrucciones'>
            <button>Jugar</button>

        </Link>


    </div>
}


export default Home;