import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const CreateArticle = () => {
  const [category, setCategory] = React.useState('1');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl required>
        <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Kategori"
          onChange={handleChange}
        >
          <MenuItem value={1}>Pengembangan Teknologi</MenuItem>
          <MenuItem value={2}>Go Green</MenuItem>
          <MenuItem value={3}>Sosial Kemanusiaan</MenuItem>
        </Select>

        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Judul Artikel"
        />

        <TextField
          id="outlined-multiline-static"
          label="Isi Artikel"
          multiline
          required
          rows={4}
          placeholder="Isi Artikel"
        />
        <Button
          label="Unggah file"
          variant="outlined"
          component="label"
          color="primary"
        >
          Upload File
          <input type="file" hidden />
        </Button>
        <Button variant="contained" color="success">
          Buat & Publish Artikel
        </Button>
      </FormControl>
    </Box>
  );
};

export default CreateArticle;
