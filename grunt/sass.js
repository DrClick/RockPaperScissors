module.exports = {
    dev: {
        options: {
            style: 'expanded',
            compass: false
        },
        files: {
            '<%= config.app %>/styles/styles.css': '<%= config.app %>/styles/sass/styles.scss'
        }
    }
};