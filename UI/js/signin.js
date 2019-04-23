document.getElementById('login').addEventListener('click', Login);

                function Login(e) {
                    e.preventDefault();

                    let email = document.getElementById('email').value;
                    let password = document.getElementById('password').value;

                    let data = {
                        "email": email,
                        "password": password
                    }

                    fetch('https://epiks.herokuapp.com/api/v2/auth/login', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',

                                'content_type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })

                        .then((res) => res.json())
                        .then((data) => {


                            if (data.message === 'you have successfully logged in as a user') {
                                token = data.data[0].token;
                                localStorage.setItem('token', token)

                                // console.log(token)
                                window.location.replace('/UI/html/user_dash.html')


                            } else {

                                document.getElementById("negativeresponse").innerHTML = `<h1 style="color:red; background-color:pink; margin: 2%; font-size: 100%;" >${data.error}</h1>`
                            }
                        })
                }

