module.exports = function(grunt) {

    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        jshint: {
            all: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },

        karma: {
            unit: {
                options: {
                    files: ['test/**/*.js']
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'node_modules/phaser/build/phaser.js',
                    'src/**/*.js'
                ],
                dest: 'deploy/js/outpost.js'
            }
        },

        uglify: {
            outpost: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'deploy/js/outpost.map'
                },
                files: {
                    'deploy/js/outpost.min.js': 'deploy/js/outpost.js'
                }
            }
        },

        watch: {
            files: 'src/**/*.js',
            tasks: ['jshint', 'concat', 'uglify', 'concat']
        }

    });

    grunt.registerTask(
        'default',
        ['jshint', 'concat', 'uglify', 'watch']
    );
};
