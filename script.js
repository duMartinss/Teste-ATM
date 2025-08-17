const userUrl = 'https://api.github.com/users/{username}';


document.getElementById('button').onclick = function () {
    const username = document.getElementById('username').value;
    const url = userUrl.replace('{username}', username);
    const resultado = document.getElementById('resultado');

    fetch(url)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = `
                    <div class="usuario">
                        <img class="avatar" src="${data.avatar_url}">
                        <div>
                            <p><strong>Nome:</strong> ${data.name}</p>
                            <p><strong>Bio:</strong> ${data.bio}</p>
                        </div>
                    </div>
                `;
        })
};