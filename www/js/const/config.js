(function () {
  var online = true;
  app.constant('Config', {
      api: online ? 'http://10.98.1.82/api/v1/' : 'http://localhost:3000/api/v1/',
      socket: online ? 'http://10.98.1.82/' : 'http://localhost:3000/'
  })
})();
