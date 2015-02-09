app.controller('AnagramFinderCtrl', function($scope, $http, wordService) {
    this.results = [];
    
    wordService.getData('../words.txt').then(function (words) {
        $scope.words = words;
    });

    this.findAnagrams = function() {
        this.results = [];

        var wordsToSearch = $scope.words.split(" ");
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
    
    var insertionSort = function(word) {
        var value, i, j;
        var arr = word.split('');
    
        for (i = 0; i < word.length; i++) {
            value = arr[i];
            for (j = i - 1; j > -1 && arr[j] > value; j--) arr[j + 1] = arr[j];
            arr[j + 1] = value;
        }
        
        return arr.join('');
    }
});