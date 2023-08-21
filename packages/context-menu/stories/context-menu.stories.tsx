import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import { Button } from '@sk-web-gui/button';
import { Divider } from '@sk-web-gui/divider';
import React from 'react';
import { ContextMenu } from '../src';

export default {
  title: 'Komponenter/Meny/Kontextmeny',
  component: ContextMenu,
  tags: ['autodocs'],
};

export const Template = () => {
  return (
    <div className="h-60">
      <div>
        <ContextMenu>
          <ContextMenu.Button disabled size="sm" variant="outline" color="primary" iconButton rounded>
            <ArrowDownwardIcon />
          </ContextMenu.Button>
          <ContextMenu.Item>
            <Button
              variant="link"
              className="text-body"
              leftIcon={<EditOutlinedIcon />}
              onClick={() => console.log('Edit')}
            >
              Redigera
            </Button>
          </ContextMenu.Item>
          <ContextMenu.Item>
            <Button
              variant="link"
              className="text-body"
              leftIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => console.log('Delete')}
            >
              Ta bort
            </Button>
          </ContextMenu.Item>
          <Divider orientation="horizontal" className="w-full" />
          <ContextMenu.Item>
            <Button variant="link" className="text-body" leftIcon={<UndoIcon />} onClick={() => console.log('Undo')}>
              Ångra
            </Button>
          </ContextMenu.Item>
        </ContextMenu>
      </div>
    </div>
  );
};

Template.storyName = 'ContextMenu';
