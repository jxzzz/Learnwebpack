import _ from 'lodash';
import './index.css'
import test from './test.json'
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    element.innerHTML = test.name
    console.log(test)
    return element;
  }
  
  document.body.appendChild(component());