function mySent() {
    let recieveUrl = 'http://127.0.0.1:5000/api/v2/messages/sent';
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
            if (response.error === `<h1 style="color:white; background-color:red; margin: 2%; font-size: 100%;" >"you have no sent messages"</h1>`) {

                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
        
                var d = response.data;
                console.log(d)
                let result = ``;
                let email = ``;
                d.forEach((msg) => {
                    result +=
                        `<div class = "nomail">
                        <div class = "recemail"> ${msg.reciever_email}</div>
                        
                        <div class = "recemails"><a href = "../html/delete_message.html?id=${msg.id}" id = "detail"> Delete</a></div>

                        <div class = "recemails"><a href = "../html/read_message.html?id=${msg.id}" id = "detail"> ${msg.subject}</a></div>
                        <div class = "date"> ${msg.created_on}</div>
                        </div>
                       
                        `
           


                    document.getElementById('info').innerHTML = result;
                    document.getElementById('emails').innerHTML = email;
                    
                });
            }
        })
}