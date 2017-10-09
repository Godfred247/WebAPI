/// <reference path="C:\Users\godfred.nkumane\Documents\Visual Studio 2015\Projects\WebAPI\WebAPI\Scripts/angular.js" />

var webAPI = angular.module('firstApplication', ['ngMaterial'])
                    .controller('inputController', inputController);

function inputController($scope) {
    $scope.project = {
        comments: 'Comments',
    };
}