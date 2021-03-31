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
        .done((response) => {
            // API was successful
            alert("user created");
        }).fail((xhrObj, textStatus) => {
            // API sends an error . Rrsponse code in 400s or 500s
            if (xhrObj && xhrObj.responseJSON && xhrObj.responseJSON.message)
                alert(xhrObj.responseJSON.message);
        });
}