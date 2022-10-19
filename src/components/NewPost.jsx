import react,{ useEffect}from "react";
import {newPost} from '../api'

const NewPost = () => {


    async function handleSubmit(e){
        e.preventDefault();

        console.log(e)
        const title = e.target[0].value
        const description = e.target[1].value
        const price = e.target[2].value
        const willDeliver = e.target[3].checked
        console.log(willDeliver)
        const makeNewPost = await newPost(title,description,price,willDeliver)

        

    }



    return (
        <form className="NewPost" onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" type='text' required />
            <label htmlFor="description">Description: </label>
            <input id="description" type='text' required />
            <label htmlFor="price">Price: </label>
            <input id="price" type='text' required />
            <label htmlFor="willDeliver">Will Deliver: </label>
            <input id="willDeliver" type='checkbox'/>
            <button type="submit">Submit</button>
        </form>

    )
}




export default NewPost