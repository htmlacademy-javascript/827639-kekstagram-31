const DESCRIPTION = [
  'Мой день',
  'Мое новое увлечение',
  'Как ваши дела?',
  'Что делаете?',
  'Отдыхаю',
  'Учусь',
  'Пока еду на работу',
  'Вот что я поел',
  'Важное фото',
  'Хвастаюсь',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Таня',
  'Соня',
  'Артем',
  'Дима',
  'Паша',
  'Денис',
  'Наташа',
  'Олеся',
  'Никита',
  'Лена',
];



function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateId = createRandomIdFromRangeGenerator(1,25);
const generateUrl = createRandomIdFromRangeGenerator(1,25);
const generateCommentId = createRandomIdFromRangeGenerator (1, 1000);

const createComment = () => (
  {
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
});

const createUser = () => {
  const commentsNumber = getRandomInteger(0, 30);
  return{
    id: generateId(),
    url: 'photos/' + generateUrl() + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: commentsNumber}, createComment),
}};

const users = Array.from({length: 25}, createUser);

console.log(users);
