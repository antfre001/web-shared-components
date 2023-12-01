import { Combobox, ComboboxProps, FormControl, FormHelperText, FormLabel } from '../src';
import React from 'react';
export default {
  title: 'Komponenter/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  args: {
    placeholder: 'Välj en frukt',
    searchPlaceholder: 'Skriv för att filtrera',
  },
};

const applesAndPears = [
  {
    type: 'apple',
    name: 'Granny smith',
    id: 1,
  },
  {
    type: 'apple',
    name: 'Empire',
    id: 2,
  },
  {
    type: 'apple',
    name: 'Golden Delicious',
    id: 3,
  },
  {
    type: 'apple',
    name: 'Honeycrisp',
    id: 4,
  },
  {
    type: 'pear',
    name: 'Cascade',
    id: 5,
  },
  {
    type: 'pear',
    name: 'Conference',
    id: 6,
  },
  {
    type: 'pear',
    name: 'Moonglow',
    id: 7,
  },
  {
    type: 'pear',
    name: 'Florana',
    id: 8,
  },
];

const fruits = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper',
  'clementine',
  'cloudberry',
  'coconut',
  'cranberry',
  'cucumber',
  'currant',
  'damson',
  'date',
  'dragonfruit',
  'durian',
  'eggplant',
  'elderberry',
  'feijoa',
  'fig',
  'goji berry',
  'gooseberry',
  'grape',
  'grapefruit',
  'guava',
  'honeydew',
  'huckleberry',
  'jackfruit',
  'jambul',
  'jujube',
  'kiwi fruit',
  'kumquat',
  'lemon',
  'lime',
  'loquat',
  'lychee',
  'mandarine',
  'mango',
  'mulberry',
  'nectarine',
  'nut',
  'olive',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'physalis',
  'pineapple',
  'plum',
  'pomegranate',
  'pomelo',
  'purple mangosteen',
  'quince',
  'raisin',
  'rambutan',
  'raspberry',
  'redcurrant',
  'rock melon',
  'salal berry',
  'satsuma',
  'star fruit',
  'strawberry',
  'tamarillo',
  'tangerine',
  'tomato',
  'ugli fruit',
  'watermelon',
];

export const Template = (args: ComboboxProps) => {
  return (
    <div className="h-[45rem]">
      <Combobox {...args}>
        <Combobox.List>
          {fruits.map((fruit, index) => (
            <Combobox.Option key={`fruit-${index}`} value={fruit}>
              {fruit}
            </Combobox.Option>
          ))}
        </Combobox.List>
      </Combobox>
    </div>
  );
};
export const WithFormControl = () => {
  return (
    <div className="h-[40rem]">
      <FormControl disabled>
        <FormLabel>Favoritfrukt</FormLabel>
        <Combobox placeholder="Välj en frukt">
          <Combobox.List>
            {applesAndPears.map((fruit) => (
              <Combobox.Option key={`fruit-${fruit.id}`} value={fruit.id.toString()}>
                {fruit.name}
              </Combobox.Option>
            ))}
          </Combobox.List>
        </Combobox>
        <FormHelperText>Ta den frukt du äter oftast på fredagar</FormHelperText>
      </FormControl>
    </div>
  );
};
export const CustomFilterHandler = () => {
  const [query, setQuery] = React.useState<string>('');

  return (
    <div className="h-[40rem]">
      <Combobox
        searchPlaceholder="Search apple or pear"
        autofilter={false}
        searchValue={query}
        onChangeSearch={(e) => setQuery(e.target.value.toLowerCase())}
      >
        <Combobox.List>
          {applesAndPears
            .filter((fruit) => fruit.name.toLowerCase().includes(query) || fruit.type.includes(query))
            .map((fruit) => (
              <Combobox.Option key={`appleAndPears-${fruit.id}`} value={fruit.id.toString()}>
                {fruit.name}
              </Combobox.Option>
            ))}
        </Combobox.List>
      </Combobox>
    </div>
  );
};

Template.storyName = 'Combobox';
