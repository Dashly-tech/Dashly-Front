import { IoMenu } from "react-icons/io5";
import "./header.css";
import HeaderRight from "./HeaderRight";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

export default function Header() {
    const [personCount, setPersonCount] = useState(1);
    const [open,setOpen]= useState(false)
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <h2 className="header__logo">Dashly</h2>
        </div>
        <div>
          <HeaderRight personCount={personCount} setPersonCount={setPersonCount} />
        </div>
      <div className="hamburger_menu" onClick={()=>setOpen(true)}>
        <IoMenu size={24} />
      </div>
      </div>
     <MobileHeader
       isOpen={open}
       personCount={personCount}
       setIsOpen={setOpen}
       setPersonCount={setPersonCount}
     />
    </header>
  );
}
