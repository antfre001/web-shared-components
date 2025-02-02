import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OptionValueType, Select, SelectProps } from '../src';

export default {
  title: 'Komponenter/Dropdown/Select',
  component: Select,
  tags: ['autodocs'],
} as Meta<typeof Select>;

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export const Template: StoryObj<typeof Select> = (args: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<OptionValueType>();
  const [selectedValues, setSelectedValues] = useState<OptionValueType[]>([]);
  return (
    <div className="h-80">
      <button
        className="mb-md"
        onClick={() =>
          args.multiple
            ? setSelectedValues([{ label: people[1].name, data: people[1] }])
            : setSelectedValue({ label: people[1].name, data: people[1] })
        }
      >
        Välj Kenton Towne
      </button>
      {args.multiple ? (
        <Select
          {...args}
          multiple
          onChange={(e) => {
            console.log('onchange on select:', e);
          }}
          value={selectedValues}
          // dropDownIcon={<ArrowForwardIosOutlinedIcon className="!text-xl rotate-90" />}
        >
          {people.map((person, index) => (
            <Select.Option disabled={index === 2} key={person.id} value={{ label: person.name, data: person }} />
          ))}
        </Select>
      ) : (
        <Select
          {...args}
          onChange={(e) => {
            console.log('onchange on select:', e);
          }}
          value={selectedValue}
          // dropDownIcon={<ArrowForwardIosOutlinedIcon className="!text-xl rotate-90" />}
        >
          {people.map((person, index) => (
            <Select.Option disabled={index === 2} key={person.id} value={{ label: person.name, data: person }} />
          ))}
        </Select>
      )}
    </div>
  );
};

Template.storyName = 'Select';

export const Ovanför = () => (
  <>
    <div className="h-[100px]"></div>
    <Select onChange={() => ({})} placeholder="Välj hob">
      <Select.Option value={{ label: 'Sam', data: {} }} />
      <Select.Option value={{ label: 'Frodo', data: {} }} />
    </Select>
  </>
);

export const Inaktiverad = () => (
  <Select onChange={() => ({})} disabled placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const Invaliderad = () => (
  <Select onChange={() => ({})} invalid placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const Storlekar = () => (
  <div className="flex space-x-2">
    <Select onChange={() => ({})} placeholder="Outline" size="sm">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select onChange={() => ({})} placeholder="Outline" size="md">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select onChange={() => ({})} placeholder="Outline" size="lg">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  </div>
);
