// This is to practice JavaScript

const ranNum = Math.floor(Math.random()*10 + 1);              // Any random number between 1, as signified by the '+ 1' and 10, as signified by the '* 10'. 
    const numGen = (num, ranNum) => {                       // Normally the random number is between 0 and 0.1
        while (num != ranNum);
        console.log(numGen())};
    console.log(ranNum);

const numberPrompt = () => {
    alert (ranNum);
}