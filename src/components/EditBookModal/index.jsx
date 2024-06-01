
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useState } from 'react';
import qs from 'qs';


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


export function EditBookModal({ titulo, autor, url, editora, ano, preco, estoque, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    titulo: titulo,
    autor: autor,
    editora_nome: editora,
    ano: ano,
    disponivel: 1, // assuming 1 means available by default
    quantidade: estoque,
    preco: preco,
    url_livro: url,
    livro_id: id
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
      preco: parseFloat(formData.preco),
      quantidade: Number(formData.quantidade),
    };

    const formDataEncoded = qs.stringify(dataToSend);
    console.log(dataToSend)

    axios.post('http://localhost/backend/update.php', formDataEncoded, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        if (response.data.status === 'success') {
          console.log('Book added successfully:', response.data.message);
          // Refresh the page
        }
        window.location.href = '/';
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };



  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<EditIcon />}
        size="small"
        style={{ backgroundColor: '#040DD5', color: 'white', fontSize: '10px' }}
      >
        Editar item
      </Button>
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
            <TextField value={formData.titulo} id="titulo" label="Título do livro" variant="filled" onChange={handleChange} />
            <TextField value={formData.autor} id="autor" label="Autor do livro" variant="filled" onChange={handleChange} />
            <TextField value={formData.editora_nome} id="editora" label="Editora" variant="filled" onChange={handleChange} />
            <TextField value={formData.ano} id="ano" label="Ano" variant="filled" onChange={handleChange} />
            <TextField value={formData.preco} id="preco" label="Preço R$" variant="filled" onChange={handleChange} />
            <TextField value={formData.url_livro} id="url" label="Url imagem da capa do livro" variant="filled" onChange={handleChange} />
            <TextField value={formData.quantidade} id="quantidade" label="Quantidade" variant="filled" onChange={handleChange} />

          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' } }}
              onClick={handleSubmit}
            >
              CONFIRMAR EDIÇÃO
            </Button>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: '#A03030', color: 'white' }}
              onClick={() => handleClose(true)}
            >
              CANCELAR
            </Button>
          </Box>

        </Box>
      </Modal>
    </div>
  )
}