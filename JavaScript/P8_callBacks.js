// CallBack Function
//Event Queue
//Event Loop

function fetchData(callback) {
    setTimeout(() => {
        let data = 'data fetched';
        callback(data,null);
    }, 5000);

}

function handledData(data,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(data);
    }
}
console.log('start');
fetchData(handledData);