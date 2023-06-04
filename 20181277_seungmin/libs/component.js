const hooks = require('./appHooks')

class Component {
    static givemeBanana() {
        return hooks.hookBanana()
    }

    static givemeApple() {
        return hooks.hookApple()
    }
}

module.exports = Component