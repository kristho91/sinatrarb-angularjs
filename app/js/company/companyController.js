//
// File: CompanyController.js
// Author: Kris Thomsen <mail@kristhomsen.dk> 2013
//

angular.module('companyModule').controller('companyController', function ($scope, companyService) {

  "use strict";

  $scope.getCompanies = function () {
  
    $scope.companies = [];
    
    companyService.getCompanies(function (companies) {
      $scope.companies = companies;
    });  
  };

  $scope.getCompany = function () {
  
    $scope.company = {};
  
    var id = $scope.company.id;
    companyService.getCompany(id, function (company) {
      $scope.company = company;
    }); 
  };

  $scope.createCompany = function () {
    var company = $scope.company;
    companyService.createCompany(company);
  };

  $scope.updateCompany = function () {
    var company = $scope.company;
    companyService.updateCompany(company);
  };

});

