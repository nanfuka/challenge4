// token = localStorage.removeItem('token');
//     if (token == null) {
//         alert('please login');
//         window.location.replace('UI/index.html');
//     };
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
                    <tr>
                        
                        <th>Name</th> 
                        
                        <th>Role</th>
                        <th>DELETE</th>
                        <th>Add users to group</th>
                    </tr>
                        `;
                d.forEach((user) => {

                    group +=
                        `  
                        <tr>
                        <td>${user.name}</td>
                        
                        <td>${user.role}</td>
                        <td onclick='deletes(${user.id})'><img src="../images/delete.png" alt="delete" height="22" width="22"></td>

                        <td><a href = "../html/delete_group.html?id=${user.id}"> Delete</a></td>
                        <td><a href = "../html/add_members_to_group.html?id=${user.id}"> add members to group</a></td></tr>
                        `
                });
                group += "</table>"
                document.getElementById('info').innerHTML = group;
            }
        })
}
function deletes(id) {
    if (confirm("Are you sure you want to delete this group!")){
    let readmsgUrl = `https://epiks.herokuapp.com/api/v2/groupss/${id}`;
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
                document.getElementById('no_mail').innerHTML = d;
                window.location.replace('./view_groups.html')
            }
        })
}
}