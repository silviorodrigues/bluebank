'use strict'

angular.module('bluebank').controller('dashboardController', function($scope) {
	var vm = this;
	vm.section='historic';
  vm.fakeHistoric = [
    {
      "id": 1,
      "name": "Marlon Brando",
      "ag": "1234",
      "cc": "123456789-02",
      "date": new Date(1423811030 * 1000),
      "value": 300.00
    },
    {
      "id": 2,
      "name": "Ana Cristina",
      "ag": "1234",
      "cc": "123456789-00",
      "date": new Date(1432811030 * 1000),
      "value": 2000.00
    },
    {
      "id": 3,
      "name": "João Silva",
      "ag": "1234",
      "cc": "123456789-01",
      "date": new Date(1432811030 * 1000),
      "value": 1300.20
    },
    {
      "id": 4,
      "name": "João Silva",
      "ag": "1234",
      "cc": "123456789-01",
      "date": new Date(1432811030 * 1000),
      "value": 200.50
    },
    {
      "id": 5,
      "name": "Marlon Brando",
      "ag": "1234",
      "cc": "123456789-02",
      "date": new Date(1433811030 * 1000),
      "value": 30.00
    },
  ];

  vm.toLocaleDate = function(e) {
    e.date = e.date.toLocaleDateString();
    return e;
  };

});
