document.getElementById('signupForm').addEventListener('click', RegisterUser);

function RegisterUser(e) {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password
    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://epiks.herokuapp.com/api/v2/auth/signup'
    fetch(proxyurl + url, {
            method: 'POST',
            mode:"cors",
            headers: {
                'Accept': 'application/json, text/plain, */*',

                'content_type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then((res) => res.json())
        .then((data) => {


            if (data.message === 'thanks for registering with Epic mail') {
                token = data.data[0].token;
                localStorage.setItem('token', token)

                window.location.replace('./user_dash.html')

            } else {

                document.getElementById("negativeresponse").innerHTML = `<h1 style="color:red; background-color:pink; margin: 2%; font-size: 100%;" >${data.error}</h1>`
                // document.getElementById("negativeresponse").style.display = block
            }
        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}