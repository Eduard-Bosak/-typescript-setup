var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            const users = yield response.json();
            console.log(users);
            fillTable(users);
        }
        catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    });
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
export {};
//# sourceMappingURL=index.js.map