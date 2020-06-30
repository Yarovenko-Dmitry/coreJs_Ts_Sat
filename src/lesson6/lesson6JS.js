console.log('lesson6 works');

// const verifyUser = function(username, password, callback){
//     dataBase.verifyUser(username, password, (error, userInfo) => {
//         if (error) {
//             callback(error)
//         }else{
//             dataBase.getRoles(username, (error, roles) => {
//                 if (error){
//                     callback(error)
//                 }else {
//                     dataBase.logAccess(username, (error) => {
//                         if (error){
//                             callback(error);
//                         }else{
//                             callback(null, userInfo, roles);
//                         }
//                     })
//                 }
//             })
//         }
//     })
// };



function sayHello(data) {
    console.log(`Hello, my name is ${data.name}, i have ${data.childrenCount} children , and ${data.mood}`)
}

const serverResponse = {
    name: {
        1: 'Petia',
    },
    childrenCount: {
        'Petia': 10,
    },
    mood: {
        10: `I'm fine`
    },
}

function getUserInfo(id, handler) {
    setTimeout(() => {
        handler(id)
    }, 500)
}

function getName(id, handler) {
    setTimeout(() => {
        const name = serverResponse.name[id];
        handler({name})
    }, 1000)
}

function getChildren(data, handler) {
    setTimeout(() => {
        const childrenCount = serverResponse.childrenCount[data.name];
        handler({...data, childrenCount})
    }, 300)
}

function getMood(data, handler) {
    setTimeout(() => {
        const mood = serverResponse.mood[data.childrenCount];
        handler({...data, mood})
    }, 1500)
}

getUserInfo(1, (data) => {
    getName(data, (data) => {
        getChildren(data, (data) => {
            getMood(data, (data) => {
                sayHello(data)
            })
        })
    })
});


(function (num, handler) {
    setTimeout(() => {
        num += 1;
        handler(num)
    }, 1000)
})(1, (num) => {
    (function (num, handler) {
        setTimeout(() => {
            num += 1
            handler(num)
        }, 1500)
    })(num, (num) => {
        (function (num, handler) {
            setTimeout(() => {
                num += 1
                handler(num)
            }, 300)
        })(num, (num) => {
            (function (num, handler) {
                setTimeout(() => {
                    num += 1
                    handler(num)
                }, 1000)
            })(num, (num) => {
                console.log(num)
            })
        })
    })
})


function addNum(num) {
    const delay = Math.random() * 3000;
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num += 1)
        }, delay)
    })
}

function getSomeNumFromDifferentServer(start) {
    return addNum(start)
        .then((res) => {
                return addNum(res)
                    .then((res) => {
                            return addNum(res)
                                .then(res => {
                                        return addNum(res)
                                            .then(res => addNum(res))
                                    }
                                )
                        }
                    )
            }
        )
}

getSomeNumFromDifferentServer(1).then(console.log)
