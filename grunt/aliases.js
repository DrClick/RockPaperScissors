module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('serve', function (target) {

        grunt.task.run([
            'clean:server',
            'processhtml:dev',
            'sass:dev',
            'express:dev',
            'open:dev',
            'watch'
        ]);
    });

    grunt.registerTask('sass', ['sass:dev']);

    grunt.registerTask('build', [
        'clean:dist',
        'lint',
        'processhtml:dist',
        'useminPrepare',
        'requirejs',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin',
        'htmlmin',
        'sass:dev'
    ]);

    grunt.registerTask('lint', [
        'jscs',
        'eslint'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};