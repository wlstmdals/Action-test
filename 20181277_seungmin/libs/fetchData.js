const { ModifiedTitle } = require('./modifiedTitle')

function fetchData() {
    return new Promise((res, rej) => {
        res('peanut butter')
    })
}

function fetchDataWithError() {
    return new Promise((res, rej) => {
        rej('error')
    })
}

function fetchDataWithCallback(callback) {
    const message = 'peanut butter'
    return callback(null, message)
}

async function fetchTitle() {
    try {
        const modTitle = new ModifiedTitle()
        const mt = await modTitle.get()
        return ({
            title: `Welcome ${mt.title}`,
            userId: mt.userId
        })
    } catch (e) {
        throw e
    }
}

module.exports = { fetchData, fetchDataWithError, fetchDataWithCallback, fetchTitle }