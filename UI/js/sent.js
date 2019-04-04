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
        if (response.error ==="you have no recieved messages"){
            document.getElementById('no_mails').innerHTML = response.error;
        }
        else if (response.status==200){
            var d = response.data;
                    console.log(d)
                    let result = ``;
                    let email = ``;
                    d.forEach((user) => {
                       
                        result +=
                        `<div class = "nomail">
                        <div class = "checkbox"><input type = "checkbox"></div>
                        <div class = "recemail"> ${user.reciever_email}</div>
                        <div class = "recemails"><a href = "" id = "detail"> ${user.subject}</a></div>
                        <div class = "date"> ${user.created_on}</div>
                        </div>
                        `
                  
                        document.getElementById('info').innerHTML = result;
                        document.getElementById('emails').innerHTML = email;
                    });
        }
        }
    )}