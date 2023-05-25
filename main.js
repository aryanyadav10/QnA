//Traversing the DOMS
/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const ques = e.currentTarget.parentElement.parentElement
        ques.classList.toggle('show-text');
    });
}); */

const questions = document.querySelectorAll('.question');

questions.forEach((ques) => {
    const btn = ques.querySelector('.question-btn');
    btn.addEventListener('click',()=> {
        questions.forEach(function (item) {
            if(item !== ques){
                item.classList.remove('show-text');
            }
        });
        ques.classList.toggle('show-text');
    });
});