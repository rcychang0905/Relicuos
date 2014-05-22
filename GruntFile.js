module.exports = function (grunt) {

    'use strict';

    var packagedDir = 'dist/Relicuos/';

    grunt.initConfig({

        jshint: {
            files: ['GruntFile.js', 'public/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                ignores: ['**/vendor/*.js', 'GruntFile.js']
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
                    {src: 'public/styles/**', dest: packagedDir},
                    {src: 'public/favicon.ico', dest: packagedDir}
                ]
            },
            spa: {
                src: 'public/index.html',
                dest: packagedDir + 'public/index.html'
            }
        },

        ngtemplates: {
            app: {
                options: {
                    module: 'TD.Relicuos',
                    usemin: packagedDir + 'public/scripts/app.min.js'
                },
                cwd: 'public',
                src: ['tpl/**/*.html'],
                dest: packagedDir + 'public/scripts/app.template.js'
            }
        }


    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['jshint', 'karma']);

};
