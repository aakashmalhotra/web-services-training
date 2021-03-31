const HOST = "http://localhost:3000"

function createAccount() {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const age = document.getElementById('user-age').value;
    const name = document.getElementById('user-name').value;
    $.ajax({
        method: "POST",
        url: `${HOST}/users`,
        data: { name: name, email: email, age: age, password: password }
    })
        .done((msg) => {
            alert("user created");
        }).fail((jqXHR, textStatus) => {
            console.log(jqXHR, textStatus);
        });
}