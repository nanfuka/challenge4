function myGroupmembers() {
    let current_url = location.href
    let url = new URL(current_url)
    let idi = url.searchParams.get('idi')
    localStorage.setItem('grp_id', idi)
    readMessage(idi)
}

function readMessage(idi) {

    let membersUrl = `https://epiks.herokuapp.com/api/v2/groups/${idi}/users`;
    token = localStorage.getItem('token');
    if (token === null) {
        alert('please login');
        window.location.replace('/UI/html/signin.html');
    };
    fetch(membersUrl, {
        mode: 'cors',
            headers: {
                
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response.data)
            var d = response.data;
            console.log(d)
            let result = `<table>`;
            let email = ``;
            d.forEach((msg) => {
                result +=
                    `<tr>
        <td><input type = "radio" value = "${msg.id}" name = "identity"onchange = "myFunctions(${msg.id})"></td>
        <td>${msg.email}</td>
        <td>${msg.userrole}</td>

               </tr>`
            });

            result + `</table>`

            document.getElementById('info').innerHTML = result;

        })
}

function myFunctions(id) {
    document.getElementById("ikons").style.display = "block";
    console.log(id)
    localStorage.setItem('user_id', id)
    document.getElementById("ikons").style.display = "block";
    return id;
    // deleteds(id)
}

function deletes() {
    grp_id = localStorage.getItem('grp_id');
    user_id = localStorage.getItem('user_id');

    if (confirm("Are you sure you want to delete this user!")) {

        let readmsgUrl = `https://epiks.herokuapp.com/api/v2/groups/${grp_id}/users/${user_id}`;
        token = localStorage.getItem('token');
        fetch(readmsgUrl, {
                method: "DELETE",
                mode: 'cors',

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
                    // console.log(d)
                    document.getElementById('no_mail').innerHTML = d;
                    window.location.replace('./allgroupsmembers.html')
                }
            })
    }

}
