import './/header.css';
import PatherLogo from '../assets/mainLOGO.png';
import '../index.css';


function Header(){
    return (
        <div id = 'header-container'>
            <span id = 'header-left-container'>
                <a href='/'>
                <img id = 'header-logo' src = {PatherLogo} alt = 'Pather Logo'></img>
                </a>
                    <span id = 'header-menu-options'>
                        <a className='page-link-button'>
                            <div>Create</div>
                        </a>
                        <a className='page-link-button'>
                            <div>Top Trips</div>
                        </a>
                        <a className='page-link-button'>
                            <div>How to use</div>
                        </a>
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