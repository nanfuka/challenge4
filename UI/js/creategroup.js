document.getElementById('creategroup').addEventListener('click', Compose);

const creategroup = 'http://127.0.0.1:5000/api/v2/groups';

function Compose(e){
    e.preventDefault();
    token = localStorage.getItem('token');
    if (token === null) {
        alert('please login to access this route');

    };

    let name = document.getElementById('name').value;
    let role = document.getElementById('role').value;
    
    let data = {
        name: name,
        role: role
    }


    fetch(creategroup, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        if (response.status === 201){
            document.getElementById("response").innerHTML = "group created"
           
        } else {
            document.getElementById("response").innerHTML = response.error
        }
    })
    .catch(err => console.log(err));
}
