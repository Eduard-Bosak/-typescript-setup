const mockUserData = [
    {
        id: 1,
        name: 'Иван Петров',
        phone: '8(905)-136-48-63',
        email: 'ip@mail.ru',
        adress: 'г. Рыбинск, проспект Ленина 15-36'
    },
    {
        id: 2,
        name: 'Светлана Иванова',
        phone: '8(901)-156-18-63',
        email: 'si@mail.ru',
        adress: 'г. Рыбинск, улица Мира 1-6'
    },
    {
        id: 3,
        name: 'Илья Смирнов',
        phone: '8(910)-256-08-67',
        email: 'is@mail.ru',
        adress: 'г. Рыбинск, улица Солнечная 12-52'
    },
    {
        id: 4,
        name: 'Анна Петрова',
        phone: '8(910)-156-18-77',
        email: 'ap@mail.ru',
        adress: 'г. Рыбинск, улица Труда 32-82'
    },
    {
        id: 5,
        name: 'Петр Сидоров',
        phone: '8(911)-356-68-68',
        email: 'ps@mail.ru',
        adress: 'г. Рыбинск, улица Стоялая 1-2'
    },
];
class Resource {
    constructor(data) {
        this.data = data;
    }
    get() {
        return this.data;
    }
    getOne(key, value) {
        return this.data.find((item) => item[key] === value);
    }
    add(newObj) {
        this.data.push(newObj);
        return this.data;
    }
    update(key, value, partialData) {
        const item = this.getOne(key, value);
        if (item) {
            Object.assign(item, partialData);
            return item;
        }
        return undefined;
    }
    delete(key, value) {
        const index = this.data.findIndex((item) => item[key] === value);
        if (index > -1) {
            const [removedItem] = this.data.splice(index, 1);
            return removedItem;
        }
        return undefined;
    }
}
class UserModel extends Resource {
    constructor(data) {
        super(data);
    }
}
const users = new UserModel([...mockUserData]);
console.log("users.get()", users.get());
console.log("users.add", users.add({ id: 6, name: "Олеся Ушинская", phone: "8(901)-225-63-18", email: "oy@mail.ru", adress: "г. Рыбинск, улица 9 Мая, 36-85" }));
console.log("users.getOne('id', 4)", users.getOne("id", 4));
console.log("users.update('id', 4, { name: 'Инокентий'})", users.update("id", 4, { name: "Инокентий" }));
console.log("users.delete('id', 4)", users.delete("id", 4));
class OrderModel extends Resource {
    constructor(data) {
        super(data);
    }
}
const orders = new OrderModel([
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 },
]);
console.log("orders.get()", orders.get());
console.log("orders.add()", orders.add({ id: 4, price: 400 }));
console.log("orders.getOne('id', 2)", orders.getOne("id", 2));
console.log("orders.update('id', 3, { price: 500 })", orders.update("id", 3, { price: 500 }));
console.log("orders.delete('id', 2)", orders.delete("id", 2));
console.log('users add', users.add({
    "id": 6,
    "name": "Игорь Лисицин",
    "phone": "9(905)-456-98-63",
    "email": "il@mail.ru",
    "adress": "г. Москва, переулок Петрова 6-25"
}));
console.log('users.getOne()', users.getOne('id', 4));
console.log('users.getOne()', users.getOne('name', 'Илья Смирнов'));
console.log('users.getOne()', users.getOne('phone', '8(910)-156-18-77'));
console.log('users.getOne()', users.getOne('id', 40));
console.log('users.update()', users.update('id', 4, { name: 'Сергей' }));
console.log('users.update()', users.update('email', 'ip@mail.ru', { adress: 'г.Суздаль, проспект Ленина 22-65', phone: '1234567789' }));
console.log('users.update()', users.update('name', 'Алекесандр Пушкин', { adress: 'Москва, Россия' }));
console.log('users.get()3', users.get());
console.log('users.delete()', users.delete('name', 'Илья Смирнов'));
console.log('users.delete()', users.delete('id', 222));
export {};
//# sourceMappingURL=index.js.map