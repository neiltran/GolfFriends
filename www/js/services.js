angular.module('golfFriends.services', [])
.factory('Player', ['$http', 'PARSE_CREDENTIALS', function($http, PARSE_CREDENTIALS) {

	return {

		getPlayer: function(playerId) {
			return $http( {method:'GET',
				url: 'https://api.parse.com/1/classes/Player/'+playerId,
				headers: {
					'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
				},
				params: {}
			});		
		},
		getScorecard: function(playerId) {
			return $http( {method:'GET',
				url: 'https://api.parse.com/1/classes/Scorecard',
				headers: {
					'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
				},
				params: {
					 'where= {"player": "4IqWoI9I7v"}'
				}
			});  
		}
	}
}])

.value('PARSE_CREDENTIALS',{
    APP_ID: 'XNFAMqEqjlDJnWhpLWk2OSoEhfRSKmwpWYrVXqq3',
    REST_API_KEY:'U27XwN7WZK3VHHjRfkXyxHoqf4YISnfEaNibeECY'
});