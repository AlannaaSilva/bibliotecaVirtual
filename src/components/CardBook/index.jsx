
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DeleteBookModal } from '../DeleteBookModal';
import { EditBookModal } from '../EditBookModal';

export function CardBook({ titulo, autor, url, editora, ano, estoque, id, preco }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="400"
        image={url}
        alt={titulo}
        className="card-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {autor}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Editora: {editora}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Ano: {ano}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Estoque: {estoque}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Preço: {preco}
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
          <DeleteBookModal livroId={id} />
          <EditBookModal
            key={id}
            id={id}
            titulo={titulo}
            autor={autor}
            url={url}
            editora={editora}
            ano={ano}
            estoque={estoque}
            preco={preco} />
        </div>
      </CardContent>



    </Card>

  );
}
