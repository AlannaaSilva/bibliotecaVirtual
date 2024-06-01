import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export function AddNewBookModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    editora_nome: '',
    ano: '',
    disponivel: 1, // assuming 1 means available by default
    quantidade: 1,
    preco: '',
    url_livro: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert ano and preco to numbers
    const dataToSend = {
      ...formData,
      ano: Number(formData.ano),
      preco: parseFloat(formData.preco)
    };


    axios.post('http://localhost/backend/create.php', dataToSend, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        if (response.data.status === 'success') {
          console.log('Book added successfully:', response.data.message);
          // Refresh the page
          window.location.reload();
          // Or navigate to another page
          // window.location.href = '/another-page';
        }
        window.location.href = '/';

      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };



  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' } }}>Adicionar um novo livro </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%', maxWidth: '400px' },
              display: 'flex',
              flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="titulo" label="Título do livro" variant="filled" onChange={handleChange} />
            <TextField id="autor" label="Autor do livro" variant="filled" onChange={handleChange} />
            <TextField id="editora_nome" label="Editora" variant="filled" onChange={handleChange} />
            <TextField id="ano" label="Ano" variant="filled" onChange={handleChange} />
            <TextField id="preco" label="Preço" variant="filled" onChange={handleChange} />
            <TextField id="url_livro" label="Url imagem da capa do livro" variant="filled" onChange={handleChange} />

          </Box>

          <Box sx={{ m: 1 }}>
            <Button variant="contained" sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' } }} onClick={handleSubmit}>Adicionar novo livro</Button>
          </Box>

        </Box>
      </Modal>
    </div>


  );
}
