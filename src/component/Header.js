import React from 'react'
import style from './Header.module.css'
const Header=()=>{
    return(
       <>
         <div className={style.main1}>
    <div>
      <div className={style.Edyoda}>EDYODA</div>
      <div className={style.a2}>stories</div>
    </div>
    <div className={style.a3}>
      Explore Catgories
      <select>
        <option>Artificial Intelligence</option>
        <option>Cloud Computing</option>
        <option>DevOps</option>
        <option>Programming Languages</option>
        <option>Others</option>
      </select>
    </div>
    <div className={style.a1}>EdYoda is free learning and knowledge<br/>
      sharing platform for techies</div>
    <div className={style.button}>Go to main webside</div>
  </div>
    </>
    )
};
export default Header;