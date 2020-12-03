module.exports = [
    {
        context: ['/api'], // Proxy any path that starts with /api
        target: 'http://localhost:3000',
        secure: false,
        loglevel: 'debug'
    }
]