import _ from "lodash";

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    let br = document.createElement('br');

    //lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //async printMe
    btn.innerHTML = 'Click me and check the console!';

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        let print = module.default;

        print();
    });

    element.appendChild(br);
    element.appendChild(btn);

    return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');

        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}
