import * as React from 'react';

import { Input as InternalInput, InputProps } from './input';
import { InputGroup, InputGroupProps } from '../input-group';
import { InputLeftAddon, InputRightAddon, InputAddonProps } from '../input-addon';
import { InputLeftElement, InputRightElement, InputElementProps } from '../input-element';
import { InputLeftAddin, InputRightAddin, InputAddinProps } from '../input-addin';

interface InputPropsComplex
  extends InputProps,
    React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLElement>> {
  Group: typeof InputGroup;

  LeftAddon: typeof InputLeftAddon;
  RightAddon: typeof InputRightAddon;

  LeftAddin: typeof InputLeftAddin;
  RightAddin: typeof InputRightAddin;

  LeftElement: typeof InputLeftElement;
  RightElement: typeof InputRightElement;
}

const Input = InternalInput as InputPropsComplex;

Input.Group = InputGroup;
Input.LeftAddon = InputLeftAddon;
Input.RightAddon = InputRightAddon;
Input.LeftAddin = InputLeftAddin;
Input.RightAddin = InputRightAddin;
Input.LeftElement = InputLeftElement;
Input.RightElement = InputRightElement;

export type { InputPropsComplex, InputProps, InputGroupProps, InputAddonProps, InputAddinProps, InputElementProps };

export { Input };
export default Input;
