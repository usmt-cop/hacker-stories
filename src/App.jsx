import React from 'react'

const Search = (prop) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" onChange={prop.change} type="text" />
      <p>
        The search term is : {prop.term}
      </p>
    </div>
  )
}

const Item = (object)=> {
  const item = object.item
  return (
    <div>
      <span>{item.title}</span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
    </div>
  )
}

const List = (prop)=> {
  return (
    <ul>
      {prop.list.map((item) => {
        return (
          <li key={item.objectID}>
          <Item item={item} />
          </li>
        )
      })}
    </ul>
  )
}
const Button = (prop) => {
  return (
    <div>

      <div>
        <button onClick={prop.decremnet}>
          decrement
        </button>
        <button>{prop.state}</button>
        <button onClick={prop.increment}>
          increment
        </button>
      </div>
      <div>
        <button onClick={prop.decremnet}>
          decrement
        </button>
        <button>{prop.state}</button>
        <button onClick={prop.increment}>
          increment
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  
  const [counter, setCounter] = React.useState(0)
  const incrementHandle = () => {
    setCounter(counter + 1)
  }
  const decrementHandle = () => {
    setCounter(counter - 1)
  }
  
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const searchedStories = stories.filter(
    function (story) {
      return story.title.includes(searchTerm)
    }
  );
  
  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <Search term={searchTerm} change={handleChange} />
        <hr />

        <List list={searchedStories} />
        <Button state={counter} increment={incrementHandle} decremnet={decrementHandle} />
      </div>
    </>
  )
}

export default App
