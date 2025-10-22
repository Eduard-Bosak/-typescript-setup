// @ts-nocheck


async function fetchUsers() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();

        console.log(users);

        fillTable(users);

    } catch (error) {

        console.error('Ошибка при загрузке данных:', error);

    }

}


function fillTable(users) {

    const table = document.createElement('table');

    table.border = '1';

    const headerRow = document.createElement('tr');

    const headers = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];


    headers.forEach((header) => {

        const th = document.createElement('th');

        th.textContent = header;

        headerRow.appendChild(th);

    });
      table.appendChild(headerRow);


    users.forEach((user) => {

        const row = document.createElement('tr');

        row.innerHTML = `

            <td>${user.id}</td>

            <td>${user.name}</td>

            <td>${user.username}</td>

            <td>${user.email}</td>

            <td>${user.phone}</td>

            <td>${user.website}</td>

        `;

        table.appendChild(row);

    });


    document.body.appendChild(table);

}


fetchUsers();