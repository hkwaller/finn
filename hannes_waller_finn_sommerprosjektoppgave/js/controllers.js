app.controller('AnagramFinderCtrl', function($scope, wordService) {
    this.results = [];
    
    wordService.getData('words.txt').then(
        function (words) {
            $scope.words = words;
        },
        function(error) {
            console.log(error);
        }
    );
    
    this.findAnagrams = function() {
        var start = new Date().getMilliseconds();
        this.count = 0;
        this.results = [];
        var wordsToSearch = $scope.words.split("\n");
        wordsToSearch.sort();
    
        var letterSortedWords = wordsToSearch.map(insertionSort)

        for (var i = 0; i < wordsToSearch.length; i++) {
            this.results.push({ word: wordsToSearch[i], anagrams: []});

            for (var j = 0; j < wordsToSearch.length; j++) {
                if (letterSortedWords[i] === letterSortedWords[j] && wordsToSearch[i] !== wordsToSearch[j]) {
                    this.results[i].anagrams.push(wordsToSearch[j]);
                    this.count++;
                }
            }        
        }
        var end = new Date().getMilliseconds();
        
        this.time = end - start;
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