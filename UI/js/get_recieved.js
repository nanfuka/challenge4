function myFunction() {
    let recieveUrl = 'https://epiks.herokuapp.com/api/v2/messages';
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
                var number = response.data.number;
                console.log(number)

                let result = `<table>`;
                let email = ``;
                d.forEach((msg) => {
                     document.getElementById("user").innerHTML = `${msg.reciever_email}`                   
                    result +=                        
                        `<tr>
                       
                        <td>${msg.sender_email}</td>
                       
                        <td><a href = "../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></td>
                        <td>${msg.created_on}</td>
                        <td onclick='deletes(${msg.id})'><img src="../images/delete.png" alt="delete" height="22" width="22"></td>
                        </tr>`});
                        
                        result + `</table>`

                    document.getElementById('info').innerHTML = result;
            if (response.status != 200){
                document.getElementById('no_mail').innerHTML = `<h1 style="color:red; background-color: rgb(228, 173, 173); font-size: 90%; padding: 2%; text-align: center" >${response.error}</h1>`;
            }

            }
        })
}

function deletes(id) {
    if (confirm("Are you sure you want to delete this Message!")){
    let readmsgUrl = `https://epiks.herokuapp.com/api/v2/messages/delete/${id}`;
    token = localStorage.getItem('token');
    fetch(readmsgUrl, {
            method: 'DELETE',

            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if (response.error === "you have no recieved messages") {
                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
                var d = response.data;
                console.log(d)
                document.getElementById('no_mail').innerHTML = d;
                window.location.replace('./user_dash.html')
            }
        })
}
}