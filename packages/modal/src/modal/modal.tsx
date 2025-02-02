import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '@mui/icons-material/Close';
import { DefaultProps, __DEV__ } from '@sk-web-gui/utils';
import * as React from 'react';
import { Fragment } from 'react';

export interface IModalProps extends DefaultProps {
  show: boolean;
  label?: string | JSX.Element;
  closeLabel?: string;
  className?: string;
  onClose?: () => void;
  hideClosebutton?: boolean;
  children?: React.ReactNode;
  disableCloseOutside?: boolean;
  as?: React.ElementType;
  labelAs?: React.ElementType;
  hideLabel?: boolean;
  'aria-label'?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, IModalProps>((props, ref) => {
  const {
    show,
    label,
    closeLabel,
    className,
    hideClosebutton = false,
    onClose,
    children,
    disableCloseOutside = false,
    as: Content = 'article',
    labelAs = 'h1',
    hideLabel = false,
    ...rest
  } = props;

  const modalRef = React.useRef<any>();

  const onCloseHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (show && props['aria-label']) {
      setTimeout(() => {
        modalRef.current && modalRef.current.removeAttribute('aria-labelledby');
      });
    }
  }, [show, props['aria-label']]);

  return (
    <div className="Modal">
      <Transition appear show={show} as={Fragment}>
        <Dialog
          ref={modalRef}
          open={show}
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto bg-opacity-50 bg-gray-500"
          onClose={onCloseHandler}
          {...rest}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0"
                style={{ pointerEvents: disableCloseOutside ? 'none' : undefined }}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Content
                className={`${className} inline-block w-full px-md py-lg sm:px-16 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded`}
              >
                <div className="flex flex-between w-full mb-lg">
                  {!hideLabel ? (
                    <Dialog.Title as={labelAs} className={`grow text-xl ${hideClosebutton ? 'text-center' : ''}`}>
                      {label}
                    </Dialog.Title>
                  ) : (
                    <div className="grow" />
                  )}

                  {!hideClosebutton && (
                    <button
                      className="p-4 -m-4"
                      aria-label={
                        closeLabel ? closeLabel : `Stäng ${label && label !== typeof 'object' ? label : 'modal'}`
                      }
                      onClick={onCloseHandler}
                    >
                      <CloseIcon className="material-icon !text-2xl" />
                    </button>
                  )}
                </div>
                <div>{children}</div>
              </Content>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

if (__DEV__) {
  Modal.displayName = 'Modal';
}

export default Modal;
