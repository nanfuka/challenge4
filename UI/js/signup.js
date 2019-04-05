let confirm_password = document.getElementById("confirm_password").value
let password = document.getElementById('password').value;
if (confirm_password !== password) {
    document.getElementById("verify").innerHTML = "Your passwords do not match"
    window.location.ref = "signup.html"
}
document.getElementById('signupForm').addEventListener('click', RegisterUser);

function RegisterUser(e) {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById("confirm_password").value

function verify(){
    if (confirm_password != password) {
        document.getElementById("verify").innerHTML = "Your passwords do not match"
    }
}


    let data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password
    }


    fetch('http://127.0.0.1:5000/api/v2/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',

                'content_type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then((res) => res.json())
        .then((data) => {


            if (data.message === 'thanks for registering with Epic mail') {

                window.location.replace('/UI/html/user_dash.html')

            } else {

                document.getElementById("negativeresponse").innerHTML =`<p style = "color: red; text-align: center;"> ${data.error}</p>`;
               
            }
        })
}