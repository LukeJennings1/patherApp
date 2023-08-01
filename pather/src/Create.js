import './index.css';
import Header from './header/header.js';
import background from './assets/travel.jpg'



function Create() {

return (
    <div id = 'create-page-container'>
        {/* <img id = 'create-page-background-image' src = {background}></img> */}
        <Header />
        

        <div id = 'prompt-form-container'>

            <div id = 'prompt-form-wrapper'>
        <form action = '' method = 'POST' id = 'promptFormSubmit'>

            <select name="prompt-food-rating-input" id = 'prompt-form-food-rating-box' size = '5'>
                <option className='prompt-form-rating-button' value = {1} >Not interested</option>
                <option className='prompt-form-rating-button' value = {2} >Slightly interested</option>
                <option className='prompt-form-rating-button' value = {3} >Moderately interested</option>
                <option className='prompt-form-rating-button' value = {4} >Very interested</option>
                <option className='prompt-form-rating-button' value = {5} >Extreamly interested</option>
            </select>



            <input type='text' className = 'form-input' name = 'number-input' placeholder = 'title' id = 'text-input'></input>
            <input type='number' className = 'form-input' name = 'number-input' placeholder = 'number' id = 'number input'></input>
            <textarea name = 'prompt-input' className = 'form-input'  placeholder='type a prompt'></textarea>
            <button type = 'submit'>Submit</button>
        </form>
        </div>
        </div>
    </div>
)
}

window.addEventListener('load', () => {
    const textInput = document.getElementById('prompt-form-food-rating-box');
    textInput.addEventListener('input', () => {console.log(textInput.value)});
    console.log(textInput);
    console.log('loaded')
})


export default Create;