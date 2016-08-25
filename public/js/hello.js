var travelApp = angular.module('travelApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);
console.log('travel!');

travelApp.controller('tController', ['$scope', function($scope, $http){
    console.log('in the controller!');
    $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                SystemID: "Travelyst_27465181002836251944",
                RequestAction: "GetEnquiry",
                RequestXML: "<Request><EnquiryKey>7533</EnquiryKey></Request>",
                OutputFormat: "JSON"
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('http://196.34.15.10/webservice/test.aspx', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };
    }]);
console.log('end!');