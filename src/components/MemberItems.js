import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Beranda" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddBoxOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Buat Project Baru" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderSharedOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Project Saya" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InsertInvitationOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Undangan Kolaborasi" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PostAddOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Post Artikel" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArticleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Artikel Saya" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LogoutOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Keluar" />
    </ListItem>
  </div>
);
