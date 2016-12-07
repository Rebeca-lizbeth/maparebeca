//Angular App Module and Controller
angular.module('mapsApp', [])
  .controller('MapCtrl', function($scope,$http) {
  /*arreglo cities que son los datos que muestra la página principal, en este arreglo ya se encuentran definidos 5 ciudades con sus respectivos datos*/
   $scope.cities = [
    {
        "city" : 'Location 1',
        "desc" : 'Test',
        "lat" : 52.238983,
        "long" : -0.888509 
    },
    {
        "city" : 'Location 2',
        "desc" : 'Test',
        "lat" : 52.238168,
        "long" : -52.238168
    },
    {
        "city" : 'Location 3',
        "desc" : 'Test',
        "lat" : 40.7127837,
        "long" : -74.00594130000002 
    },
    {
        "city" : 'Location 4',
        "desc" : 'Test',
        "lat" : 19.4340199,
        "long" : -99.1956012 
    },
    {
        "city" : 'Location 5',
        "desc" : 'Test',
        "lat" : 19.173773,
        "long" : -96.13422409999998 
    }
];
    
/*$scope permite introducir los datos al elemento*/    
    

  $scope.agregarDireccion = function(){
    $scope.cities.push({
      city: $scope.city,
      desc: $scope.desc,
      lat: $scope.lat,
      long: $scope.long
    });
    /* Vacía los campos que se cargaron*/
    $scope.city = ''
    $scope.desc = ''
    $scope.lat = ''
    $scope.long = ''
    
    
    $scope.initialise();
    
  }
  /* Función que remueve los registros guardados*/
  
  $scope.removeMarker = function(index){
    $scope.cities.splice(index, 1);
    $scope.initialise();


  }

    // Map Settings // // Carga el mapa //
$scope.initialise = function() {
        var myLatlng = new google.maps.LatLng(52.238983, -0.888509);
        var mapOptions = {
            center: myLatlng,
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // Geo Location /
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "My Location"
            });
        });
     // Carga las ciudades //
        $scope.map = map;
      console.log($scope.map,'this scope map');
        // Additional Markers //
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  //Recorre el arreglo de la localización de las ciudades//
        for (i = 0; i < $scope.cities.length; i++){
            createMarker($scope.cities[i]);
        }

    };
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise()); 






  });