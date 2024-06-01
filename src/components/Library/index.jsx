import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import avatar from '../../assets/avatar.png';
import "./styles.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardBook } from '../CardBook';
import { AddNewBookModal } from '../AddNewBookModal';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';


export function Library() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);



  useEffect(() => {
    axios.get('http://localhost/backend/list.php')
      .then(response => {
        const responseData = response.data;

        // Assuming the response data is a string and we need to remove the initial non-JSON part
        const jsonStartIndex = responseData.indexOf('{');
        const jsonString = responseData.substring(jsonStartIndex);

        // Parse the JSON string
        const data = JSON.parse(jsonString);

        // Extract the "results" field
        const results = data.results;
        setBooks(results)
        setFilteredBooks(results);
      })
      .catch(error => {
        // Handle any errors
        console.error('There was an error!', error);
      });
  }, [])


  const handleSearch = () => {
    const filtered = books.filter(book => {
      const values = Object.values(book);
      for (let value of values) {
        if (typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    setFilteredBooks(filtered);
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilteredBooks(books); // Reset filtered books to all books
  };

  return (
    <div className='libraryContainer'>
      <div className='userContainer'>
        <Avatar alt="Vanessa Silva" src={avatar} sx={{
          width: '7.625rem',
          height: '7.625rem',
          fontSize: '4rem',
        }} />
        <div className='userInfo'>
          <div className='userName'> Vanessa Silva</div>
          <div className='userAcesoo'> Acesso: adm</div>
          <AddNewBookModal />

        </div>
      </div>
      <div className='Title'> Biblioteca</div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1px',
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          placeholder="Busque o livro pelo título, editora, autor ou ano"
          sx={{ width: '40ch', }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <Button
          variant="contained"
          style={{ backgroundColor: '#223D3C', color: 'white' }}
          onClick={handleSearch}
        >
          <SearchIcon /> BUSCAR
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#223D3C', color: 'white' }}
          onClick={handleClear}
        >
          Limpar filtro
        </Button>
      </Box>




      <div className="cardBookContainer">
        {filteredBooks.map((book) => {
          return (
            <CardBook
              key={book.livro_id}
              id={book.livro_id}
              titulo={book.titulo}
              autor={book.autor}
              url={book.url_livro}
              editora={book.editora_nome}
              ano={book.ano}
              estoque={book.quantidade}
              preco={book.preco}
            />
          )
        })}
      </div>
    </div>
  );
}


