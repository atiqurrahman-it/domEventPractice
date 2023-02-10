
// ---------------------- 
let assignNewContentPosition=document.getElementById('container')

let btnAdd=document.getElementById('btnAdd')
btnAdd.addEventListener('click', ()=>{
    let assignNewContent=document.getElementById('new-content');
    // create a new element  (p tag)
    let newContent=document.createElement('p')
    //set the text of innerText of the p tag 
    newContent.innerText=assignNewContent.value
    assignNewContentPosition.appendChild(newContent)
    // clear the text area 
    assignNewContent.value=''; 

})

// --------------------------------- background color change ------------------

// option 1
{/* <button onclick="document.body.style.backgroundColor='yellow'">Yellow</button> */}
// option 2
function changeColor(){
    document.body.style.backgroundColor='red'
    document.body.style.color='white'
}

// option 3

let btnBg=document.getElementById('bg-btn')
btnBg.onclick=changeBackground

function changeBackground(){
    document.body.style.backgroundColor='blue';
}
// option 3 another way 

let blackBg=document.getElementById('black-btn')
blackBg.onclick=function changeBackground(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
}

// best way 
// option 4 

let pinkBtn=document.getElementById('pink-btn')
// pinkBtn.addEventListener('click', function(){
// })

// pinkBtn.addEventListener('click', function bgColor(){
// })


// pinkBtn.addEventListener('click', functionName )

pinkBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor='pink';
    document.body.style.color='black'
})


//-----------------------------------------

let input=document.getElementById('inputText')
let setInputText=document.getElementById('setInputText')

input.addEventListener('keyup',function(event){
    // console.log(event);
    // console.log(event.target);
    console.log(event.target.value);
    let value=event.target.value
    setInputText.innerText=value
})



