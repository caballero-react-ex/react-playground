import React, {useContext} from 'react';
import { RoomContext } from './RoomContext';

const Room = () => {
  const { isLit, onToggleLight }  = useContext(RoomContext)

  return(
    <div style={{backgroundColor: `${isLit ? 'yellow' : 'lightgrey'}` }} >
      The room is {isLit ? 'lit' : 'dark'}.
      <button onClick={onToggleLight}>
        Flip
      </button>
    </div>
  );
};

export default Room;