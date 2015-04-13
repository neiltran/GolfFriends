angular.module('golfFriends.controllers',[])
.controller('PlayerCtrl',['$scope','Player', function($scope, Player){

	var playerId = '4IqWoI9I7v';

	Player.getPlayer(playerId).success(function(data) {
		$scope.player = data;
	})

	Player.getScorecard(playerId).success(function(data) {
		$scope.scorecard = data;
	})

}]);