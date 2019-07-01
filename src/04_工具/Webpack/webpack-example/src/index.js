import { fetchData } from './data';
import './index.css';
import Logo from './assets/images/logo.svg';

const ul = document.createElement('ul');
const data = fetchData();
data.forEach((item) => {
  const li = document.createElement('li');
  li.innerText = item.name;
  ul.appendChild(li);
});
document.body.appendChild(ul);

const image = document.createElement('img');
image.src = Logo;
image.className = 'logo';
document.body.prepend(image);

const h1 = document.createElement('h1');
h1.innerText = 'Example';
document.body.prepend(h1);
