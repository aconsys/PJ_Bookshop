import { setLocalStorage, removeLocalStorage } from './localStorage.js';

const cart = document.getElementById('cart-count');

const setCartIcon = (count) => {//Инициализация иконки корзины наличия/отсутствия записей в localStorage
  if (localStorage.length) {
    cart.classList.remove('cart-btn__count_empty');
    cart.textContent = count;
  }
};

const addInCart = (target, count) => {
  target.innerHTML = 'In the cart';//Меняем текст кнопки
  target.classList.add('btn_in-cart');//и стиль при добавлении в корзину
  cart.classList.remove('cart-btn__count_empty');
  cart.textContent = count;
};

const deleteFromCart = (target, count) => {
  target.innerHTML = 'Buy now';//Меняем текст кнопки
  target.classList.remove('btn_in-cart');//и стиль при добавлении в корзину
  if (count === 0) {
    cart.classList.add('cart-btn__count_empty');
  }
  cart.textContent = count;
};

const checkCartContents = (button) => {//Если при загрузке страници id книги есть
  if (localStorage.length) {//в localStorage - изменить стиль кнопки в карточке книги
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key === button.dataset.bookid) {
        button.innerHTML = 'In the cart';
        button.classList.add('btn_in-cart');
      }
    }
  }
};

const getSelectedBookInfo = (collection) => {//Функция получает информацию о книге при нажатии кнопки Купить
  for (let button of collection) {
    checkCartContents(button);

    button.addEventListener('click', (event) => {//Устанавливаем обработчики нажатий кнопок "Buy now"
      const targetBook = event.target.parentElement.parentElement;//Корневой элемент карточки книги
      const bookInfo = {//Объект для хранения инфы о книге
        id: '',
        thumbnail: '',
        author: '',
        title: '',
        description: '',
        price: '',
      };

      for (let key in bookInfo) {//Наполняем значения объекта bookInfo
        let node = targetBook.querySelector(`[data-book-info = "${key}"]`);//Выбираем узел по ключу === data-аттрибуту

        if (node && key === 'id') {
          bookInfo[key] = node.dataset.bookid;//Берём ID из отдельного data-аттрибута
        } else if (node && key === 'thumbnail') {
          bookInfo[key] = node.getAttribute('src');//Берём ссылку на обложку из src
        } else if (node) {
          bookInfo[key] = node.textContent;//Остальные данные берём их текстового содержимого элемента
        }
      }

      if (event.target.classList.contains('btn_in-cart')) {//Если выбранная книга есть в корзине, добавить
        removeLocalStorage(targetBook, 'id');
        deleteFromCart(event.target, localStorage.length);
      } else {//Если книги нет в корзине, добавить
        setLocalStorage(bookInfo);
        addInCart(event.target, localStorage.length);
      }
    });
  }
};

export { getSelectedBookInfo, setCartIcon };
