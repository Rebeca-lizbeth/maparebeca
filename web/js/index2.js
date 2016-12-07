// Se crea una variable que permita la lectura y el almacenamiento de archivos CSV//
// Esta aplicación permite guardar los datos si se colocan manualmente en la variable $scope sólo así es posible que se visualice en la pagina que esta ligada con el botón DESCARGAR CSV. Decidí dejarlo de esta forma debido a que al integrar los módulos "ngSanitize", "ngCsv" con el boton DECSRGAR CSV no permitía la descarga del archivo// 
var app = angular.module("csvApp", ["ngSanitize", "ngCsv"]);
// Se llama al controlador y la función $scope//
app.controller("csvController", ["$scope",
  function($scope) {
      /*arreglo datos que son los datos que muestra la página principal, en este arreglo ya se encuentran definidos 5 ciudades con sus respectivos datos*/
    $scope.datos = [{
      city : 'Location 1',
        desc : 'Test',
        lat : 52.238983,
        long : -0.888509 
    }, {
      city : 'Location 2',
        desc : 'Test',
        lat : 52.238168,
        long : -52.238168
    }, {
      city : 'Location 3',
        desc : 'Test',
        lat: 40.7127837,
        long : -74.00594130000002 
    }, {
      city : 'Location 4',
        desc : 'Test',
        lat : 19.4340199,
        long : -99.1956012 
    }, {
      city : 'Location 5',
        desc : 'Test',
        lat: 19.173773,
        long : -96.13422409999998 
    },
    {
      city : 'mi casa',
        desc : 'rebeca',
        lat: 29.173773,
        long : -56.13422409999998 
    }];
  }
]);