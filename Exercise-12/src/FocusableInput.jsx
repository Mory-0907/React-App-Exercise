import { useEffect, useRef } from "react";

export function FocusableInput() {
  const isAlreadyMountedRef = useRef(false);

  useEffect(() => {
    if (!isAlreadyMountedRef.current) {
        isAlreadyMountedRef.current = true;
        console.log("Componente montato per la prima volta");
      } else {
        console.log("Componente montato di nuovo");
      }
    isAlreadyMountedRef.current?.focus();
  }, []);
  return (
    <input
      type="text"
      name="email"
      placeholder="Inserisci qui la tua email"
      ref={isAlreadyMountedRef}
    />
  );
}
