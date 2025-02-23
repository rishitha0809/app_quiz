const quizData=[
    
    {
     question:"1. Which country gifted the 'Statue of Liberty' to USA in 1886?",
       
           a:"France",
           b:"Canada",
           c:"Brazil",
           d:"England",
            correct:"a",
        
    },
   {
    question:"2. In which ocean 'Bermuda Triangle' region is located?",
       
            a:"Atlantic",
           b:"Indian",
            c:"Pacific",
            d:"Arctic",
            correct:"a",
        
   },
   
   {
    question:"3. Which country is known as the 'Land of Rising Sun'?",
        
            a:"Japan",
            b:"New Zealand",
            c:"Fiji",
            d:"China",
        correct:"a",
   },
   {
    question:"4. Which Plateau is known as the 'Roof of the World'?",
       
           a:"Andes",
            b:"Himalaya",
            c:"Karakoram",
           d:"Pamir",
            correct:"d",
        
   },
   
    
    
    {
    question:"5. What is the capital of Canada?",
       
           a :"Toronto",
           b :"Montreal",
           c :"Ottawa",
           d:"Vancouver",
        correct:"c",
    },
    {
    question:"6. Nobel Peace Prize is awarded in the city?",
       
            a:"Oslo",
           b :"Bern",
            c:"Lisbon",
            d:"Berlin",
        correct:"a",
    },
    {
     question:"7. 'Yen' is the currency of which country?", 
         
           a :"South Korea",
            b:"North Korea",
            c:"Malaysia",
            d:"Japan",
     correct:"d",
    },
    {
     question:"8. International Woman's Day is celebrated on",
         
            a:"2nd January",
          b :"5th April",
            c:"8th March",
d:"15th September",
    correct:"c",
    },
    
    {
     question:"9. Where the 'International Court of Justice' headquarters is located?",
        
           a:"Amsterdam",
           b :"Washington",
           c :"Berlin",
           d:"The Hague",
correct:"d",
    },
    
    {
     question:"10. How many countries were participated as founding member of United Nation?",
        
            a:"45",
            b:"50",
            c:"51",
            d:"75",
        correct:"c",
    }
    
];
const quiz=document.getElementById("quiz");
const resultEle=document.getElementById("result");

const answerEls=document.querySelectorAll('.answer');
const labelEls=document.querySelectorAll('.op_label');
const questionEle=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");

const nextBtn=document.getElementById("next");
const submitBtn=document.getElementById("submit"); 
const scoreEle=document.getElementById("score"); 

let currentQtn=0;
let answered=0;

let submitted = false;

let userSelected={

}

loadQuiz();

function loadQuiz(){
      questionEle.innerText=quizData[currentQtn].question;
      a_text.innerText=quizData[currentQtn].a;
      b_text.innerText=quizData[currentQtn].b;
      c_text.innerText=quizData[currentQtn].c;
      d_text.innerText=quizData[currentQtn].d;
      deSelectAnswer();
      

      if(currentQtn==quizData.length-1){
       
       nextBtn.style.display="none";
       submitBtn.style.display="block";
       
       
      }
      




}
function deSelectAnswer(){
       answerEls.forEach(
              (answerEle)=>{
                     answerEle.checked=false;
              }
           )
}

nextBtn.addEventListener(
    'click',()=>{
       let answer=getSelected();
       
       if(answer){
              if(answer==quizData[currentQtn].correct){
              answered++;
              
              }
              currentQtn++;
              if(currentQtn<quizData.length){
                     loadQuiz();
              }
       }
       
       }

    
)



submitBtn.addEventListener(
'click',()=>{
       if(getSelected()){
              let answer=getSelected();
       
       if(answer){
              if(answer==quizData[currentQtn].correct){
              answered++;
              
              }
       } 

              submitted=true;
              quiz.style.display="none";
              resultEle.style.display="block";
              scoreEle.innerText="You scored "+answered+" out of "+quizData.length+" !";
       }
}
)



function getSelected(){
    let answer;
    answerEls.forEach(
       (answerEle)=>{
              if(answerEle.checked){
                     answer=answerEle.id;
                     userSelected[currentQtn]= answer;
              }
       }
    )
    return answer;
    
    
}

