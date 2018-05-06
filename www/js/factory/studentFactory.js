(function(){
	'use strict'
	app.factory('StudentFactory', ['$http', 'Config' ,function($http, Config ){
		return {
			list: function(data){
				return $http.get(Config.api + 'students')
			}
		};
	}]);
})();
