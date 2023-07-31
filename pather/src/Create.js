import './index.css';
import Header from './header/header.js';



function Create() {

return (
    <div>
        <Header />
        <form action = '' method = 'POST' id = 'promptFormSubmit'>
            <input type='number' name = 'number-input' placeholder = 'number' id = 'number input'></input>
            <input type='text' name = 'number-input' placeholder = 'title' id = 'text-input'></input>
            <input type='number' name = 'number-input' placeholder = 'number' id = 'number input'></input>
            <textarea name = 'prompt-input' placeholder='type a prompt'></textarea>
            <button type = 'submit'>Submit</button>


        </form>
    </div>
)
}

window.addEventListener('load', () => {
    const textInput = document.getElementById('text-input');
    textInput.addEventListener('input', () => {console.log(textInput.value)});
    console.log(textInput);
    console.log('loaded')
})


export default Create;