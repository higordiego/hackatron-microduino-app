(function(){
	'use strict'
	app.factory('TriggerFactory', ['$http' ,function($http ){
		return {
			list: function(data){
				return $http.get('http://localhost:3000/api/v1/' + 'triggers')
			}
		};
	}]);
})();
