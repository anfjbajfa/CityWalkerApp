import { useState, useRef } from "react";
function Test() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const items = ["Items1","Items2","Items3","Items4"];
  const handleStateClick = () => {
    setCount(count + 1);
  };

  const handleRefClick = () => {
    countRef.current += 1;
    console.log(`countRef的值：${countRef.current}`);
  };
  return (
    <div>
      <p>count (useState): {count}</p>
      <button onClick={handleStateClick}>增加 count（useState）</button>
      <br />
      <p>count(useRef):{countRef.current}</p>
      <button onClick={handleRefClick}>增加 countRef（useRef）</button>
      <br></br>
      
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
