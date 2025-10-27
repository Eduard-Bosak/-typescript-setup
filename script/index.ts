// Типизация для объекта данных
//Определяем тип для пользователя, содержащий основные поля.
type DataType = {
     id: number;
     name: string ;
     phone: string;
     email: string;
     adress: string;
};
// Массив с исходными данными (mock)
//Используется для проверки методов абстрактного класса
const mockUserData: DataType[] = [
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
//Абстрактный класс Resource<T>
// Работает с массивом объектов типа T, предоставляя базовые методы.
abstract class  Resource<T> {
    protected data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    //Получение полного массива объектов
    get(): T[] {
        return this.data;
    }

    // Получение одного объекта по ключу и значению.
    getOne<K extends keyof T>(key: K, value: T[K]): T | undefined {
        return this.data.find((item) => item[key] === value);
    }

    // Добавление нового объекта в массив
    add(newObj: T): T[] {
        this.data.push(newObj);
        return this.data;
    }

    //Обновление объекта по ключу и значению
    update<K extends keyof T>(key: K, value: T[K], partialData: Partial<T>): T | undefined {
        const item = this.getOne(key, value);
        if (item) {
            Object.assign(item, partialData);
            return item;
        }
        return undefined;
    }

    // Удаление объекта по ключу и значению
    delete<K extends keyof T>(key: K, value: T[K]): T | undefined {
        const index = this.data.findIndex((item) => item[key] === value);
        if (index > -1) {
            const [removedItem] = this.data.splice(index, 1);
            return removedItem;
        }
        return undefined; 
    }
}



// Модель UserModel для работы с массивом пользователей
//Наследуется от абстрактного класса Resource<DataType>.
class UserModel extends Resource<DataType> {
constructor(data: DataType[]) {
super(data);
  }
}
// Создание экземпляра UserModel
// Инициализация с данными mockUserData.
const users = new UserModel([...mockUserData]);

// Примеры работы с UserModel
console.log("users.get()", users.get()); //получение всех объектов
console.log("users.add", users.add({id:6, name: "Олеся Ушинская", phone: "8(901)-225-63-18", email: "oy@mail.ru", adress: "г. Рыбинск, улица 9 Мая, 36-85"})); // добавление
console.log("users.getOne('id', 4)", users.getOne("id", 4)); //получение по id
console.log("users.update('id', 4, { name: 'Инокентий'})", users.update("id", 4, { name: "Инокентий"}));// обновление
console.log("users.delete('id', 4)", users.delete("id", 4)); //удаление

//Типизация для заказов
interface OrderDataType {
id: number;
price: number;
}
// Модель OrderModel для работы с массивом заказов
// Наследуется от абстрактного класса Resource<OrderDataType>
class OrderModel extends Resource<OrderDataType> {
constructor(data: OrderDataType[]) {
super(data);
   }
}
//Создание экземпляра OrderModel
// Инициализация с данными заказов.
const orders = new OrderModel([
    {id: 1, price: 100},
    {id: 2, price: 200},
    {id: 3, price: 300},
]);
// Примеры работы с OrderModel
console.log("orders.get()", orders.get()); // получение всех объектов
console.log("orders.add()", orders.add({ id: 4, price: 400})); //добавление
console.log("orders.getOne('id', 2)", orders.getOne("id", 2)); //получение по id
console.log("orders.update('id', 3, { price: 500 })", orders.update("id", 3, {price: 500}));//обновление
console.log("orders.delete('id', 2)", orders.delete("id", 2)); // удаление
console.log('users add',users.add({
    "id":6,
    "name": "Игорь Лисицин",
    "phone": "9(905)-456-98-63",
    "email": "il@mail.ru",
    "adress": "г. Москва, переулок Петрова 6-25"
}));
console.log('users.getOne()', users.getOne('id', 4)); // получение объекта с id 4
console.log('users.getOne()', users.getOne('name', 'Илья Смирнов')); // Получение одного объекта по совпадению name
console.log('users.getOne()', users.getOne('phone', '8(910)-156-18-77')); // Получение одного объекта по совпадению phone
console.log('users.getOne()', users.getOne('id', 40)); // Не существующий id, вернется undefined

console.log('users.update()', users.update('id', 4, { name: 'Сергей' }));// Изменение поля 'name' в объекте с 'id' равным 4, 
// возвращает измененный объект 
console.log('users.update()', users.update('email','ip@mail.ru', { adress: 'г.Суздаль, проспект Ленина 22-65', phone: '1234567789'}));
//в объекте с полем 'email','ip@mail.ru' изменяем адрес и номер телефона
console.log('users.update()', users.update('name', 'Алекесандр Пушкин', { adress: 'Москва, Россия'}));
//изменгение несуществующей записи вернет undefined, ничего не произойдет
console.log('users.get()3', users.get());//выводит первые 3 объекта
console.log('users.delete()', users.delete('name', 'Илья Смирнов'));// удаление олбъекта с полем 'name', 'Илья Смирнов' возвращает удаленный объект
console.log('users.delete()', users.delete('id', 222));//Удаление несуществующего объекта
