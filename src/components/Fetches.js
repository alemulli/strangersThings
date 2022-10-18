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