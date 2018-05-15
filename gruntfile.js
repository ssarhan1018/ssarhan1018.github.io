//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            files:{
        'css/my_Portfolio.css':
                'assets/scss/colors.scss'
              }
          }
      },
        /**
        * Grunt Contrib Watch
        *Montor files and execute taask:
        *https://www.npmjs.com/package/bearcat-grunt-contrib-watch
        */
        watch: {
            sass: {
             
                files: [
                    'assets/scss/*.scss'
                    
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts: {
             
                files: [
                    'assets/js/*.js'
                    
                ],
                tasks: [
                    'uglify'
                ]
            }
                
                
        },
        
        /**
        * Grunt Contrib uglify
        *Montor files and execute taask:
        *https://www.npmjs.com/package/grunt-contrib-uglify
        */
        
        uglify: {
            my_target:{
                files: {
                    'js/scripts.js': 'assets/js/scripts.js','node_modules/jquery/jquery.js'
                    
                        }
                    
                     }
               },
        
        /**
        * Grunt Contrib jshint
        *Montor files and execute taask:
        *https://www.npmjs.com/package/grunt-contrib-jshint
        */
        
        jshint: {
            files : ["*.js", "assets/js/*.js"],
            options: {
                esnext: true,
                globals:{
                    jQuery: true
                }
            }
        },
        
        
        /**
        * Grunt Contrib Jasmine
        *Montor files and execute taask:
        *https://www.npmjs.com/package/grunt-contrib-jasmine
        */
        
         jasmine: {
    pivotal: {
      src: 'src/*.js',
      options: {
        specs: 'spec/Spec.js',
        helpers: 'spec/Helper.js'
      }
    }
  }
    
	});
    
    
    
    
    grunt.loadNpmTasks("grunt-contrb-jshint")
    
	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['jasmine']);

};
