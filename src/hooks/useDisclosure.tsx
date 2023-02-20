import { useState } from "react";

type Options = {
  defaultIsOpen?: boolean;
};
export const useDisclosure = (
  { defaultIsOpen }: Options = { defaultIsOpen: false }
) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle };
};
