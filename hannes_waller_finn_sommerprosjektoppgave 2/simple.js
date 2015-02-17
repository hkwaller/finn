var fs = require('fs')
var words = fs.readFileSync('./words.txt', 'utf8').split('\n');

function findAnagrams(words) {
    var results = [];
    words.sort()
    
    var letterSortedWords = words.map(insertionSort)
    
    for (var i = 0; i < words.length; i++) {
        results.push({ word: words[i], anagrams: []});

        for (var j = 0; j < words.length; j++) {
            if (letterSortedWords[i] === letterSortedWords[j] && words[i] !== words[j]) {
                results[i].anagrams.push(words[j]);
            }
        }        
    }
    
    return results
}

function insertionSort(word) {
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


console.time('findAnagrams')
var anagrams = findAnagrams(words);
console.timeEnd('findAnagrams')
console.log(anagrams)


    
    