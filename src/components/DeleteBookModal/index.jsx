import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export function DeleteBookModal({ livroId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleDelete = () => {
    console.log(livroId)
    axios.post('http://localhost/backend/delete.php', { livro_id: livroId })
      .then(response => {
        if (response.data.status === 'success') {
          setOpen(false);

        }
        window.location.href = '/';

      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);

      });

    handleClose()
  };


  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<DeleteIcon />}
        size="small"
        style={{ backgroundColor: '#DE1515', color: 'white', fontSize: '10px' }}>
        Excluir acervo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja excluir?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Se você prosseguir irá excluir <strong>todos</strong> os livros dessa coleção
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: '#223D3C', color: 'white' }}
              onClick={handleDelete}
            >
              EXCLUIR
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
  );
}

