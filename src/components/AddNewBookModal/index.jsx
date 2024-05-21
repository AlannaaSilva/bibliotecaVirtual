import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' }}}>Adicionar um novo livro </Button>
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
        <TextField id="titulo" label="Título do livro" variant="filled" />
        <TextField id="autor" label="Autor do livro" variant="filled" />
        <TextField id="editora" label="Editora" variant="filled" />
        <TextField id="ano" label="Ano" variant="filled" /> 
         <TextField id="url" label="Preço" variant="filled" />
        <TextField id="url" label="Url imagem da capa do livro" variant="filled" />
      
      </Box>

      <Box sx={{ m:1 }}>
        <Button variant="contained" sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' }}}>Adicionar novo livro</Button>
      </Box>

      </Box>
      </Modal>
    </div>
      
      
  );
}
