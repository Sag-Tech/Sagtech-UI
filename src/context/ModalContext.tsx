import { createContext, useState, type ReactNode } from "react";

interface ContextProps {
  isOpen: boolean;
  toggle: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ContextProps>({
  isOpen: false,
  toggle: () => null,
});

export const ModalContextProvider = ({
  children,
}: ProviderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetSomeContext = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggle: handleSetSomeContext }}>
      {children}
    </ModalContext.Provider>
  );
};
