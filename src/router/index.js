import '../styles/common.styl';
import {
    getName,
    getPath
} from '../js/util'
import index from '../views/index';

var routersInfo = {
    routes: [
        {
            path: '/index',
            name: "default",
            meta: {title: "index"},
            component: index
        }
    ]
}
var parseData = function (item) {
    item.name = getName(item.name)
    item.path = getPath(item.path)
    if (item.children) {
        item.children.forEach(innerItem => parseData(innerItem))
    }
}

routersInfo.routes.forEach(item => parseData(item));

export default routersInfo
