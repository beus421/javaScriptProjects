function clicked(){
    let text = document.getElementsByTagName('textarea')
    // console.log(text[0].value);
    let lst = document.getElementsByClassName('todoItems')
    let newElement = document.createElement('li')
    newElement.textContent = text[0].value
    lst[0].appendChild(newElement)
    // console.log(lst[0]);
    
}
function clickedR(){
    
    let lst = document.getElementsByClassName('todoItems')
    
    console.log(lst[0].childElementCount)

    if(lst[0].childElementCount != 0){
        let last = lst[0].lastChild
        lst[0].removeChild(lst[0].lastChild)
    }
   
}