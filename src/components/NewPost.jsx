import {newPost} from '../api'
import {useNavigate} from 'react-router-dom';

const NewPost = (props) => {
const navigate = useNavigate()
const setGetPosts = props.setGetPosts

    async function handleSubmit(e){
        e.preventDefault();
        const title = e.target[0].value
        const description = e.target[1].value
        const price = e.target[2].value
        const location = e.target[3].value
        const willDeliver = e.target[4].checked
        const makeNewPost = await newPost(title,description,price,location,willDeliver)
        setGetPosts([...props.getPosts, makeNewPost.post])

        navigate("/")
    }

    return (
        <div className="submissionFormContainer">
        {props.isLoggedIn ?
            <form className="submissionForm" onSubmit={handleSubmit}>
                <h3>Make a New Post</h3>
                <label htmlFor="title">Title: </label>
                <input id="title" type='text' required />
                <label htmlFor="description">Description: </label>
                <input id="description" type='text' required />
                <label htmlFor="price">Price: </label>
                <input id="price" type='text' required />
                <label htmlFor="location">Location: </label>
                <input id="location" type="text" />
                <span>
                <label htmlFor="willDeliver">Will Deliver: </label>
                <input id="willDeliver" type='checkbox'/>
                </span>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        : <h2>Please log in to make a posting.</h2>
        }
        </div>
    )
}

export default NewPost