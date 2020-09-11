
import React from 'react';
import HeaderCss from '../../styles/Header.module.css'
// console.log(logo);
export function Header() {
    return (
        <div className={`${HeaderCss.colorfff}`}>
            <div className="container pl-10 pr-10 mx-auto">
                <div className={`flex items-center justify-between ${HeaderCss.hspec84} `} >
                    <div>
                        <img className="" src="../img/logo.png" alt="logo" />
                    </div>
                    <div >
                        <div className={`relative ${HeaderCss.hspec50} ${HeaderCss.wspec450}`}>
                            <input className={`relative pr-8 pl-8 rounded-full py-2 px-4 ${HeaderCss.hspec50} ${HeaderCss.wspec450}`} value="giang"></input>
                            <button className={`absolute h-10 w-10`}><img src="../img/logo.png" /></button>
                        </div>
                    </div>
                    <div >
                        <div>
                            <input className="w-30" value="giang"></input>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}