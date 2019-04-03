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
            // console.log(response)
            document.getElementById('no_mail').innerHTML = response.error;
        }
        else if (response.status==200){
            var d = response.data;
                    console.log(d)
                    let result = ``;
                    let email = ``;
                    d.forEach((user) => {
                       
                        result +=
                        `<div class = "recieved">
                        <div class = "checkbox"><input type = "checkbox"></div>
                        <div class = "recemail"> ${user.reciever_email}</div>
                        <div class = "recemail"><a href = "" id = "detail"> ${user.subject}</a></div>
                        <div class = "date"> ${user.created_on}</div>
                        </div>
                        `
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