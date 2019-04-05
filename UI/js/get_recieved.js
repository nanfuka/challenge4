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
            console.log(response)
            if (response.error === `<h1 style="color:white; background-color:red; margin: 2%; font-size: 100%;" >you dont have any recieved messages</h1>`) {

                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
                var d = response.data;
                console.log(d)
                let result = `<table>
                <tr>
                    <th>MESSAGE_ID</th>
                    <th>SENDERS' EMAIL</th> 
                    
                    <th>SUBJECT</th>
                    <th>DATE</th>
                    <th>DELETE</th>
                </tr>
                    `;

                d.forEach((msg) => {
                    result +=
                        `  
                    <tr><td>${msg.id}</td>
                    <td>${msg.sender_email}</td>
                    <td><a href = "../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></td>
                    <td>${msg.created_on}</td>
                    <td><a href = "../html/delete_group.html?id= ${msg.id}"> Delete</a></td></tr>
                    `
                });
                result += "</table>"
                document.getElementById('info').innerHTML = result;


            }
        })
}