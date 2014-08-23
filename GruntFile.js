module.exports = function (grunt) {

  'use strict';

  var packagedDir = 'dist/Relicuos/';

  grunt.initConfig({

    jshint: {
      files: ['GruntFile.js', 'public/*.js', 'public/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
        ignores: ['**/vendor/*.js', 'public/bower_components/**']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    less: {
      development: {
        files: {
          // target.css file: source.less file
          "public/styles/styles.css": "src/less/styles.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'jshint', 'karma']);

};
