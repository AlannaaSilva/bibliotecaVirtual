import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '../../assets/avatar.png'; 
import  "./styles.css" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardBook } from '../CardBook';
import { AddNewBookModal } from '../AddNewBookModal';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const books = [
  {
  id: 1,
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J. K. Rowlingavid Flanagan",
  editora: "Rocco",
  ano: 1997,
  estoque: 20,
  descricao: "O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo",
  url: "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 2,
  titulo: "A Guerra dos Tronos : As Crônicas de Gelo e Fogo",
  autor: "George R. R. Martin",
  editora: "Bantam Spectra",
  ano: 1996,
  estoque: 2,
  descricao: "O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte.",
  url: "https://m.media-amazon.com/images/I/91+1SUO3vUL._SY522_.jpg"
},
{
  id: 3,
  titulo: "O último desejo -The Witcher",
  autor: " Andrzej Sapkowski",
  editora: "WMF Martins Fontes",
  ano: 2019,
  estoque: 5,
  descricao: "Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mund",
  url: "https://m.media-amazon.com/images/I/618iEKbcBDL._SY522_.jpg"
},
{
  id: 4,
  titulo: "O Senhor dos Anéis: O retorno do rei",
  autor: "J.R.R. Tolkien",
  editora: "HarperCollins",
  ano: 2018,
  estoque: 15,
  descricao: "A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As",
  url: "https://m.media-amazon.com/images/I/71+4uDgt8JL._SY522_.jpg"
},
{
  id: 4,
  titulo: "O Senhor dos Anéis: O retorno do rei",
  autor: "J.R.R. Tolkien",
  editora: "HarperCollins",
  ano: 2018,
  descricao: "A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As",
  url: "https://m.media-amazon.com/images/I/71+4uDgt8JL._SY522_.jpg"
},
{
  id: 4,
  titulo: "O Senhor dos Anéis: O retorno do rei",
  autor: "J.R.R. Tolkien",
  editora: "HarperCollins",
  ano: 2018,
  descricao: "A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As",
  url: "https://m.media-amazon.com/images/I/71+4uDgt8JL._SY522_.jpg"
}
]



export function Library() {
    return (
       <div className='libraryContainer'>
        <div className='userContainer'>
            <Avatar alt="Vanessa Silva" src= {avatar} sx={{
                    width: '7.625rem',
                    height: '7.625rem',
                    fontSize: '4rem',
                }}/>
              <div className='userInfo'>
                  <div className='userName'> Vanessa Silva</div>
                  <div className='userAcesoo'> Acesso: adm</div>
                  <AddNewBookModal/>
                  
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
          <TextField placeholder="Busque o livro pelo título, editora, autor ou ano" sx={{ width: '40ch', }} />
          <Button
            variant="contained"
            style={{ backgroundColor: '#223D3C', color: 'white' }} 
          >
           <SearchIcon fontSize='small'/> BUSCAR
          </Button>
        </Box>


      

       <div className="cardBookContainer">
        {books.map((book)=>{
        return(
          <CardBook
            key={book.id}
            id={book.id}
            titulo={book.titulo}
            autor={book.autor}
            url={book.url}
            editora={book.editora}
            ano={book.ano}
            estoque={book.estoque}
          />
        )
       })}
        </div>
       </div>
    );
  }


