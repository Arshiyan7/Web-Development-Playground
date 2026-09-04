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

  /* As compared to function above this version is way more efficient and short */
  function SignUp(formData) {
    const data = Object.fromEntries(formData);

    // Only dietaryRestrictions needs special handling — it's the one field
    // where multiple checkboxes share a name, so getAll() is required
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");

    const allData = {
      ...data,
      dietaryRestrictions,
    };

    console.log(allData);
  }
  return (
    // <form id="my-form" onClick={handleClick} method='POST'>
    <form id="my-form" action={SignUp}>
      {" "}
      {/* Well now we can provide the function and it'll make things easy... */}
      <label htmlFor="first-name">First Name:</label>
      <input type="text" id="first-name" className="input" name="firstName" />
      <br />
      <label htmlFor="last-name">Last Name:</label>
      <input type="text" id="last-name" className="input" name="lastName" />
      <br />
      <fieldset>
        <legend>Employment Status</legend>
        <label>
          <input type="radio" name="employmentStatus" value="Unemployed" />
          <span className="labelField">Unemployed</span>
        </label>
        <label>
          <input type="radio" name="employmentStatus" value="Part-time" />
          <span className="labelField">Part-time</span>
        </label>
        <label>
          <input type="radio" name="employmentStatus" value="Full-time" />
          <span className="labelField">Full-time</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Dietary Restrictions</legend>
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="Vegetarian"
          />
          <span className="labelField">Vegetarian</span>
        </label>
        <label>
          <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
          <span className="labelField">Vegan</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="Gluten-Free"
          />
          <span className="labelField">Gluten-Free</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="Nut Allergy"
          />
          <span className="labelField">Nut Allergy</span>
        </label>
      </fieldset>
      <label htmlFor="fav-color">Favorite Color:</label>
      <select id="fav-color" className="input" name="favColor" defaultValue="">
        <option value="" disabled>
          Select a color
        </option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <input type="submit" value="submit" />
    </form>
  );
}

//
