function qs(string) {
 let item = document.querySelector(string) 
return item;
}

function onTouch(btn, callback, param1, param2){
    btn.addEventListener('click', () => {
    callback(param1, param2);
    }); 
}


export {
     onTouch, 
    qs};