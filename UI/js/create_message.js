document.getElementById('send').addEventListener('click', Compose);

const postmessage = 'https://epiks.herokuapp.com/api/v2/message';

function Compose(e) {
    e.preventDefault();
    token = localStorage.getItem('token');
    if (token === null) {
        alert('You must log in');

    };


    let reciever_email = document.getElementById('reciever_email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let status = "sent";
    let data = {
        reciever_email: reciever_email,
        subject: subject,
        message: message,
        status: status
    }


    fetch(postmessage, {
            method: 'POST',
            // mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if (response.error === "Expired token. Please Log In again.") {

            }
            if (response.message === 'you have successfully created a message') {
                document.getElementById("negative").innerHTML = `<p style="background-color:green; width: 60%; margin-left: 20%;">message sent</p>`;
            } else {

                document.getElementById("negative").innerHTML = `<p style="background-color:rgb(228, 173, 173); color: red; font-size: 90%; width: 40%;padding: 1%; margin-left: 20%; text-align: center;">${response.error}</p>`
            }
        })
        .catch(err => console.log(err));
}

// function myFunction(){
//     document.getElementById()
// }