import { useRef, useState, useEffect } from "react";

// Hook
export default function useHover(): [React.MutableRefObject<any>, boolean] {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = (ev: Event) => {
    if (
      ev.target === ref.current &&
      (!ev.relatedTarget ||
        (ev.relatedTarget && ev.relatedTarget.parentElement !== ref.current))
    ) {
      console.log("Over", { ev });
      setValue(true);
    }
  };
  const handleMouseOut = (ev: Event) => {
    if (
      (ev.relatedTarget &&
        (ev.relatedTarget.parentElement !== ref.current &&
          ev.relatedTarget !== ref.current)) ||
      !ev.relatedTarget
    ) {
      console.log("out", { ev });
      setValue(false);
    }
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]); // Recall only if ref changes

  return [ref, value];
}
