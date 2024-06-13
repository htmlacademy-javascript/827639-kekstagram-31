import {getRandomInteger, getUniqueInteger, getRandomArrayElement} from './util.js'

const DESCRIPTIONS = [
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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
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

const USERS_COUNT = 25;
const MAX_COMMENTS = 30;

const generateId = getUniqueInteger(1, USERS_COUNT);
const generateUrl = getUniqueInteger(1, USERS_COUNT);
const generateCommentId = getUniqueInteger (1, 1000);

const createComment = () => (
  {
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
);

const createUser = () => {
  const commentsNumber = getRandomInteger(0, MAX_COMMENTS);
  return{
    id: generateId(),
    url: 'photos/' + generateUrl() + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: commentsNumber}, createComment),
  };
};

const createUsers = () => Array.from({length: USERS_COUNT}, createUser);

export {createUsers};
