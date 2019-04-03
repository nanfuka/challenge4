// document.getElementById('inbox').addEventListener('click', getRecievedMessages);
// function getRecievedMessages() {
//     let recieveUrl = 'http://127.0.0.1:5000/api/v2/messages';
//     token = localStorage.getItem('token');
//     if (token === null) {
//         alert('please login');
//         window.location.replace('UI/index.html');
//     };
//     fetch(recieveUrl, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         } 
//     })
//     .then(res => res.json())
//     .then(response => {
//         if (response.error ==="you have no recieved messages"){
//             // console.log(response)
//             document.getElementById('no_mail').innerHTML = response.error;
//         }
//         else if (response.status==200){
//             var d = response.data;
//                     console.log(d)
//                     let result = `<h2 class="w3-center w3-allerta w3-xxlarge"> User Info From sampleUser.json </h2>`;
//                     d.forEach((user) => {
                       
//                         result +=
//                             `<div class="w3-panel w3-leftbar w3-border w3-round-small w3-border-blue w3-margin">
//                                 <h5> User ID: ${user.id} </h5>
//                                 <ul class="w3-ul">
//                                     <li> User Namejkkjjjjjjjjjj : ${user.reciever_email}</li>
//                                     <li> User Email: ${user.sender_email} </li>
//                                 </ul>
//                              </div>`;
//                         document.getElementById('no_mail').innerHTML = result;
//                     });
//         }
//         }
//     )}

// document.getElementById('inbox').addEventListener('onload', getRecievedMessages);
function myFunction() {
    let recieveUrl = 'http://127.0.0.1:5000/api/v2/messages';
    token = localStorage.getItem('token');
    if (token === null) {
        alert('please login');
        window.location.replace('UI/index.html');
    };
    fetch(recieveUrl, {
        headers: {
            'Authorization': `Bearer ${token}`
        } 
    })
    .then(res => res.json())
    .then(response => {
        if (response.error ==="you have no recieved messages"){
            // console.log(response)
            document.getElementById('no_mail').innerHTML = response.error;
        }
        else if (response.status==200){
            var d = response.data;
                    console.log(d)
                    let result = `<table>
                    <tr>
                      <th>Sender</th>
                      <th>Subject</th>
                      <th>Date</th>
                    </tr>`;
                    let email = ``;
                    d.forEach((msg) => {
                       
                        result +=
                        `  <tr>
                        <th>${msg.sender_email}</th>
                        <th><a href ="../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></th> 
                        <th>${msg.created_on}</th>
                      </tr>`
                        // `<div class = "recieved">
                        // <div class = "checkbox"><input type = "checkbox"></div>
                        // <div class = "recemail"> ${msg.sender_email}</div>
                        // <div class = "recemail"><a href ="../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></div>
                        // <div class = "date"> ${msg.created_on}</div>
                        // </div>
                        // `
                //         `<input type = "checkbox">   
                //         `
                //   ;
                //   email +=`
                //   ${user.sender_email} 
                  
                        document.getElementById('info').innerHTML = result;
                        document.getElementById('emails').innerHTML = email;
                    });
        }
        }
    )}
  
// get sent

// document.getElementById("detail").addEventListener("click", getOne)

// function getOne(){
//     let recieveUrl = 'http://127.0.0.1:5000/api/v2/messages/<int:message_id>';
//     token = localStorage.getItem('token');
//     if (token === null) {
//         alert('please login');
//         window.location.replace('UI/index.html');
//     };
//     fetch(recieveUrl, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         } 
//     })
//     .then(res => res.json())
//     .then(response => {
//         if (response.error ==="you have no recieved messages"){
//             // console.log(response)
//             document.getElementById('no_mail').innerHTML = response.error;
//         }
//         else if (response.status==200){
//             var d = response.data;
//                     console.log(d)
//                     let result = ``;
//                     let email = ``;
//                     d.forEach((user) => {
                       
