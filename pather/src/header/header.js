import './/header.css';
import PatherLogo from '../assets/mainLOGO.png';
import '../index.css';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <div id = 'header-container'>
            <span id = 'header-left-container'>
                <Link to = '/'>
                <img id = 'header-logo' src = {PatherLogo} alt = 'Pather Logo'></img>
                </Link>
                
                    <span id = 'header-menu-options'>
                            <Link to = '/create'>
                                <div className='page-link-button'>Create</div>
                            </Link>
                            <Link to = 'create'>
                                <div className='page-link-button'>Top Trips</div>
                            </Link>
                            <Link to = 'create'>
                                <div className='page-link-button'>How It Works</div>
                            </Link>
                    </span>
            </span>

            <span id = 'signup-buttons-container'>
                <button className='button-tertiary' id = 'login-button'>Login</button>
                <button className='button-primary' id = 'signup-button'>Go Premium</button> 
            </span>

            
        </div>


    )
}

export default Header;