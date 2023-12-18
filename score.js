 const p1btn=document.querySelector('#p1btn');
 const p2btn=document.querySelector('#p2btn');
 const p1Display=document.querySelector('#p1display');
 const p2Display=document.querySelector('#p2display');
 const reset=document.querySelector('#rst');
 const win_score_select=document.querySelector('#playupto');
 let p1scr=0;
 let p2scr=0;
 let win_score=5;
 let isGameOver=false;
 p1btn.addEventListener('click',function(){
    if(!isGameOver){
    p1scr+=1;
    if(p1scr===win_score){
        isGameOver=true;
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        p1btn.disabled=true;
        p2btn.disabled=true;
    }
    p1Display.innerText=p1scr; //textContent also can use
    }  
 })
 p2btn.addEventListener('click',function(e){
    if(!isGameOver){
        p2scr+=1;
        if(p2scr===win_score){
            isGameOver=true;
            p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        p1btn.disabled=true;
        p2btn.disabled=true;
        }
        p2Display.innerText=p2scr; //textContent also can use
        } 

 })
 win_score_select.addEventListener('change',function(){
    win_score=parseInt(this.value);  //parstInt covert string to integer
 })

 reset.addEventListener('click',function(){
    p1scr=0;
    p2scr=0;
    isGameOver=false;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1btn.disabled=false;
    p2btn.disabled=false;


 })