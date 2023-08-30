import { useCallback, useState } from "react";
import Profile from "./Profile";
let i=0;

function Callback2() {
    const [name, setName] = useState('');
    
    const onSave =useCallback(() => { console.log(i++)},[name]);
  
    return (
      <div className="App">
        <input
          type="text"   
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Profile onSave = {onSave}/>
      </div>
    );
  }

export default Callback2;