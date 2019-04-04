function myGroups() {
    let recieveUrl = 'http://127.0.0.1:5000/api/v2/groups';
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
        if (response.error ==="You have not yet created any groups"){
            // console.log(response)
            document.getElementById('no_mail').innerHTML = response.error;
        }
        else if (response.status==200){
            var d = response.data;
                    console.log(d)
                    let group = ``;
                    
                    d.forEach((user) => {
                       
                        group +=
                        `<div class = "recieved">
                        <div class = "recemail"> ${user.name}</div>
                        <div class = "recemail"> ${user.role}</div>
                        <div class = "recemails"><a href = "../html/delete_group.html?id=${user.id}" id = "detail"> Delete</a></div>
                        </div>
                        `
                //         `<input type = "checkbox">   
                //         `
                //   ;
                //   email +=`
                //   ${user.sender_email} 
                  
                        document.getElementById('info').innerHTML = group;
                        // document.getElementById('emails').innerHTML = email;
                    });
        }
        }
    )}
  