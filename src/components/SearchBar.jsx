import React,{useState} from "react";

const SearchBar = (props) =>{
    const [searchInput, setSearchInput] = useState('')
    const getPosts = props.getPosts
    const setFilteredPost = props.setFilteredPost

    const handleSearch  = (e) => {
     //grab value from search
     //filter through getpost title, contains the letter
     //include method
     //does title contain searchinput
     // if return true else false
     //reset filtered post to new filteredpost array
     //back to post ternary
     //if filtered post has anything render that else render all post
        setSearchInput(e.target.value)
     if (!searchInput){
        return getPosts
      }else {
        let filteredPosts = getPosts.filter((post) => {
         if (post.title.toLowerCase().includes(searchInput.toLowerCase())){
         return post
         }
          
        })
        console.log(filteredPosts)
        return setFilteredPost(filteredPosts)
        
      }
      
    }
    


    function searchPosts(){
        if (!props.searchInput){
          return getPosts
        }else {
          let filteredPosts = getPosts.filter((post) => {
            console.log(post.title)
            return post.title.toLowerCase() === searchInput.toLowerCase()
          })
          return filteredPosts;
        }
      }

    return(
        <form id="searchBar">
            <input type="search"
            placeholder="Search Posts"  
            onChange={handleSearch} />
        </form>
    )
}

export default SearchBar;