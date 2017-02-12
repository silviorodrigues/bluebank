angular.module('bluebank').filter('groupDate', function() {
  return function(input) {
    var date = input.split('/');
    day = date[1].length == 1 ? '0' + date[1] : date[1];
    month = date[0].length == 1 ? '0' + date[0] : date[0];
    var output = day + '/' + month;
    return output;
  }
});
