module.exports = function (grunt) {

  'use strict';

  var packagedDir = 'dist/Relicuos/';

  grunt.initConfig({

    jshint: {
      files: ['GruntFile.js', 'public/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
        ignores: ['**/vendor/*.js', 'public/bower_components/**', 'GruntFile.js']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    clean: {
      dist: ['dist']
    },

    mkdir: {
      dist: {
        options: {
          create: [
              packagedDir + 'public/scripts'
          ]
        }
      }
    },

    copy: {
      resources: {
        files: [
          {src: 'package.json', dest: 'dist/'},
          {src: 'node-app.js', dest: packagedDir},
          {src: 'public/images/**', dest: packagedDir},
          {src: 'public/styles/**', dest: packagedDir}
        ]
      },
      spa: {
        src: 'public/index.html',
        dest: packagedDir + 'public/index.html'
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "public/styles/styles.css": "src/less/styles.less"
        }
      }
    },

    watch: {
      styles: {
        files: ['src/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'jshint', 'karma']);

};
