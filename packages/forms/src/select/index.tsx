import { Listbox } from '@headlessui/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { cx, __DEV__ } from '@sk-web-gui/utils';
import * as React from 'react';

import { Fragment, useEffect, useState } from 'react';
import { Input, InputProps } from '../input/input';
import { useSelectClass } from './styles';

type OptionValueType = { label: string; data: any };

export interface OptionProps extends Omit<InputProps, 'value'> {
  value?: OptionValueType;
}

const Option: React.FC<OptionProps> = ({ value }) => <option value={value?.data}>{value?.label}</option>;

export interface SelectProps extends Omit<InputProps, 'value' | 'onChange'> {
  onChange: (value: OptionValueType) => void;
  listClassName?: string;
  defaultOptionsAmount?: number;
  value?: OptionValueType;
  classNameWrapper?: string;
  dropDownIcon?: React.ReactNode;
}

const InternalSelect = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    className,
    listClassName = '',
    classNameWrapper = '',
    defaultOptionsAmount = 10,
    onChange,
    value,
    placeholder = '',
    children,
    disabled,
    size = 'md',
    dropDownIcon,
    ...rest
  } = props;
  const [selectedValue, setSelectedValue] = useState<OptionValueType | undefined>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const classes = useSelectClass({ size, disabled });

  const handleOnChange = (value: OptionValueType) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <Listbox value={selectedValue} onChange={handleOnChange} as={Fragment} disabled={disabled ? disabled : undefined}>
      {({ open }) => (
        <div className={`${classNameWrapper} form-select-wrapper block w-full relative`}>
          <Listbox.Button as={Fragment}>
            <Input
              ref={ref}
              as="button"
              type="button"
              size={size}
              disabled={disabled ? disabled : undefined}
              aria-disabled={disabled ? disabled : undefined}
              className={cx('form-select', className)}
              {...rest}
            >
              <span>{selectedValue ? selectedValue.label : placeholder}</span>
              <div className={`form-select-icon absolute right-4 ${open ? 'open rotate-180' : ''}`}>
                {dropDownIcon ? dropDownIcon : <ArrowDropDownIcon className={`!text-2xl`} />}
              </div>
            </Input>
          </Listbox.Button>
          {open && (
            <Listbox.Options
              static
              style={{ maxHeight: `${defaultOptionsAmount * 50 + 10}px` }}
              className={cx('form-select-list', listClassName)}
            >
              {children &&
                (children as any).map((option: any, index: number) => {
                  const { value, disabled, className, ...rest } = option.props;
                  return (
                    <Listbox.Option
                      key={`form-select-option-${index}`}
                      value={option.props?.value}
                      disabled={option.props.disabled}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={cx(
                            'form-select-option',
                            classes,
                            className,
                            option.props.disabled
                              ? 'opacity-75 cursor-not-allowed hover:bg-white hover:text-black'
                              : '',
                            active ? 'active' : ''
                          )}
                          {...rest}
                        >
                          {option.props?.value?.label}
                        </li>
                      )}
                    </Listbox.Option>
                  );
                })}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  );
});

if (__DEV__) {
  InternalSelect.displayName = 'Select';
}

interface Select extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>> {
  Option: typeof Option;
}

const Select = InternalSelect as Select;

Select.Option = Option;

export { Select, Option };
