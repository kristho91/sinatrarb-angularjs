//
// File: CompanyService.js
// Author: Kris Thomsen <mail@kristhomsen.dk> 2013
//

angular.module('companyModule').factory('companyService', function () {

  "use strict";

  var urlBase = "/api";
  var companyService = {};

  companyService.getCompanies = function () {
    return $http.get(urlBase);
  };

  companyService.getCompany = function (id) {
    return $http.get(urlBase + '/' + id);
  };

  companyService.createCompany = function (company) {
    return $http.post(urlBase, company);
  };

  companyService.updateCompany = function (company) {
    return $http.put(urlBase + '/' + company.ID, company);
  };

  return companyService;
});

