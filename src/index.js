// ES6 export default => dùng cách import {} sẽ lỗi
// 'moment' là thư viện nổi tiếng về Date, Time ở javascript
import moment from 'moment';
import './style.scss';
import { testlib } from './lib/testlib';

// phải import thì File Loader mới làm việc
import image from './image.jpg';

console.log('test index.js ok');

let funcTest = () => {
  return 'test function ES6';
};

console.log(funcTest());

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(testlib);

//================== Dynamic Load lib at run time with Webpack ===========
const getUserModule = () => import('./lib/usersAPI');

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  // load lib is a Promise (= asynchronous)
  getUserModule().then(({ getUsers }) => {
    console.log(getUsers());
  });
});

//================== webpack File-loader ===========================
const divImage = document.getElementById('div-image');

const myImage = new Image();
myImage.src = image;

divImage.appendChild(myImage);
