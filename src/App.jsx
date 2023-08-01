import React from 'react'

const welcome = {
  greeting: 'Hey',
  title: 'React',
};
  
function dummyName(a) {
  return 'dummyName' + ' ' + a;
}
  
function App() {
  return (
    <>
      <div>
        <h1>{welcome.greeting}, {welcome.title}, {dummyName('usmt-cop')}</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

      </div>
    </>
  )
}

export default App
