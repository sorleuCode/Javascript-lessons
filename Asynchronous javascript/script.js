// const interval = setInterval(() => console.log("Hello world"), 1000);
// clearInterval(interval); // used to clear the interval counting

// const myInterval = setTimeout(() => console.log("Hello world"), 10000); // this delay the execution of the code till after 10000 milliseconds i.e 10secs
// console.log(myInterval);


// SYNCHRONOUS JAVASCRIPT: code execution occurs line-by-line and the task complete sequentially
const functionOne = () => {
    console.log("function one");

    functionTwo();
    console.log("function one, part two")
}

const functionTwo = () => { setTimeout(() => console.log("function two"), 2000)};
functionOne();

// CALLBACK FUNCTION

// const fetchUser = (username) => { 
//     setInterval(() =>  { return {user: username}}, 2000);
// }
// const user = fetchUser("test");
// console.log(user);



// continuation of asynchronous javascript:

const fetchUserOne = (username, callback) => {
    setTimeout(() => {
        console.log("now we have the user"); 
        callback({user: username})}, 2000);
}

const user2 = fetchUserOne("test", (user2) => {console.log(user2);
});

// CALLBACK HELL

const fetchUserTwo = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have a user");
        callback({username});
    }, 2000);
}

// const fetchUserPhotos = (username, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photo for ${username}`);
//         callback(["photo1", "photo2"])
//     }, 2000);
// }

// const fetchUserPhotoDetails = (photos, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photos details ${photos}`);
//         callback("details");
//     }, 2000);
// }

// const user3 = fetchUserTwo("Michael", (user) => {
//     console.log(`Your name is: ${user.username}`);
//     fetchUserPhotos(user.username, (userPhotos) => {
//         console.log(`You photos are: ${userPhotos}`);
//         fetchUserPhotoDetails(userPhotos[0], (details) => {
//             console.log(`Your photo details are: ${details}`);
//         });
//     });  

// });

// This is called callback Hell. it becomes unreadable

const user4 = fetchUserTwo("Michael", (user) => {
    fetchUserPhotos(user.username, (userPhotos) => {
        fetchUserPhotoDetails(userPhotos[0], (details) => {
            fetchUserPhotoDetails(userPhotos[0], (details) => {
                fetchUserPhotoDetails(userPhotos[0], (details) => {
                    fetchUserPhotoDetails(userPhotos[0], (details) => {
                        console.log(details);
                    })
                });
            })
        })
    })
})

// PROMISE

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Now we are in Promise");
        resolve({username: "Bode"})
        reject("User not Found")
    }, 5000)
});
promise
.then((user) => console.log(user.username))
.catch((error) => console.log(error));


const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("we are using Promise");
        resolve(username)
    }, 4000);
    })
}

const fetchUserPhotos = (username) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("we have the photos");
        resolve(["photo1", "photo2"])
    }, 4000);
    })
}

const fetchUserDeatails = (photo) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Now we have the photo details");
        resolve("details");
    }, 4000);
    })
}

fetchUser("Zainab")
.then((user) => fetchUserPhotos (user))
.then((photos) => fetchUserPhotos(photos[0]))
.then((details) => console.log(details))








