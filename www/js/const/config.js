(function () {
  var online = false;
  app.constant('Config', {
      api: online ? 'http://192.168.1.75/api/v1/' : 'http://localhost:3000/api/v1/',
      socket: online ? 'http://192.168.1.75/' : 'http://localhost:3000/'
  })
})();
