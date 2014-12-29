module.exports = function(grunt) {

    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        jshint: {
            all: ['gruntfile.js', 'src/**/*.js']
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
            
            jshintFiles : {
                    files: ['gruntfile.js', 'src/**/*.js'],
                    tasks: 'jshint'
            },
        
            concatFiles: {
                    files: ['node_modules/phaser/build/phaser.js',
                            'src/**/*.js'],
                    tasks: 'concat'
            },
        
            uglifyFiles: {
                    files: 'deploy/js/outpost.js',
                    tasks: 'uglify'
            },
        
            copyFiles: {
                    files: 'assets/**',
                    tasks: 'copy'
            }
        }
    });

    grunt.registerTask(
        'default',
        ['jshint', 'concat', 'uglify', 'copy', 'watch']
    );
};
