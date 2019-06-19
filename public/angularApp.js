'use strict';

angular.module("myApp", [])
  .controller("LoginCtrl", ["$http", function($http) {
    var self = this;
    self.user = {
      username: '',
      password: ''
    };
    self.message = '';
    self.login = function () {
      $http.post("/api/login", self.user).then(function(resp) {
        self.message = resp.data.msg;
      }, function(error) {
        self.message = error.data.msg;
      });
      };
    }]);
