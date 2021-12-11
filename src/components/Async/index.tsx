import { useEffect, useState } from "react";

function Async() {
  const [isButtonVisibile, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {!isButtonVisibile && <button>Button</button>}
    </div>
  );
}

export default Async;
