import React,{useContext} from "react";
import { MyContext } from '../context';
const Stage2 = () => {
  const context = useContext(MyContext);
  return (
    <>
    <div className="result_wrapper">
        <h3>The losser is:</h3>
        <div>{context.state.result}</div>
    </div>
    <div 
      className="action_button"
      onClick={()=>window.location.reload(false)}
    >
      START OVER
    </div>
    <div 
      className="action_button btn_2"
      onClick={()=>context.getNewlooser()}
    >
      Get New Looser
    </div>
    </>
  );
}

export default Stage2;
