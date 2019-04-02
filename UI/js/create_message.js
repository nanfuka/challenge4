document.getElementById('send').addEventListener('click', Compose);

const postmessage = 'http://127.0.0.1:5000/api/v2/message';

function Compose(e){
    e.preventDefault();
    token = localStorage.getItem('token');
    if (token === null) {
        alert('You must log in');

    };
    
    let reciever_email = document.getElementById('reciever_email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let status = document.getElementById('status').value;
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
        if (response.message === 'you have successfully created a message'){
            document.getElementById("positiveresponse").innerHTML = "message sent"
        } else {
            document.getElementById("negativeresponse").innerHTML = response.error
        }
    })
    .catch(err => console.log(err));
}

