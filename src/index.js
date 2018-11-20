import _ from "lodash";
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    //lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //css
    element.classList.add('hello');

    //images
    let myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    //xml
    console.log(Data);

    return element;
}

document.body.appendChild(component());