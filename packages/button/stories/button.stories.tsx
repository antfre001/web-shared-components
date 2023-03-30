import SignalWifi2BarOutlinedIcon from '@mui/icons-material/SignalWifi2BarOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Meta } from '@storybook/react';
import { Button } from '../src';
import React from 'react';
import { Announcement } from './announcement';

export default {
  title: 'Komponenter/Knappar/Komponent',
  component: Button,
  argTypes: {
    text: { control: 'text', defaultValue: 'Knapptext' },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },
  parameters: { controls: { hideNoControlsWarning: true } },
} as Meta;

export const Template = ({ text, ...args }: any) => (
  <div className="flex flex-col items-start space-y-2">
    <Button {...args}>{args.iconButton ? <SignalWifi2BarOutlinedIcon /> : text}</Button>
    <Button {...args} leftIcon={<CheckOutlinedIcon />}>
      {args.iconButton ? '' : text}
    </Button>
  </div>
);

Template.storyName = 'Button';

Template.argTypes = {
  disabled: {
    type: { name: 'string', required: false },
    description: 'Sets disabled',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
    defaultValue: false,
  },
  size: {
    type: { name: 'string', required: false },
    description: 'Sets size',
    table: {
      defaultValue: { summary: 'md' },
    },
    options: ['sm', 'md', 'lg', 'fit'],
    control: 'select',
    defaultValue: 'md',
  },
  loading: {
    type: { name: 'string', required: false },
    description: 'Sets loading spinner',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
    defaultValue: false,
  },
  loadingText: {
    type: { name: 'string', required: false },
    description: 'Sets loading text',
    table: {
      defaultValue: { summary: '' },
    },
    control: 'text',
    defaultValue: '',
  },
  variant: {
    type: { name: 'string', required: false },
    description: 'Sets variant',
    table: {
      defaultValue: { summary: 'outline' },
    },
    options: ['link', 'solid', 'outline', 'light', 'ghost'],
    control: 'select',
    defaultValue: 'outline',
  },
  type: {
    type: { name: 'string', required: false },
    description: 'Sets type',
    table: {
      defaultValue: { summary: 'button' },
    },
    options: ['reset', 'button', 'submit'],
    control: 'select',
    defaultValue: 'button',
  },
  color: {
    type: { name: 'string', required: false },
    description: 'Sets color',
    table: {
      defaultValue: { summary: 'primary' },
    },
    options: [undefined, 'primary', 'secondary'],
    control: 'select',
    defaultValue: 'primary',
  },
  rounded: {
    type: { name: 'string', required: false },
    description: 'Sets rounded variant',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
    defaultValue: false,
  },
  iconButton: {
    type: { name: 'string', required: false },
    description: 'Sets if icon button',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
    defaultValue: false,
  },
};

export const Grupp = () => (
  <div className="space-y-4">
    <div>
      <Button.Group variant="solid" color="primary" className="space-x-2">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" color="orange" className="space-x-2">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" color="primary" className="space-x-2">
        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>
      </Button.Group>
    </div>
  </div>
);

export const Fastsittandes = () => (
  <div className="space-y-4">
    <div>
      <Button.Group variant="solid" attached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" size="lg" attached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" color="primary" attached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" attached>
        <Button>Button</Button>
        <Button color="primary">Button</Button>
        <Button color="secondary">Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" attached>
        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>

        <Button iconButton>
          <Announcement size={16} />
        </Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" attached>
        <Button iconButton>
          <Announcement size={32} />
        </Button>

        <Button iconButton>
          <Announcement size={32} />
        </Button>

        <Button iconButton>
          <Announcement size={32} />
        </Button>

        <Button iconButton>
          <Announcement size={32} />
        </Button>
      </Button.Group>
    </div>
  </div>
);
