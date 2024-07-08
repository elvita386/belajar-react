import { useState } from "react";
import { SwitchButton ,Lamp} from "./SwitcthLamp.styled";


export function SwitcthLamp() {
    const[isOn,setIsOn] =useState (false);

    const handleIsOn = () =>{
setIsOn(!isOn);
    };
    return(
        <div>
            <div>
                <Lamp $background={isOn}/>
            </div>
            <SwitchButton $background={isOn} onClick={handleIsOn}>            {isOn ? "On":"Off"}</SwitchButton>
        </div>
    );
}