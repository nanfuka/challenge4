function myGroups() {
    let recieveUrl = 'https://epiks.herokuapp.com/api/v2/groups';
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

            if (response.error === "you do not have any groups at the moment") {
                // console.log(response)
                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
                var d = response.data;
                console.log(d)
                let group = `<table>

                        `;
                d.forEach((grp) => {

                    group +=
                        `  
                        <tr>
                        <td><input type = "radio" value = "${grp.id}" name = "identity"onchange = "myFunctions(${grp.id})"></td>

                        <td>${grp.name}</td>
                        
                        <td>${grp.role}</td>
                        <td onclick='deletes(${grp.id})'><img src="../images/delete.png" alt="delete" height="22" width="22"></td>
                        <td><a href = "../html/add_members_to_group.html?idi=${grp.id}" id = "detail">addmembers</a></td>
                        <td><a href = "../html/view_groupmembers.html?idi=${grp.id}" id = "detail">view group members</a></td>

                        <td onclick='add()'><button>Add</button></td></tr>
                        `
                });
                group += "</table>"
                document.getElementById('info').innerHTML = group;
            }
        })
}

function myFunctions(id) {
    document.getElementById("ikons").style.display = "block";
    console.log(id)
    localStorage.setItem('identity', id)
    document.getElementById("ikons").style.display = "block";
    return id;
    // deleteds(id)
}

function add() {
    let email = document.getElementById('newmember').value;
    let data = {
        "email": email
    }

    let readmsgUrl = `https://epiks.herokuapp.com/api/v2/groups/41/users`;
    token = localStorage.getItem('token');
    fetch(readmsgUrl, {
            method: 'POST',
            mode: "no-cors",

            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)

        })
}

function deletes() {
    id = localStorage.getItem('identity');
    console.log(id)
    if (confirm("Are you sure you want to delete this group!")) {
        let readmsgUrl = `https://epiks.herokuapp.com/api/v2/groupss/${id}`;
        token = localStorage.getItem('token');
        fetch(readmsgUrl, {
                method: 'DELETE',
                mode: 'cors',

                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.error === "you have no groups") {
                    document.getElementById('no_mail').innerHTML = response.error;
                } else if (response.status == 200) {
                    var d = response.data;
                    console.log(d)
                    window.location.replace('./view_groups.html')
                    document.getElementById('deletemessage').innerHTML = `message with id ${id}has been deleted`
                }
            })
    }
}