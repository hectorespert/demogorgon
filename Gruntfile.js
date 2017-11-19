/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      test: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'public/type.css': 'test/test_type.scss'
        }
      }
    },
    sassdoc: {
      default: {
        src: 'src',
        options: {
          dest: 'docs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sassdoc');

  grunt.registerTask('test', ['sass']);
  grunt.registerTask('doc', ['sassdoc']);


};
