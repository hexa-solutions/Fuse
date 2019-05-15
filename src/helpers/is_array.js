module.exports = obj => (!Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj)) || Object.prototype.toString.call(obj) === '[object List]'
