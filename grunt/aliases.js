module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('serve', function (target) {

        grunt.task.run([
            'clean:server',
            'processhtml:dev',
            'sass:dev',
            'forever:dev',
            'open:dev',
            'open:inspector',
            'parallel:dev'
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
        'jscs:app',
        'jscs:server',
        'shell:eslint:app',
        'shell:eslint:server'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);

    grunt.registerTask('jira', function() {
        grunt.task.run(['shell:jira']);
    });

    grunt.registerTask('github', function() {
        grunt.task.run(['shell:github']);
    });

    grunt.registerTask('pr', function() {
        grunt.task.run(['lint','shell:clean', 'shell:push', 'shell:pullrequest']);
    });

    grunt.registerTask('meet', function() {
        grunt.task.run(['open:meeting']);
    });

    grunt.registerTask('trim', function() {
        grunt.task.run(['shell:trim']);
    });
};
