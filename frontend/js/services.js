app.service('wordService', function ($http) {
    this.getData = function (file) {
        return $http.get(file).then(function (response) {
            var data = response.data;
            return data;
        });
    };
});