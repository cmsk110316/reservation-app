if(process.env.NODE_ENV === 'producting'){
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}