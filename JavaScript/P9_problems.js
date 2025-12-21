//Problems - Callback Hell ,  Pyramid of Doom

asyncOperation1(arg1, (result) =>{
    asyncOperation2(result1 , (result2)=>{
        asyncOperation3(result2, (result3)=>{
            //more nested callbacks
            asyncOperation4(result3,
                (result4)=>{
                    //And So on....
                }
            );
        });
    });
});

//promises is solution
