const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

//get request for fetching all posts//

export async function fetchPosts() {
    try {
      const fetchedPosts = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
      );
      const posts = await fetchedPosts.json();
      const postsData = posts.data.posts;
      return postsData;
    } catch (err) {
      console.error(err);
    }
  }

  //post request for new user//
export async function RegisterUser(username,password){
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }

    const response = await fetch (`${BASE_URl}/api/${COHORT}/users/register`,options)
    const result = await response.json()

    if (result.error) {
        alert("Account is already registered. Please log in.")
    }

    return result.data

}

//post request for logging in//
export async function LogIn(username,password){
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    

    const response = await fetch (`${BASE_URl}/api/${COHORT}/users/login`,options)
    const result = await response.json()

    if (result.error) {
        alert("Username not found. Please register a new account.")
    }

    return result.data

}

// unused function - we should delete//
// export async function isLoggedIn(username,password){
//     const options = {
//         method:"POST",
//         headers: {
//             "Content-Type":"application/json",
//             "Authorization": `Bearer ${localStorage.getItem('token',token)}`
//         },
//     }.then(response => response.json())
//       .then(result => {
//         console.log(result);
//       })
//       .catch(console.error);

//     const response = await fetch (`${BASE_URl}/api/${COHORT}/users/me`,options)
//     const result = await response.json()
//     return result.data

// }

// get request for currently logged in user data//
export async function currentUserInfo(token){
    const options = {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    }

    const response = await fetch (`${BASE_URl}/api/${COHORT}/users/me`,options)
    const result = await response.json()
    return result
}

//Post request for making a new post
export async function newPost(title,description,price,location,willDeliver){
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
             "Authorization": `Bearer ${localStorage.getItem('token')}`
        },body: JSON.stringify({
            post: {
                title,
                description,
                price,
                location,
                willDeliver
            }
        })
    }

    const response = await fetch (`${BASE_URl}/api/${COHORT}/posts`,options)
    const result = await response.json()
    return result.data

}
