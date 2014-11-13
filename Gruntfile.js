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
                    'deploy/js/op.min.js': 'deploy/js/outpost.js'
                }
            }
        },

        copy: {
            assets: {
                files: [
                    {
                        expand: true,
                        src: ['assets/**'],
                        dest: 'deploy/'}
                ],
            },
        },

        watch: {
            files: '**/*',
            tasks: ['jshint', 'concat', 'uglify', 'copy']
        }

    });

    grunt.registerTask(
        'default',
        ['jshint', 'concat', 'uglify', 'copy', 'watch']
    );
};
