module.exports = {
    options: {
        debug: true
    },
    dev: {
        options: {
            script: 'server/express.js',
            fallback: function() {
                grunt.task.run(['shell:console:"restarting server"', 'express:dev']);
            }
        }
    }
};