import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(data);

  const searchHandler = (e) => {  
    setSearchTerm(e.target.value);
    setSearchResult(data.filter(keyword => {
      if (
        (keyword.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (keyword.address).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (keyword.id).toLowerCase().includes(searchTerm.toLowerCase())) {
        return keyword;
      } 
    }))
  }

  return (
    <div className="App">
      <div className='search-card-with-input'>
        <input className='input-search-con' type="text" placeholder='Search users by ID, address, name..' onChange={searchHandler} />
        <section className='search-card'>
          {!searchResult.length && searchTerm !== '' && <p>No user found</p>}
          {searchResult.map(data => {
            return (
              <>
              <main className='search-card-con' key={data.id}>
                <div className='id'>{data.id}</div>
                <div className={`${searchResult.name ? 'search-name' : 'name'}`} >{data.name}</div>
                <div className='address'>{data.address}</div>
              </main>
              <div className='divider'></div>
              </>
            )
        })}
        </section>
      </div>
    </div>
  );
}

export default App;
