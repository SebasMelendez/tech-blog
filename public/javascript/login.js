async function loginFormHandler(event) {

  event.preventDefault();


  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email,password)

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)

    if (response.ok) {
      console.log("hello")
      document.location.replace("/dashboard")
    } else {
      console.log(response)
      alert(response.statusText);
    }
  }
}
  
document.querySelector('.login-form')
document.addEventListener('submit', loginFormHandler);