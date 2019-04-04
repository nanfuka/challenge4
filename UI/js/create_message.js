// document.getElementById('send').addEventListener('click', Compose);

// const postmessages = 'http://127.0.0.1:5000/api/v2/message';

// function Compose(e){
//     e.preventDefault();
//     token = localStorage.getItem('token');
//     if (token === null) {
//         alert('You must log in');

//     };
    
    
//     let reciever_email = document.getElementById('reciever_email').value;
//     let subject = document.getElementById('subject').value;
//     let message = document.getElementById('message').value;
//     let status = "sent";
//     let data = {
//         reciever_email: reciever_email,
//         subject: subject,
//         message: message,
//         status: status
//     }


//     fetch(postmessages, {
//         method: 'POST',
//         // mode: 'cors',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(response => {
//         console.log(response);
//         if (response.error ==="Expired token. Please Log In again."){
//             // document.getElementById("token").innerHTML =`<h1 style="background-color:red; width: 60%; margin-left: 20%;">authentication timed out, please login</h1>` 

//         }
//         if (response.message === 'you have successfully created a message'){
//             document.getElementById("negative").innerHTML = `<h1 style="background-color:green; width: 60%; margin-left: 20%;">message sent</h1>`;
//         } else {
//             document.getElementById("negative").innerHTML = `<h1 style="background-color:red; width: 60%; margin-left: 20%;">${response.error}</h1>`
//         }
//     })
//     .catch(err => console.log(err));
// }

// function myFunction(){
//     document.getElementById()
// }



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
        if (response.error ==="Expired token. Please Log In again."){
            // document.getElementById("token").innerHTML =`<h1 style="background-color:red; width: 60%; margin-left: 20%;">authentication timed out, please login</h1>` 

        }
        if (response.message === 'you have successfully created a message'){
            document.getElementById("negative").innerHTML = `<h1 style="background-color:green; width: 60%; margin-left: 20%;">message sent</h1>`;
        } else {
            document.getElementById("negative").innerHTML = `<h1 style="background-color:red; width: 60%; margin-left: 20%;">${response.error}</h1>`
        }
    })
    .catch(err => console.log(err));
}

// function myFunction(){
//     document.getElementById()
// }

