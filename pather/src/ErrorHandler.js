
import Header from './header/header.js';
import './index.css';


function ErrorHandler() {
    return (
    <div id = 'error-handler-page-container'>
        <Header />
        <div id = 'error-message'>404! YIKES, THIS IS AWKWARD...</div>
    </div>
    )
};


export default ErrorHandler;