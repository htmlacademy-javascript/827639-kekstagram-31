import {createUsers} from './data.js';

const picturesWrapper = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const randomUsers = createUsers();

const picturesFragment = document.createDocumentFragment();

randomUsers.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.append(pictureElement);
});

picturesWrapper.append(picturesFragment);

