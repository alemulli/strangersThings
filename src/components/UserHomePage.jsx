import React from "react";

const UserHomePage = (props) => {
    const currentUser = props.currentUser


    return (
        <>
        {props.isLoggedIn ?
        <>
        <h2>Welcome {`${currentUser.data.username}`}!</h2>
        <div className="messageBox">
            <h3>Your Messages</h3>
            {/* here we can map over the messages in /me api */}
        </div>
        <div className="usersPosts">
            <h3>Your Current Postings</h3>
            {/* here we can map over the users posts and include the edit/delete buttons for each */}
        </div>
        </>
        : <h2>Please log in to view this page.</h2>
        }
        </>
    )

}

export default UserHomePage