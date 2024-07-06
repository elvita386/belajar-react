import { useState } from "react";

export default function Helloworld() {
 
  const [lampu, setLampu] = useState(false); 

  const HandleLampu = () => {
    setLampu(lampu === true ? false :true)
  }

  return (
    <div>
    <button onClick={HandleLampu}>{lampu === false ? 'off' : 'on'}</button>
    {lampu === false ? <div>Lampu ini sedang mati </div> : <div>lampu ini sedang hidup</div>}
    </div>
  );
}
