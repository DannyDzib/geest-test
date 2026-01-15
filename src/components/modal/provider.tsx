import React, { createContext, useContext, useState, ReactNode } from 'react';
import Modal from './modal';

type Config = { content?: ReactNode };

type ModalContextType = {
  open: (config: Config) => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const open = (config: Config) => {
    if (config.content) setContent(config.content);
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <Modal isVisible={visible} onClose={close} children={content} />
    </ModalContext.Provider>
  );
}
