module.exports = {
    app: {
        src: ['<%= config.app %>/src/**/**.js', 'Gruntfile.js'],
        options: {
            config: '.jscsrc'
        }
    },
    server: {
        src: ['<%= config.server %>/**.js', 'Gruntfile.js'],
        options: {
            config: 'server/.jscsrc'
        }
    }
};
