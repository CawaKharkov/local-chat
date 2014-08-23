'use strict';

/* App Module */
//https://github.com/btford/angular-socket-io
//btford.socket-io

/**
 * Main application
 * @type {module|AngularJS}
 */
var LocalChat = angular.module('LocalChat', ['btford.socket-io']);

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

/**
 * Create socket interface
 */
LocalChat.factory('chatSocket', function (socketFactory) {
    var socket = io.connect("http://cawakharkov.mooo.com:8001");
    var chatSocket = socketFactory({ ioSocket:socket});
     chatSocket.forward('error');
    return chatSocket;
});


LocalChat.factory('Data', function () {
    return {message: "I'm data from a service"}
})

function CoverCtrl($scope, Greetings, Data,chatSocket) {
    $scope.data = Greetings;
    chatSocket.forward('ping', $scope);


    chatSocket.emit('pong', { message: 'Hello from angular' });


    $scope.$on('socket:ping', function (ev, data) {
        console.log('pong!')
    });

}

function MainCtrl($scope) {


}

