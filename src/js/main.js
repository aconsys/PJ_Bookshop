import { renderBooksList } from './renderProdList.js';
import { setCartIcon } from './cart.js';

const loadButton = document.getElementById('btn-load');
const categories = document.querySelectorAll('.categories__item');
const url = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyB7D4Uic0eTPc-0H3yYfiBbZ3VDM5k6sgc';
const httpRequestParam = {//GET-параметры при первоначальной загрузке страницы
  category: 'Architecture',
  startIndex: 0,
  maxResults: 6,
  langRestrict: 'en',
};

const selectCategory = (category) => {//Функция установки стиля выбранной категории
  let currentCategoryNode = document.querySelector('.categories__item_selected');//Текущая категория
  let newCategoryNode = category;//Вновь выбранная категория

  currentCategoryNode.classList.remove('categories__item_selected');
  newCategoryNode.classList.add('categories__item_selected');
};

const getHttpRequestParam = (resetStartIndex) => {//Функция обновления GET-параметров.
  let currentCategoryNode = document.querySelector('.categories__item_selected');
  let currentCategoryName = currentCategoryNode.dataset.category;

  httpRequestParam.category = currentCategoryName;

  if (resetStartIndex === true) {//Сброс GET-параметра startIndex при выборе новой категории
    httpRequestParam.startIndex = 0;
  }

  return httpRequestParam;
};

const useRequest = (url, getParam, callback, clearNode) => {//Запрос данных с сервера
  let link = `${url}?q="subject:${httpRequestParam.category}"&${apiKey}&printType=books&startIndex=${httpRequestParam.startIndex}&maxResults=${httpRequestParam.maxResults}&langRestrict=${httpRequestParam.langRestrict}`;

  fetch(link)
  .then(response => response.json())//Получение данных в формате json
  .then((data) => {//Обработка данных callback-функцией
    callback(data, clearNode);
  })
  .catch(err => console.log(err.message));


};

categories.forEach(category => category.addEventListener('click', (event) => {//Обработчик кликов по категориям
  event.preventDefault();

  selectCategory(category);//Установка стиля выбранной категории

  const getParam = getHttpRequestParam(true);//Обновление GET-параметров


  useRequest(url, getParam, renderBooksList, true);
}));

loadButton.addEventListener('click', () => {//Обработчик кликов по кнопку 'Load more'
  const getParam = getHttpRequestParam();

  getParam.startIndex += 6;

  useRequest(url, getParam, renderBooksList, false);
});

setCartIcon(localStorage.length);//Иницифлизация состояния иконки корзины

useRequest(url, httpRequestParam, renderBooksList, false);
