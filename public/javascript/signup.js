function before (value, delimiter) {  
    value = value || ''
  
    return delimiter === ''
      ? value
      : value.split(delimiter).shift()
  }

async function signupFormHandler(event) {
    event.preventDefault();

    // getting data from the form
    const email = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    let username

    if (email && password) {

        username = before(email,'@')
        console.log(username,password,email )
        
        const response = await fetch('/api/users/', {
          method: 'post',
          body: JSON.stringify({
            email,
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    // check the response status
    if (response.ok) {
        console.log('success');

        // loginHandler();
        document.location.replace('/dashboard');

      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 