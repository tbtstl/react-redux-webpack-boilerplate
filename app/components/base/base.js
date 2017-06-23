if (process.env.NODE_ENV === 'production'){
    module.exports = require('./base.prod');
} else {
    module.exports = require('./base.dev');
}
