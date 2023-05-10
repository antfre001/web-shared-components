import React, { useState } from 'react';
import { ISearchBarProps, SearchBar } from '../src/search-bar';
import { Meta } from '@storybook/react';

export default {
  title: 'Komponenter/Sök/Komponent',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    placeholder: 'Sök..',
  },
} as Meta;

export const Template = (args: ISearchBarProps) => {
  const [term, setTerm] = useState('');

  const onChangeHandler = (event: React.BaseSyntheticEvent) => {
    setTerm(event.target.value);
  };
  const onCloseHandler = () => {
    console.log('onCloseHandler');
  };
  const onSearchHandler = (query: string) => {
    console.log('onSearchHandler', query);
  };

  return (
    <SearchBar {...args} value={term} onChange={onChangeHandler} onClose={onCloseHandler} onSearch={onSearchHandler} />
  );
};

Template.storyName = 'SearchBar';
