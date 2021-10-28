import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Proyek Saya
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Item>
            <li>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
            </li>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item textAlign="left">
            <li>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
              <ul>Judul Proyek</ul>
            </li>
          </Item>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function MyProject() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
