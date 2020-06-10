const projectKey = 'projectName'
export const getName = function (name) {
    return [projectKey, name].join('/')
}
export const getPath = function (path) {
    return path.replace(/^\//, '\/' + projectKey + '/')
}

export const addEventListener = function(ele,event,fn){
    ele.addEventListener(event,fn)
}
