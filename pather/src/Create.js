import './index.css';
import Header from './header/header.js';
import background from './assets/travel.jpg'
import img1 from  './assets/icons8-food-90.png'
import img2 from  './assets/icons8-adventure-100.png'
import img3 from  './assets/icons8-greek-pillar-base-90.png'
import img4 from  './assets/icons8-money-bag-100.png'
import img5 from  './assets/icons8-oak-tree-96.png'
import img6 from  './assets/icons8-shopping-bag-100.png'
import img7 from  './assets/icons8-tower-100.png'



function Create() {
    // console.log(process.env.REACT_APP_MAPSAPI);


return (
    <div id = 'create-page-container'>
        {/* <img id = 'create-page-background-image' src = {background}></img> */}
        <Header />
        

        <div id = 'prompt-form-container'>
        <h2>Choose the importance of each category in your day out </h2>
        <h5 id = 'prompt-form-subHeading'>Selecting the "extremely interested" option indicates a high level of enthusiasm and passion for the specific activity or topic, signaling a strong desire to fully immerse oneself and make the most of the experience. </h5>

            <div id = 'prompt-form-wrapper'>
        <form action = '' method = 'POST' id = 'promptFormSubmit'>

<input type='text' className = 'form-input' name = 'number-input' placeholder = 'Destination' id = 'text-input'></input>


<div className = 'prompt-multi-input-titleCard'>
    <h3>Food</h3>
<img className = 'prompt-icon' src = {img1}></img>
</div>
            <select name="prompt-food-rating-input" id = 'prompt-form-food-rating-box' className = 'prompt-multi-input' size = '5'>
                <option className='prompt-form-rating-button food-rating-buttons' value = {1} >Not interested</option>
                <option className='prompt-form-rating-button food-rating-buttons' value = {2} >Slightly interested</option>
                <option className='prompt-form-rating-button food-rating-buttons' value = {3} >Moderately interested</option>
                <option className='prompt-form-rating-button food-rating-buttons' value = {4} >Very interested</option>
                <option className='prompt-form-rating-button food-rating-buttons' value = {5} >Extremely interested</option>
            </select>
<div className = 'prompt-multi-input-titleCard'>
    <h3>Parks and Nature</h3>
<img className = 'prompt-icon' src = {img5}></img>
</div>
            <select name="prompt-Nature-rating-input" id = 'prompt-form-Nature-rating-box' className = 'prompt-multi-input' size = '5'>
                <option className='prompt-form-rating-button' value = {1} >Not interested</option>
                <option className='prompt-form-rating-button' value = {2} >Slightly interested</option>
                <option className='prompt-form-rating-button' value = {3} >Moderately interested</option>
                <option className='prompt-form-rating-button' value = {4} >Very interested</option>
                <option className='prompt-form-rating-button' value = {5} >Extremely interested</option>
            </select>
<div className = 'prompt-multi-input-titleCard'>
    <h3>History and Culture</h3>
<img className = 'prompt-icon' src = {img3}></img>
</div>
            <select name="prompt-HaC-rating-input" id = 'prompt-form-HaC-rating-box' className = 'prompt-multi-input' size = '5'>
                <option className='prompt-form-rating-button' value = {1} >Not interested</option>
                <option className='prompt-form-rating-button' value = {2} >Slightly interested</option>
                <option className='prompt-form-rating-button' value = {3} >Moderately interested</option>
                <option className='prompt-form-rating-button' value = {4} >Very interested</option>
                <option className='prompt-form-rating-button' value = {5} >Extremely interested</option>
            </select>
<div className = 'prompt-multi-input-titleCard'>
    <h3>Shopping</h3>
<img className = 'prompt-icon' src = {img6}></img>
</div>
            <select name="prompt-Shopping-rating-input" id = 'prompt-form-Shopping-rating-box' className = 'prompt-multi-input' size = '5'>
                <option className='prompt-form-rating-button' value = {1} >Not interested</option>
                <option className='prompt-form-rating-button' value = {2} >Slightly interested</option>
                <option className='prompt-form-rating-button' value = {3} >Moderately interested</option>
                <option className='prompt-form-rating-button' value = {4} >Very interested</option>
                <option className='prompt-form-rating-button' value = {5} >Extremely interested</option>
            </select>

<div className = 'prompt-multi-input-titleCard'>
    <h3>Budget</h3>
<img className = 'prompt-icon' src = {img4}></img>
</div>
            <select name="prompt-Budget-rating-input" id = 'prompt-form-Budget-rating-box' className = 'prompt-multi-input' size = '5'>
                <option className='prompt-form-rating-button' value = {1} >Free</option>
                <option className='prompt-form-rating-button' value = {2} >Budget-friendly</option>
                <option className='prompt-form-rating-button' value = {3} >Moderate</option>
                <option className='prompt-form-rating-button' value = {4} >High-end</option>
                <option className='prompt-form-rating-button' value = {5} >Lavish</option>
            </select>

            <textarea name = 'prompt-input' className = 'form-input'  placeholder='Type a prompt - For example, "Plan my full day in Tokyo and include fluffy pancakes!"'></textarea>
            <button type = 'submit'>Submit</button>
        </form>
        </div>
        </div>
    </div>
)
}

window.addEventListener('load', () => {

    let promptOptions = {};

    const textInput = document.getElementById('prompt-form-food-rating-box');
    const promptMultiInput = document.getElementsByClassName('prompt-multi-input');

    for(let i = 0; i < promptMultiInput.length; i++) {
        promptMultiInput[i].addEventListener('input', () => {
            promptOptions[promptMultiInput[i].name] = parseInt(promptMultiInput[i].value);
            console.log(promptOptions);
        });
    }


})


export default Create;