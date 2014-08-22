'use strict';

/* App Module */

/**
 * Main application
 * @type {module|AngularJS}
 */
var LocalChat = angular.module('LocalChat',[]);

/**
 * Define greetings message factory
 */
LocalChat.factory('Greetings', function () {
    return {message: 'Vivamus volutpat porttitor congue. Cras vestibulum at diam eu porta.' +
        'Fusce quis fermentum sapien, eget tempor ligula. Fusce odio lectus, venenatis eu sagittis hendrerit,' +
        'malesuada id nisi. Sed lobortis odio rutrum massa feugiat pretium. Ut sit amet nisi arcu. Vestibulum' +
        'quis tempor sapien.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisi tristique nunc molestie' +
        'dictum luctus sit amet purus.'};
})

LocalChat.factory('Data', function() {
    return {message: "I'm data from a service"}
})

function CoverCtrl($scope, Greetings, Data) {
    $scope.data = Greetings;
}

function MainCtrl($scope) {
}

