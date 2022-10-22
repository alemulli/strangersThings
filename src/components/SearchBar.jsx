import React,{useEffect, useState} from "react";

const SearchBar = (props) =>{
    const [searchInput, setSearchInput] = useState('')
    const getPosts = props.getPosts
    const setFilteredPost = props.setFilteredPost

    useEffect(()=>{if (!searchInput){
        setFilteredPost([])
      }else {
        let filteredPosts = getPosts.filter((post) => {
         return post.title.toLowerCase().includes(searchInput.toLowerCase())
        })

        setFilteredPost(filteredPosts)
        
      }},[searchInput])
    const handleSearch  = (e) => {
        setSearchInput(e.target.value)
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