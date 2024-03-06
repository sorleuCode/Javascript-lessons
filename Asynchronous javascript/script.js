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
//     setTimeout(() =>  { return {user: username}}, 2000);
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



// async and await

// example1
const myUSers = {
    userList: []
}

const myFoolFunc = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const fetchJson = await response.json();
//    console.log(fetchJson);
}

const anotherFn = async () => {
    const data = await myFoolFunc();
    myUSers.userList = data;
    console.log(myUSers.userList);

}

anotherFn()
// console.log(myUSers.userList);

// example 2
const getAllUsersEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);

    const email = fetchJson.map((user) => {
        return user.email;
    })
    console.log(email)
 }

getAllUsersEmails();

const getAllUsersNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);

    const oyee = fetchJson.map((joy) => {
        return joy.username;
    })
    console.log(oyee);
 }

 getAllUsersNames();


//  try, catch and finally block

// SYNTAX

 try {

 } catch (err) {

 }finally {

 }


//  example

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Error:", error.message)
    }
}

getData()
.then((data) => console.log("data:", data)).catch((error) => console.log("Error:", error.message))


const fetchDataWithError = async () => {
    try {
        console.log('Fetching Data...')
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error ('Failed to fetch data, ori e baje')
        }
        const $data = await res.json();
        return $data;

    }catch (error) {
        console.log('Error:', error.message)
    }
}

fetchDataWithError()
.then((result) => {
    if(result) {
        console.log("Data", result)
    }
})

// class work //getting each user's details

const getAUserDetails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);
    let eachDetail;      
    const userdetails = [];
    for (let i = 0; i < fetchJson.length; i++){
        userdetails.push([fetchJson[i].name, fetchJson[i].username, fetchJson[i].email])
    } 

    console.log(userdetails);
 }

 getAUserDetails();



// another ways
 const fetchSingleData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if(!response.ok) {
        throw new Error('Not found will fixed soon')
      }
      
      const [userData] = await response.json() // assuming data is an array of user
      const {username, email, name} = userData;
      return {username, email, name};
  
    }catch (error) {
      console.log('Error:', error.message)
    }
  }
  fetchSingleData().then(({username, email, name}) => {
    console.log('Username:', username)
    console.log('Email:', email)
    console.log('Name:',name)
  })

//   getting the details of all the 10 users

const fetchAlluserData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if(!response.ok) {
        throw new Error('Not found, will fixed soon')
      }
      
      const userData = await response.json() // assuming data is an array of user
      const mappedData = userData.map(({username, email, name, address, company}) => {
        address = address['street'];
        company = company['name']
      return {username, email, name, address, company}
      })
      console.log(mappedData)
      
    }catch (error) {
      console.log('Error:', error.message)
    }
  }
  fetchAlluserData();


//   Another ways
  
// const fetchAlluserDatas = async () => {
//     try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
//       if(!response.ok) {
//         throw new Error('Not found, will fixed soon')
//       }
      
//       const userData = await response.json() // assuming data is an array of user
//       const mappedData = userData.map(({id, username, email, name, address, phone, website, company}) => 
       
//       console.log(mappedData)
      
//     }catch (error) {
//       console.log('Error:', error.message)
//     }
//   }
//   fetchAlluserDatas();


//   mathematicaL METHODS

