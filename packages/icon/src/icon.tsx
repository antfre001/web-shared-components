import { cx, DefaultProps } from '@sk-web-gui/utils';
import { icons } from 'lucide-react';
import React from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

type IconNames = keyof typeof dynamicIconImports;

export interface IconProps extends DefaultProps, React.HTMLAttributes<HTMLElement> {
  name?: IconNames;
  /** @default primary */
  color?: 'info' | 'success' | 'primary' | 'warning' | 'error' | 'vattjom' | 'gronsta' | 'bjornstigen' | 'juniskar';
  icon?: React.ReactElement;
  /** @default false */
  rounded?: boolean;
  /** @default false */
  inverted?: boolean;
  /** @default tertiary */
  variant?: 'tertiary' | 'ghost';
  /** @default 24 */
  size?: number | 'fit';
}

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase();
}

export const Icon = (props: IconProps) => {
  const {
    name,
    color = 'primary',
    icon,
    rounded = false,
    inverted = false,
    variant = 'tertiary',
    size = 24,
    className,
    ...rest
  } = props;
  const LucideIcon = name ? icons[toPascalCase(name) as keyof typeof icons] : undefined;
  return (
    <span
      className={cx('sk-icon', className)}
      style={{ width: typeof size == 'number' ? size : undefined, height: typeof size == 'number' ? size : undefined }}
      aria-hidden={true}
      data-variant={variant}
      data-color={color ? color : undefined}
      data-rounded={rounded ? rounded : undefined}
      data-inverted={inverted ? inverted : undefined}
      data-size={size ? size : undefined}
      data-testid={name ? `sk-icon-${name}` : undefined}
      {...rest}
    >
      {icon ? icon : LucideIcon ? <LucideIcon size={typeof size == 'number' ? size : undefined} /> : undefined}
    </span>
  );
};

export default Icon;
