class Dictionary{
    /**
     * 
     * @param {string[]} words - Array of words to use in our dictionary
     */
    constructor(words){
        this.dictionary = words;
        console.log("Dictionary Loaded");
    }
    /**
     * 
     * @param {*} str The word you wish to look up in the dictionary 
     * @return {boolean} Returns true if the word was found
     */
    search(str){
        for(var i=0; i<this.dictionary.length; i++){
            if(str.toLowerCase().includes(this.dictionary[i])){
                console.log("Found Word: "+ this.dictionary[i]);
            }
        }
        return false;
    }
/**
 * This function deletes words out of the array which are too small or too large. This will make the loop faster as we wont be searching for invalid words. 
 * This should be done before the game is loaded as it will take a few seconds depending on the computer. S
 * @param {*} min - Min length of allowed words 
 * @param {*} max - Max length of allowed words
 */
    stripWords(min,max){
        console.log("Pruning Dictionary min:"+min + " max:"+max);
        for(var i = this.dictionary.length-1; i>=0; i--){ //Have to go backwards as we are going to delete from this array as we are going through it. 
            if(this.dictionary[i].length < min || this.dictionary[i].length > max){
                this.dictionary.splice(i,1);
            }
        }
        console.log("Done new word list length: " + this.dictionary.length);

    }
}