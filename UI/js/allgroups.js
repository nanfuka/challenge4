// token = localStorage.removeItem('token');
//     if (token == null) {
//         alert('please login');
//         window.location.replace('UI/index.html');
//     };
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

            if (response.error === "you do not have any groups at the moment") {
                // console.log(response)
                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
                var d = response.data;
                console.log(d)
                let group = `<table>
                    <tr>
                        
                        <th>Name</th> 
                        
                        <th>Role</th>
                        <th>DELETE</th>
                        <th>Add users to group</th>
                    </tr>
                        `;
                d.forEach((grp) => {

                    group +=
                        `  
                        <tr>
                        <td>${grp.name}</td>
                        
                        <td>${grp.role}</td>
                        <td onclick='deletes(${grp.id})'><img src="../images/delete.png" alt="delete" height="22" width="22"></td>
                        <td><a href = add_members_to_group.html(${grp.id})>addmembers</a></td>
                        <td onclick='add()'><button>Add</button></td></tr>
                        `
                });
                group += "</table>"
                document.getElementById('info').innerHTML = group;
            }
        })
}

function add() {
    let email = document.getElementById('newmember').value;
    let data = {
        "email": email
    }
    
        let readmsgUrl = `http://127.0.0.1:5000/api/v2/groups/41/users`;
        token = localStorage.getItem('token');
        fetch(readmsgUrl, {
                method: 'POST',
                // mode: "no-cors",
   
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                // if (response.error === "you have no recieved messages") {
                //     document.getElementById('no_mail').innerHTML = response.error;
                // } else if (response.status == 200) {
                //     var d = response.data;
                //     console.log(d)
                //     window.location.replace('./user_dash.html')
                // }
            })
    }


   
    //                 if (data.message === 'thanks for registering with Epic mail') {
    //                     token = data.data[0].token;
    //                     localStorage.setItem('token', token)

    //                     window.location.replace('./user_dash.html')

    //                 } else {

    //                     document.getElementById("negativeresponse").innerHTML = `<h1 style="color:red; background-color:pink; margin: 2%; font-size: 100%;" >${data.error}</h1>`
    //                     // document.getElementById("negativeresponse").style.display = block
    //                 }
    //             })
    //     }
    // }





    function deletes(id) {
        let readmsgUrl = `http://127.0.0.1:5000/api/v2/groupss/${id}`;
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
    // function deletes(id) {
    //     if (confirm("Are you sure you want to delete this group!")){
    //     let readmsgUrl = `https://epiks.herokuapp.com/api/v2/groupss/${id}`;
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
    //             if (response.error === "you have no groups") {
    //                 document.getElementById('no_mail').innerHTML = response.error;
    //             } else if (response.status == 200) {
    //                 var d = response.data;
    //                 console.log(d)
    //                 document.getElementById('no_mail').innerHTML = d;
    //                 window.location.replace('./view_groups.html')
    //             }
    //         })
    // }
    // }