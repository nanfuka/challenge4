 window.onload = function () {
     let current_url = location.href
     let url = new URL(current_url)
     let message_id = url.searchParams.get('id')
     readMessage(message_id)
     r = document.getElementById('receiver-addr')

 }

 function readMessage(id) {
     let readmsgUrl = `http://127.0.0.1:5000/api/v2/messages/delete/${id}`;
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
             }
         })
 }