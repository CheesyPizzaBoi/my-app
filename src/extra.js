import React from 'react';
import ReactDOM from 'react-dom';




export default function Hello() {
  




  const listOfPosts = [
    {
      Name: 'Jackson Mitchell',
      blogPost: 'My pet was very amazing.'
    },
    {
      Name: 'Shanelle',
      blogPost: 'My pet was very amazing.'
    },
    {
      Name: 'John Mockinson',
      blogPost: 'My pet was very amazing.'
    },
    {
      Name: 'Carlos Avelar',
      blogPost: 'My pet was very amazing.'
    },
  ]
  
  

  const PostList = (props) => {
    return (
      <div>
        <h1>{props.personName}</h1>
        <h1>{props.blog}</h1>
      </div>
    )
  }
  
  
  return (
    <div>
      <PostList
        personName={listOfPosts[0].Name}
        blog={listOfPosts[0].blogPost}
      />
      <PostList
        personName={listOfPosts[1].Name}
        blog={listOfPosts[1].blogPost}
      />
      <PostList
        personName={listOfPosts[2].Name}
        blog={listOfPosts[2].blogPost}
      />
      <PostList
        personName={listOfPosts[3].Name}
        blog={listOfPosts[3].blogPost}
      />
    </div>
  )
}



ReactDOM.render(<Hello />, document.getElementById('root'));