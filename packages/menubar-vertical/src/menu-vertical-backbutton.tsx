import { Button } from '@sk-web-gui/button';
import { Icon } from '@sk-web-gui/icon';
import { DefaultProps, cx } from '@sk-web-gui/utils';
import React from 'react';

interface IMenuVerticalBackButtonProps extends DefaultProps {
  children: JSX.Element | string;
}

export interface MenuVerticalBackButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'children'>,
    IMenuVerticalBackButtonProps {}

export const MenuVerticalBackButton = React.forwardRef<HTMLDivElement, IMenuVerticalBackButtonProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div ref={ref} className={cx('sk-menu-vertical-backbutton', className)} {...rest}>
      <Button size="lg" variant="tertiary" rounded iconButton>
        <Icon name="arrow-left" />
      </Button>
      <span>{children}</span>
    </div>
  );
});
