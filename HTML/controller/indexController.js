StepAppStore.entrance.controller("StepAppStore.entrance.index",['$scope', '$http', 'Projects', function ($scope, $http, Projects) {
    $http.get("/loginAs").then(function (res) {
        $scope.loginName = res.data.name
    });
    $scope.projects = [];
    Projects.all().then(function (projects) {
        projects.forEach(function (project) {
           project.uploadedon = moment(new Date(project.uploadedon).toISOString()).tz('Asia/Kolkata').format('DD-MM-YYYY hh:mma')
        });
        $scope.projects = projects;
    });
    $.get("/personalDetails",function(data){
        $scope.isLoggedIn = data.isLoggedIn;
        $scope.username = data.username;
    });
}]);