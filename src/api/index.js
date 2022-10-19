const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

export async function getPosts() {
    const response = await fetch(`${BASE_URl}/api/${COHORT}/posts`)
    const result = await response.json()
    const posts = result.data.posts

    return posts
}



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

export async function isLoggedIn(username,password){
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem('token',token)}`
        },
    }.then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);

    const response = await fetch (`${BASE_URl}/api/${COHORT}/users/me`,options)
    const result = await response.json()
    return result.data

}


export async function newPost(title,description,price,willDeliver){
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
                willDeliver
            }
        })
    }

    const response = await fetch (`${BASE_URl}/api/${COHORT}/posts`,options)
    const result = await response.json()
    return result.data

}