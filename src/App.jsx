

const Search = () => {
  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" onChange={handleChange} type="text" />
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
  
  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <Search />
        <hr />

        <List list={stories} />
      </div>
    </>
  )
}

export default App
