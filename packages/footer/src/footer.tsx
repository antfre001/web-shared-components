import { DefaultProps } from "@sk-web-gui/theme";
import { cx, __DEV__ } from "@sk-web-gui/utils";
import * as React from "react";

export interface FooterProps extends DefaultProps {
  /* Main color */
  color?: string;
  /* React node */
  children?: React.ReactNode;
  /* Section of links in the bottom node */
  bottomLinks?: React.ReactNode;
  /* Bottom links color */
  bottomLinksColor?: string;
  /* Bottom links container classes */
  bottomLinksClasses?: string;
}

export const Footer = React.forwardRef<any, FooterProps>((props, ref) => {
  const {
    color = 'primary',
    bottomLinksColor = 'gray-middle',
    className,
    children,
    bottomLinks,
    bottomLinksClasses,
    ...rest
  } = props;

  return (
    <>
      <footer className="footer" {...rest}>
          <div data-color={color} className="footer-innerwrapper">
              <div className={cx(className, 'footer-container')}>
                {children}
              </div>
          </div>

          { bottomLinks &&
            <div className="footer-bottomlinks" data-color={bottomLinksColor}>
                <div className={cx(bottomLinksClasses,'footer-bottomlinks-container')}>
                    {bottomLinks}
                </div>
            </div>
          }
      </footer>
    </>
  );
});

if (__DEV__) {
  Footer.displayName = "Footer";
}
