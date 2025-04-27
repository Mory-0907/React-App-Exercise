import { useEffect, useRef, useState } from "react";

export function Message() {
  const [text, setText] = useState("");
  const paragraphRef = useRef();

  useEffect(() => {
    setText("messaggio creato al montaggio");
  }, []);
  return <p ref={paragraphRef}> {text}</p>;
}
