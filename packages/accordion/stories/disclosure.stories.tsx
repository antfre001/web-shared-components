import { Button } from '@sk-web-gui/button';
import { FormControl, FormLabel, Select } from '@sk-web-gui/forms';
import { cx } from '@sk-web-gui/utils';
import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Disclosure, DisclosureProps } from '../src';

export default {
  title: 'Komponenter/Accordions/Disclosure',
  component: Disclosure,
  tags: ['autodocs'],
} as Meta;

export const Template = (args: DisclosureProps) => {
  const [extraContent, setExtraContent] = useState(false);
  const [extraExtraContent, setExtraExtraContent] = useState(false);

  args = {
    ...args,
    header: args?.header ? args.header : 'En vanlig fråga',
    subTitle: args?.subTitle ? args.subTitle : 'En vanlig rubrik',
  };

  return (
    <>
      <Disclosure {...args}>
        <h4>Lorem Ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat eveniet quas nulla saepe minus
          recusandae quis obcaecati necessitatibus. Quidem.
        </p>
        <form>
          <FormControl id="priority">
            <FormLabel>
              <Select onChange={() => ({})} placeholder="Välj">
                <Select.Option
                  value={{ label: 'Först', data: '1' }}
                  className={cx(
                    `cursor-pointer select-none relative py-4 pl-10 pr-4
                    `
                  )}
                >
                  Andra
                </Select.Option>
                <Select.Option
                  value={{ label: 'Andra', data: '2' }}
                  className={cx(
                    `cursor-pointer select-none relative py-4 pl-10 pr-4
                    `
                  )}
                >
                  Tredje
                </Select.Option>
                <Select.Option
                  value={{ label: 'Tredje', data: '3' }}
                  className={cx(
                    `cursor-pointer select-none relative py-4 pl-10 pr-4
                    `
                  )}
                >
                  Fjärde
                </Select.Option>
                <Select.Option
                  value={{ label: 'Fjärde', data: '4' }}
                  className={cx(
                    `cursor-pointer select-none relative py-4 pl-10 pr-4
                    `
                  )}
                >
                  Första
                </Select.Option>
              </Select>
            </FormLabel>
          </FormControl>
        </form>
        <Button
          onClick={() => {
            setExtraContent(!extraContent);
          }}
        >
          Utökat innehåll
        </Button>
        {extraContent && (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
              itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
              consequuntur fugiat voluptatem. Fugiat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
              itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
              consequuntur fugiat voluptatem. Fugiat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
              itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
              consequuntur fugiat voluptatem. Fugiat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
              itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
              consequuntur fugiat voluptatem. Fugiat!
            </p>
            <Button
              onClick={() => {
                setExtraExtraContent(!extraExtraContent);
              }}
            >
              Ännu mer utökat innehåll
            </Button>
            {extraExtraContent && (
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
                  itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
                  consequuntur fugiat voluptatem. Fugiat!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
                  itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
                  consequuntur fugiat voluptatem. Fugiat!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
                  itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
                  consequuntur fugiat voluptatem. Fugiat!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam pariatur perspiciatis molestiae
                  itaque, nulla illo quam, provident ex reprehenderit veniam in consectetur debitis maiores sapiente
                  consequuntur fugiat voluptatem. Fugiat!
                </p>
              </>
            )}
          </>
        )}
      </Disclosure>
    </>
  );
};

Template.storyName = 'Komponent';
