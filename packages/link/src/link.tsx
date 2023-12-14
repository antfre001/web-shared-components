import { cx, __DEV__, PolymorphicComponentPropsWithRef, PolymorphicRef, DefaultProps } from '@sk-web-gui/utils';
import React from 'react';
import { useLinkClass } from './styles';
import { Icon } from '@sk-web-gui/icon';

export interface LinkProps extends DefaultProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Makes link disabled */
  disabled?: boolean;
  /** Makes link open in new tab */
  external?: boolean;
  /** React node */
  children?: React.ReactNode;
  /** @default false */
  hideExternalIcon?: boolean;
  /** @default '' */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** @default false */
  strong?: boolean;
  /** @default primary */
  variant?: 'primary' | 'tertiary';
}

type ILinkProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, LinkProps>;

export const Link = React.forwardRef(
  <C extends React.ElementType = 'a'>(props: ILinkProps<C>, ref?: PolymorphicRef<C>) => {
    const {
      disabled,
      external,
      onClick,
      className,
      as: Comp = 'a',
      children,
      hideExternalIcon = false,
      size = '',
      strong = false,
      variant = 'primary',
      ...rest
    } = props;
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : null;

    const classes = useLinkClass({
      size,
      disabled,
      variant,
    });

    return (
      <Comp
        ref={ref}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled}
        onClick={disabled ? (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault() : onClick}
        className={cx('sk-link', classes, strong && 'font-bold', disabled && 'sk-link-disabled', className)}
        {...externalProps}
        {...rest}
      >
        {children}
        {!hideExternalIcon && external && (
          <Icon className="sk-link-external-icon" name="external-link" size="fit" variant="ghost" />
        )}
      </Comp>
    );
  }
);

if (__DEV__) {
  Link.displayName = 'Link';
}

export default Link;
