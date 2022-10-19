import react,{ useEffect}from "react";
import {newPost} from '../api'
import {useNavigate} from 'react-router-dom';

const NewPost = () => {
const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        console.log(e)
        const title = e.target[0].value
        const description = e.target[1].value
        const price = e.target[2].value
        const location = e.target[3].value
        const willDeliver = e.target[4].checked
        const makeNewPost = await newPost(title,description,price,location,willDeliver)

        navigate("/Posts")

    }



    return (
        <form className="NewPost" onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" type='text' required />
            <label htmlFor="description">Description: </label>
            <input id="description" type='text' required />
            <label htmlFor="price">Price: </label>
            <input id="price" type='text' required />
            <label htmlFor="location">Location: </label>
            <input id="location" type="text" />
            <label htmlFor="willDeliver">Will Deliver: </label>
            <input id="willDeliver" type='checkbox'/>
            <button type="submit">Submit</button>
        </form>

    )
}




export default NewPost