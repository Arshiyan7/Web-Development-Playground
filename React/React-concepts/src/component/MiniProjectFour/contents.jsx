export default function Contents(){
    function HandleClick(){
        console.log('Button Clicked!')
    }
    return(
        <div className="userInput">
            <input type="text" placeholder="e.g. one lonely tomato..." />
            <button onClick={HandleClick}>+ add ingredient</button>
        </div>
    )
}