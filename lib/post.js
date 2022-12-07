export const getPosts = async (limit) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  const data = await res.json();

  return data;
};

export const getPostIds = async (limit) => {
  const posts = await getPosts(limit);

  return posts.map(post => ({
    params: {
      id: `${post.id}`,
    }
  }))
};

export const getPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};