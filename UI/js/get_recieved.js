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
            if (response.status != 200){
            document.getElementById('no_mail').innerHTML = `<h1 style="color:red; background-color: rgb(228, 173, 173); font-size: 90%; padding: 2%; text-align: center" >${response.error}</h1>`;
            console.log(response)
            }
            if (response.status == 200) {
                var d = response.data;
                console.log(d)

                let result = `<table>`;
                let email = ``;
                d.forEach((msg) => {
                    result +=
                    // document.getElementById("user").innerHTML = `${msg.reciever_id}`
                        
                        `<tr>
                        <td>${msg.reciever_id}</td>
                        <td>${msg.sender_email}</td>
                        <td><a href = "../html/user_dash.html?id=${msg.id}" id = "delete"> Delete</a></td>
                        <td><a href = "../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></td>
                        <td>${msg.created_on}</td></tr>`});
                        result + `</table>`

                    document.getElementById('info').innerHTML = result;
            if (response.status != 200){
                document.getElementById('no_mail').innerHTML = `<h1 style="color:red; background-color: rgb(228, 173, 173); font-size: 90%; padding: 2%; text-align: center" >${response.error}</h1>`;
            }

            }
        })
}
// document.getElementById('delete').addEventListener('click', deletes);

// window.onclick = function() {
//     let current_url = location.href
//     let url = new URL(current_url)
//     let message_id = url.searchParams.get('id')
//     deletes(message_id)
//     CSSConditionRule.log(message_id)
//     r = document.getElementById('receiver-addr')

// }

// function deletes(id) {
//     let readmsgUrl = `http://127.0.0.1:5000/api/v2/messages/delete/${id}`;
//     token = localStorage.getItem('token');
//     fetch(readmsgUrl, {
//             method: 'DELETE',

//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(res => res.json())
//         .then(response => {
//             console.log(response)
//             if (response.error === "you have no recieved messages") {
//                 document.getElementById('no_mail').innerHTML = response.error;
//             } else if (response.status == 200) {
//                 var d = response.data;
//                 console.log(d)
//                 document.getElementById('no_mail').innerHTML = d;
//                 window.location.replace('./user_dash.html')
//             }
//         })
// }