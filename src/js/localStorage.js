const setLocalStorage = (data) => {//Запись в localStorage, в аргумент передаём объект {инфо о книге}
  const checkItem = localStorage.getItem(`${data.id}`);
  if (!checkItem) {//Защита от повторной записи в localStorage. Если есть с таким ID - не записываем
    localStorage.setItem(`${data.id}`, JSON.stringify(data));
  }
};

const removeLocalStorage = (target, key) => {//
  let item = target.querySelector(`[data-book-info = "${key}"]`).dataset.bookid;
  localStorage.removeItem(item);
};

export { setLocalStorage, removeLocalStorage };
