angular.module('bluebank').filter('groupDate', function() {
  return function(input) {
    var date = input.split('/');
    var output = date[1] + '/' + date[0];
    return output;
  }
});
