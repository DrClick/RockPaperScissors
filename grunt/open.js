module.exports = {
    dev : {
        path: 'http://localhost:8001',
        app: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        options: {
            delay: 2000
        }
    },
    inspector : {
        path: 'http://localhost:8080/debug?port=5858',
        app: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        options: {
            delay: 2000
        }
    },
    meeting : {
        path: 'https://global.gotomeeting.com/join/551506805',
        app: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    }
};