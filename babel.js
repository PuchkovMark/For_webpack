async function start() {
    return await Promise.resolve('async is working').catch()
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Util ID:', Util.id)