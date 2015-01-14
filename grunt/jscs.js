module.exports = {
  src: ['<%= config.app %>/src/**/**.js','<%= config.server %>/**.js', 'Gruntfile.js'],
  options: {
    config: '.jscsrc'
  }
};
