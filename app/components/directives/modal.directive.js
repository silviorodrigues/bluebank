angular.module("bluebank").directive("uiModal", function () {
  return {
    templateUrl: "components/views/modal.html",
    replace: true,
    restrict: "AE",
    scope: {
      title: "@"
    },
    transclude: true
  };
});
