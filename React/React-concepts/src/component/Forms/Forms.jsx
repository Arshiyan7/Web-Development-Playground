export default function Form() {

    // function handleClick(e){
    //     e.preventDefault()
    //     const formEl = e.currentTarget
    //     const formData = new FormData(formEl)
    //     // const firstName = formData.get('firstName')
    //     // console.log(firstName)
    //     /* Well in real world app, we'll get the application instead of console log it we would want to send it to
    //     Maybe backend */
    //     formEl.reset()
    // }

    function SignUp(formData){
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        console.log(firstName) 
        console.log(lastName) 
        /* As compared to function above this version is way more efficient and short */
    }
  return (
    // <form id="my-form" onClick={handleClick} method='POST'>
    <form id="my-form" action={SignUp}> {/* Well now we can provide the function and it'll make things easy... */}
      <label htmlFor="first-name">First Name:</label>
      <input type="text" id="first-name" className="input" name="firstName" />
      <br />
      <label htmlFor="last-name">Last Name:</label>
      <input type="text" id="last-name" className="input" name="lastName" />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}

// 