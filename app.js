const correctAnswers = ['B','A','C','C','C','B','B','C','A','A','C','C','A','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    var userAnswers = [];
    var inp = document.getElementsByTagName('input');
    
    //Get all the checked answers from input elements.
    for(var i = 0;i<inp.length-1;i++){
        if(inp[i].checked)
            userAnswers.push(inp[i].value);
    }

    //Check for correct answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index])
            score += 10;
    });
    console.log(score);
});