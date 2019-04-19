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

            if (response.error === `<p style = "background-color:red; color:white; text-align:centre;">you do not have any groups at the moment</p>`) {
                // console.log(response)
                document.getElementById('no_mail').innerHTML = response.error;
            } else if (response.status == 200) {
                var d = response.data;
                console.log(d)
                let group = `<table>
                    <tr>
                        <th>id</th>
                        <th>Name</th> 
                        
                        <th>Role</th>
                        <th>DELETE</th>
                        <th>Add users to group</th>
                    </tr>
                        `;
                d.forEach((user) => {

                    group +=
                        `  
                        <tr><td>${user.id}</td>
                        <td>${user.name}</td>
                        
                        <td>${user.role}</td>
                        <td><a href = "../html/delete_group.html?id=${user.id}"> Delete</a></td>
                        <td><a href = "../html/add_members_to_group.html?id=${user.id}"> add members to group</a></td></tr>
                        `
                });
                group += "</table>"
                document.getElementById('info').innerHTML = group;
            }
        })
}