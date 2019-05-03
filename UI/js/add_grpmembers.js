document.getElementById('group_members').addEventListener('click', Compose);

const postuser = 'https://epiks.herokuapp.com/api/v2/groups/<int:group_id>/users';

function Compose(e) {
    e.preventDefault();
    token = localStorage.getItem('token');
    if (token === null) {
        alert('You must log in');

    };


    let useremail = document.getElementById('useremail').value;
    let userrole = document.getElementById('userrlo').value;

    let data = {
        useremail: useremail,
        userrole: userrole,
     
    }


    fetch(postmessage, {
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
            console.log(response.status);
            if (response.error === "Expired token. Please Log In again.") {
                window.location.replace('/UI/html/signin.html');
            }
            else if (response.status === 201) {
                document.getElementById("negative").innerHTML = `<p style="background-color:green; width: 60%; margin-left: 20%;">member has been added</p>`;
            } else {
                document.getElementById("negative").innerHTML = `<p style="background-color:red; width: 60%; margin-left: 20%;">${response.error}</p>`
            }
        })
        .catch(err => console.log(err));
}

