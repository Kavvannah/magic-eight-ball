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
        : console.log('Error Occurred: Something wrong with path()')
        // img array end
    }

    // empty alert
    function alertResponse() {
        const ask = document.getElementById('question').value;
        console.log(ask)

            if (ask=="" || ask.indexOf("?")<0){
            alert('Do not be afraid, ask your question')
            }
            else{
                document.getElementById("ball").setAttribute("src","/img/14-142815_magic-eight-ball-magic-8-ball-background.png")
            }
    }
    //end of empty alert
        
