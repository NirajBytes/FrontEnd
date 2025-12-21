//promise is object which is representingthe state

// 1. pending
// 2.fulfilled
// 3.rejected 

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data fetched');

        }, 5000)
    })

}

// getData()
//     .then(result => {
//         console.log(result);

//     })
//     .catch(error =>{

//         console.error(error);
//     })

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
fetchData();