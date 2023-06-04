const fetch = require('node-fetch')

function ModifiedTitle() {
    this.userId = ''
}

ModifiedTitle.prototype.get = function() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(res => {
            this.userId = res.userId
            return ({
                title: `Modified: ${res.title}`,
                userId: this.userId+100
            })
        })
}

module.exports = { ModifiedTitle }