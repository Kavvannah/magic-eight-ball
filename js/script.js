function path() {
    
    let randoNumber = Math.floor(Math.random() *7);

        // img array
        return  randoNumber === 1? "/img/magi1.png"
        :       randoNumber === 2? "/img/magi2.png"
        :       randoNumber === 3? "/img/magi3.png"
        :       randoNumber === 4? "/img/magi4.png"
        :       randoNumber === 5? "/img/magi5.png"
        :       randoNumber === 6? "/img/magi6.png"
        :       randoNumber === 7? "/img/magi7.png"
        : console.log('Error Occured: Something wrong with path()')
        // img array end
    }
        
