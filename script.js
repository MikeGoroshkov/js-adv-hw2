// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library{
	#books;
	constructor(books){
		this.#books = books;
	}
	allBooks(){
		return this.#books;
	}
	addBook(title){
		try{
			if(this.#books.includes(title)){
				throw new Error("Такая книга уже есть в библиотеке");
			}
			this.#books.push(title);
		} catch(error){
			console.log(error.mesage);
		}
	}
	removeBook(title){
		try{
			if(!this.#books.includes(title)){
				throw new Error("Такой книги нет в библиотеке");
			}
			this.#books = this.#books.filter(v => v !== title);
		} catch(error){
			console.log(error.mesage);
		}
	}
	hasBook(title){
		return this.#books.includes(title);
	}
}

const library = new Library(["Война и мир", "1984", "Лолита", "Илиада"]);
console.log(library.allBooks());
library.addBook("Одиссея");
console.log(library.allBooks());
library.removeBook("Илиада");
console.log(library.allBooks());
console.log(library.hasBook("Война и мир"));

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

// const initialData = [
// 	{
// 		product: "Apple iPhone 13",
// 		reviews: [
// 			{
// 				id: "1",
// 				text: "Отличный телефон! Батарея держится долго.",
// 			},
// 			{
// 				id: "2",
// 				text: "Камера супер, фото выглядят просто потрясающе.",
// 			},
// 		],
// 	},
// 	{
// 		product: "Samsung Galaxy Z Fold 3",
// 		reviews: [
// 			{
// 				id: "3",
// 				text: "Интересный дизайн, но дорогой.",
// 			},
// 		],
// 	},
// 	{
// 		product: "Sony PlayStation 5",
// 		reviews: [
// 			{
// 				id: "4",
// 				text: "Люблю играть на PS5, графика на высоте.",
// 			},
// 		],
// 	},
// ];

const userButtonElement = document.querySelector('.add-button');
const userInputElement = document.querySelector('.user-input');
const listElement = document.querySelector('.item-list');
const errorElement = document.querySelector('.error-message');

userButtonElement.addEventListener('click', () => {
	try{
		if (userInputElement.value.length > 500 || userInputElement.value.length < 50){
			throw new Error("Неверная длина")
		}
		const li = document.createElement('li');
		li.textContent = userInputElement.value;
		listElement.appendChild(li);
		errorElement.textContent = "Отзыв добавлен";
	} catch(error) {
		errorElement.textContent = error.message;
	} finally {
		console.log("Попытка удалась");
	}
});