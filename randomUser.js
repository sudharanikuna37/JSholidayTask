const userDiv = document.getElementById('user');
const fetchButton = document.getElementById('fetch-button');

function fetchUser() {
    const Url = 'https://randomuser.me/api/';
    fetch(Url)
        .then(response => {
                return response.json();
        })
        .then(data => {
            if (data) {
                displayUser(data.results[0]);
            }
        })
        .catch(() => {
            userDiv.textContent = 'Failed to load user data';
        });
}

function displayUser(user) {
    const { name, email, picture } = user;
    userDiv.innerHTML = `
        <img src="${picture.large}" alt="User Picture">
        <p>Name: ${name.first} ${name.last}</p>
        <p>Email: ${email}</p>`;
}
fetchUser();
fetchButton.addEventListener('click', fetchUser);
