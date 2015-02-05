var app = angular.module('FinnApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': 'A400', 
    })
    .accentPalette('red', {
      'default': '500' 
    });
});

app.controller('AnagramFinderCtrl', function($scope, $mdBottomSheet) {
    
    this.words = 'alt med altfor mor andre navn at ned bar nede bra niste bry ord byr ordet dem rad den rette denne ristet dra rod drev rokk drikke rom dro rå ende sen enden sitter engang skinte ens steinhelle etter stien gangen stuen gift støl gikk suten gilde søsteren hellestein søstrene hun ta hus tolv kisten torde krok truet lovt turte lysnet vann lysten år løst ';
    
    this.findAnagrams = function() {
        this.results = [];

        var wordsToSearch = this.words.split(" ");
        wordsToSearch.sort();
        
        for (var i = 0; i < wordsToSearch.length; i++) {
            this.results.push({ word: wordsToSearch[i], anagrams: []});        
            for (var j = 0; j < wordsToSearch.length; j++) {
                if (insertionSort(wordsToSearch[i]) === insertionSort(wordsToSearch[j]) && wordsToSearch[i] !== wordsToSearch[j]) {
                    this.results[i].anagrams.push(wordsToSearch[j]);
                }
            }        
        }      
    }; 
    
    this.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
          templateUrl: 'templates/bottom-sheet.html',
          controller: 'GridBottomSheetCtrl',
          targetEvent: $event
        });
      };
        
    var insertionSort = function(word) {
        var value, i, j;
        var arr = word.split('');
    
        for (i = 0; i < word.length; i++) {
            value = arr[i];
            for (j = i - 1; j > -1 && arr[j] > value; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = value;
        }
        
        return arr.join('');
    }
});

app.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'LinkedIn', icon: '../img/linkedin_r.svg' },
    { name: 'E-mail', icon: '../img/email_r.svg' }
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});