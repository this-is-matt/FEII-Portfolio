function readFromLS(key){
    return localStorage.getItem(key);
};

function writeToLS(key, data){
    localStorage.setItem(key, JSON.stringify(data));
};
export {readFromLS, writeToLS};