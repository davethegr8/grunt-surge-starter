module.exports = function(grunt) {

  grunt.initConfig({
    harp: {
      server: {
        server: true,
        source: 'public'
      },
      dist: {
        source: 'public',
        dest: 'dist'
      }
    },
    surge: {
      deploy: {
        options: {
          // The path or directory to your compiled project
          project: 'dist/',
          // The domain or subdomain to deploy to
          domain: 'your-project-domain.surge.sh'
        }
      }
    }
  });

  // Load in the grunt-harp plugin
  grunt.loadNpmTasks('grunt-harp');

  grunt.registerTask('server', ['harp:server']);
  grunt.registerTask('compile', ['harp:dist']);

  // Load in the grunt-surge plugin
  grunt.loadNpmTasks('grunt-surge');

  // Add a `grunt deploy` task that runs Surge
  grunt.registerTask('deploy', ['compile', 'surge']);
};