export default function SearchBar({onChangeValue}){
    return(
        <input type="text"
         placeholder="Write something..."
         onChange={(e)=>{onChangeValue(e.target.value)}}
         />
    )
}