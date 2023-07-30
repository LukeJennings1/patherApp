import './content.css'


function Content() {
    return (
    <div id = 'content-container'>

        <div id = 'content-title-card-wrapper'>
            <h1 className='content-heading'>Welcome to Pather</h1>
            <h1 className='content-heading'>Your AI Powered Trip Generator</h1>

            <span id = 'content-sub-heading-wrapper'>
                <h3 className='content-sub-heading'>Stuck for ideas? Have Pather generate a unique and unforgetable day trip!</h3>
                <h3 className='content-sub-heading'>Dont forget to share any unique day trips for others to experience.</h3>
            </span>
        </div>

    </div>
    )
}


export default Content;