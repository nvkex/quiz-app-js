const correctAnswers = ['B','A','C','C','C','B','B','C','A','A','C','C','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
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

    var percentage = Math.round(score*100/140);

    //Go to top
    scrollTo(0,0);

    //Show result section
    result.classList.remove('d-none');

    //Animate display percentage
    let out = 0;
    setTimeout(() =>{
        const timer = setInterval(() =>{
            result.querySelector('span').textContent = out +"%";
            if(out === score){
                clearInterval(timer);
            }
            else
                out++;
        },10);
    },1100);
    
});