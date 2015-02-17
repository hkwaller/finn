app.service('wordService', function ($http) {
    this.getData = function (file) {
        return $http.get(file).then(function (response) {
            return response.data;
        });
    };
});