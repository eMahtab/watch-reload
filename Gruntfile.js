module.exports=function(grunt){    
    
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    
    grunt.initConfig({   
        
    watch: {    
        options: {  livereload: true,  },
        express: {
                   files:  [ 'views/index.ejs','app.js' ],
                   tasks:  [ 'express:dev' ],
                   options: {livereload: true,
                            spawn: false 
                            }
                 }
           }
        ,
        
    express: {
               options: {              
                     port:8080
                        },
               dev: {
                     options: {
                          script: 'app.js'
                              }
                    }
            }
        
        
  });
    
    grunt.registerTask('serve', [ 'express:dev', 'watch' ])
    
}