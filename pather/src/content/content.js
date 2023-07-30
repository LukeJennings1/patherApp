import './content.css'
import icon0 from '../assets/icon0.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';


function Content() {

    return (
    <div id = 'content-container'>

        <span className='travel-icon-container'>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-0' src={icon0}></img>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-1' src={icon1}></img>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-2' src={icon2}></img>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-3' src={icon3}></img>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-4' src={icon4}></img>
            <img className = 'travel-icon   wiggle-animation' id = 'travel-icon-5' src={icon5}></img>
        </span>

        <div id = 'content-title-card-wrapper'>
            <h1 className='content-heading'>Welcome to Pather</h1>
            <h1 className='content-heading'>Your AI Powered Trip Generator</h1>

            <span id = 'content-sub-heading-wrapper'>
                <h3 className='content-sub-heading'>Stuck for ideas? Have Pather generate a unique and unforgetable day trip!</h3>
                <h3 className='content-sub-heading'>Dont forget to share any unique day trips for others to experience.</h3>
            </span>

            <span id = 'content-title-card-button-wrapper'>
                <button className='button-primary button-height-adjust'>Get Started</button>
                <span id = 'content-title-card-button-break'></span>
                <button className='button-secondary button-height-adjust'>How It Works</button>
            </span>
        </div>

    </div>
    )
}


export default Content;