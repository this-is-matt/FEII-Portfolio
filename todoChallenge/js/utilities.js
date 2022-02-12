function qs(string) {
 let item= document.querySelector(string) 
    console.log(item);
return item;
}

function onTouch(string, callback, param1, param2){
    string.addEventListener('click', () => {
    callback( param1, param2);
    }); 
}


export {
     onTouch, 
    qs};