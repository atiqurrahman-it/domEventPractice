let assignNewContentPosition=document.getElementById('container')


let btnAdd=document.getElementById('btnAdd')
btnAdd.addEventListener('click', ()=>{
    let assignNewContent=document.getElementById('new-content');
    let newContent=document.createElement('p')
    newContent.innerText=assignNewContent.value
    assignNewContentPosition.appendChild(newContent)
    assignNewContent.value=''; // data reset

})


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




