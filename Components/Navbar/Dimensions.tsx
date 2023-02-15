import { useEffect, useRef } from "react";

interface MyRefType extends React.RefObject<HTMLDivElement> {}

export const useDimensions = (ref: MyRefType) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return dimensions.current;
};