//                         result +=
//                         `<div class = "recieved">
//                         <div class = "checkbox"><input type = "checkbox"></div>
//                         <div class = "recemail"> ${user.sender_email}</div>
//                         <div class = "recemail"><a href = "" id = "detail"> ${user.subject}</a></div>
//                         <div class = "date"> ${user.created_on}</div>
//                         </div>
//                         `
//                 //         `<input type = "checkbox">   
//                 //         `
//                 //   ;
//                 //   email +=`
//                 //   ${user.sender_email} 
                  
//                         document.getElementById('info').innerHTML = result;
//                         document.getElementById('emails').innerHTML = email;
//                     });
//         }
//         }
//     )}


  
// //         view specific email


// }

//          {let output = `

//             <p>you have no recieved messages</p>
//         `
//         document.getElementById('no_mail').innerHTML = output;
//         } 
//         {let output = `
//         <tr class="titles">
//             <th>created-on</th>
//             <th>subject</th>
//             <th>sender_email</th>
//         </tr>`
//         for(let k in response){
//             console.log(response[k].item);
//             output += `
//             <tr class="orders">
//                 <td>${response[k].created-on}</td>
//                 <td>${response[k].subject}</td>
//                 <td>${response[k].sender_email}</td>`

//             console.log(output);
//         }
//         document.getElementById('recieved').innerHTML = output;};

//     })
// }

// inbox for the user
// let get_inbox = document.getElementById('inbox');;
// get_inbox.addEventListener('click', getInbox);

// let token = localStorage.getItem('token');
// // get current user from browser
// let current_user = localStorage.getItem('email');

// function getInbox() {
//     // document.getElementById('inboxing').innerHTML = "output";
//     let output = "";
//     fetch("http://127.0.0.1:5000/api/v2/messages", {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             // document.getElementById("nomail").innerHTML = data.error
//             console.log(data)
//             // document.getElementById("recieved").innerHTML = data;
//         })
// }
//         console.log(data)
//         let received = data.data
//         received.forEach(inbox => {
//             console.log(received)
//             output +=`
//             <div>
//                 <h3>${inbox.subject}</h3>
//                 <p>${inbox.message}</p>
//             </div>
//             `;
//         });
//         document.getElementById('inboxing').innerHTML = output;
//     }).catch(error =>{
//         console.log(error)
//     })
// }
// function myFunction() {

//     // document.getElementById("nomail").innerHTML = "gvhkgf"
//     fetch("http://127.0.0.1:5000/api/v2/messages", {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             let output = `<h2>users</h2>`;
//             data.forEach(function(user){
//                 output += `
//                 <ul>
//                 <li> id: ${user.error}</li>
//                 </ul>
//                 `;
//             });
//             // document.getElementById("nomail").innerHTML = data.error
//             // if(data.error === undefined){
//             //     data
                
//                 // console.log(data)
//                 // document.getElementById("recieved").innerHTML = data;
// //             }else{
// //                 document.getElementById("nomail").innerHTML = data.error
// //             }
            

// //         })
    
// // }

// document.getElementById('recieved').addEventListener('load', getAdminOrderHistory());
// function getAdminOrderHistory() {
//     let histUrl = "http://127.0.0.1:5000/api/v2/messages";
//     token = localStorage.getItem('token');
//     if (token === null) {
//         alert('You must log in');
//         window.location.replace('UI/index.html');
//     };
//     fetch(histUrl, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         } 
//     })
//     .then(res => res.json())
//     .then(response => {
//         if (response.error === "you have no recieved messages")
//          {let output = `
//         <tr class="titles">
//             <th>you have no recieved messages</th>
//         </tr>`
//         document.getElementById('nomail').innerHTML = output;
//         } 
//         else{let output = `
//         <tr class="titles">
//             <th>reciever_email</th>
//             <th>sender_email</th>
//         </tr>`
//         for(let k in response){
//             console.log(response[k].item);
//             output += `
//             <tr class="orders">
//                 <td>${response[k].reciever_email}</td>
//                 <td>${response[k].sender_email}</td>
               
//             </tr>`;
//             console.log(output);}
//         document.getElementById('recieved').innerHTML = output;};
        
//     })
// }