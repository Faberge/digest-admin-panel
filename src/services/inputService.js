//Работа с хранилищем и рыба под селект боксы

export const getFontCollection = () => [
  { id: "San-Francisco", title: "San-Francisco" },
  { id: "Arial", title: "Arial" },
  { id: "Oswald", title: "Oswald" },
];

export const getColorCollection = () => [
  { id: "Green", title: "Red" },
  { id: "Red", title: "Green" },
  { id: "Blue", title: "Blue" },
];

const KEYS = {
  news: "news",
  id: "id",
};

export function insertNews(data) {
  let news = getAllNews();
  data["id"] = generateId();
  news.push(data);
  localStorage.setItem(KEYS.news, JSON.stringify(news));
}

export function generateId() {
  if (localStorage.getItem(KEYS.news) == null) {
    localStorage.setItem(KEYS.news, "0");
  }
  var id = parseInt(localStorage.getItem(KEYS.id));
  localStorage.setItem(KEYS.id, (++id).toString());
  return id;
}

export function getAllNews() {
  if (localStorage.getItem(KEYS.news) == null) {
    localStorage.setItem(KEYS.news, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(KEYS.news));
}
