import React,{useEffect} from "react";

const UserHomePage = (props) => {
    const currentUser = props.currentUser

    const BASE_URl = "https://strangers-things.herokuapp.com"
    const COHORT = "2209-FTB-ET-WEB-FT"

    async function handleDelete(postIdDelete){
        const response = await fetch(`${BASE_URl}/api/${COHORT}/posts/${postIdDelete}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data =  await response.json();
      if (data){
        


        const filteredPosts = currentUser.data.posts.filter(user => user._id !== postIdDelete);
        const copy = {...currentUser}
        copy.data.posts = filteredPosts
        props.setCurrentUser(copy)
        props.setGetPosts(filteredPosts)
      }
  
      }
    
    
    return (
        <>
        {currentUser.data ?
        <>
        <h2>Welcome {`${currentUser.data.username}`}!</h2>
        <div className="messageBox">
            <h3>Your Messages</h3>
            {currentUser.data.messages.length ? currentUser.data.messages.map((user) => {
                return (<div key={`${user._id}`} className="aMessage">
                    <p>From: {`${user.fromUser.username}`}</p>
                    <p>Regarding: {`${user.post.title}`}</p>
                    <p>{`${user.content}`}</p>
                </div>)} )
                : <p> You have no messages... </p> }

        </div>
        <div className="usersPosts">
            <h3>Your Current Postings</h3>
            {currentUser.data.posts.length ? currentUser.data.posts.map((user) => {
                if (user.active === true) {
                    return (
                <div key={`${user._id}`} className="aPost">
                    <p>{`${user.title}`}</p>
                    <p>{`${user.description}`}</p>
                    <p>{`${user.price}`}</p>
                    <p>{`${user.createdAt}`}</p>
                    <button onClick={() => handleDelete(user._id)}>Delete Post</button>
                </div>)
                } })
                             
                : <p> You have no posts... </p> }
        </div>
        </>
        : <h2>Please log in to view this page.</h2>
        }
        </>
    )

}

export default UserHomePage