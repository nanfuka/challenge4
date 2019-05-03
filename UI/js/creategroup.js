document.getElementById('creategroup').addEventListener('click', Compose);

const creategroup = 'https://epiks.herokuapp.com/api/v2/groups';

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
        mode: 'cors',
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
            document.getElementById("response").innerHTML = `<p style="background-color:green; width: 17%; margin-left: 45%;">group created</p>`
                       
        } else {
            document.getElementById("response").innerHTML = `<p style="background-color:red; width: 17%; margin-left: 45%;">${response.error}</p>`           

        }
    })
    .catch(err => console.log(err));
}
