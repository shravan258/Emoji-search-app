import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import './app.css';
import EmojiData from './emoji.json';

function App() {
  const [searchdata, setsearchdata] = useState('');
  const [resultList, setresultList] = useState([]);

  const searchEmoji = () => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(searchdata.toLowerCase())
    );
    console.log(newData);
    setresultList(newData);
  };
  useEffect(() => {
    searchEmoji();
  }, [searchdata]);
  return (
    <div>
      <h1 className='emoji-title'>Emoji search app</h1>
      <input
        type='text'
        className='search-box'
        value={searchdata}
        onChange={(e) => setsearchdata(e.target.value)}
      />
      <button className='btn btn-dark search-btn' onClick={searchEmoji}>
        <SearchIcon />
      </button>

      <div className='row card-container'>
        {resultList.map((emoji) => (
          <div className='col-md-6  card emoji-card '>
            <h4 style={{ color: '#fff' }}>
              {emoji.symbol} <span>{''}</span> {emoji.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
