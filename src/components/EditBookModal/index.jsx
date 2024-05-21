import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import IconButton from '@mui/material/IconButton';

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


export function EditBookModal({titulo, autor, url, editora, ano, preco, estoque, id}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
    <div>
      <Button
        onClick={handleOpen}
         variant="contained" 
         startIcon={<EditIcon />} 
         size="small" 
         style={{ backgroundColor: '#040DD5', color: 'white', fontSize:'10px' }}
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
        <TextField value={titulo} id="titulo" label="Título do livro" variant="filled" />
        <TextField value= {autor}id="autor" label="Autor do livro" variant="filled" />
        <TextField value= {editora}id="editora" label="Editora" variant="filled" />
        <TextField value={ano} id="ano" label="Ano" variant="filled" /> 
        <TextField value={preco} id="preco" label="Preço R$" variant="filled" /> 
        <TextField value={url} id="url" label="Url imagem da capa do livro" variant="filled" />
      </Box>
         <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex',
          flexDirection:'row'}}>
      <IconButton aria-label="remove" size="large" color='primary'>
        <DoDisturbOnIcon fontSize="large"/>
      </IconButton>
        <TextField value={estoque} id="estoque" label="" variant="outlined"/>
     <IconButton aria-label="add" size="large" color='primary'>
        <AddCircleIcon fontSize="large"/>
      </IconButton>
        </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems:'center'}}>
        <Button
         variant="contained" 
         size="large" 
         sx={{ backgroundColor: '#223D3C', color: 'white', '&:hover': { backgroundColor: '#3B8986' }}}
         >
          CONFIRMAR EDIÇÃO
        </Button>
        <Button
              variant="contained"
              size="large" 
              style={{ backgroundColor: '#A03030', color: 'white' }}
              onClick={()=> handleClose(true)}
              >
             CANCELAR
           </Button>
      </Box>

      </Box>
      </Modal>
    </div>
    )
}