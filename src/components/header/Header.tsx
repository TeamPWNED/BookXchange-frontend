'use client'

import {Fragment, useState, useEffect} from "react";
import { Button } from "../ui/button";
import { Navbar } from "../navbar/Navbar";
const Header = () => {
    return (
        <Fragment>
            <div className={`header-section header-transparent sticky-header section`}>
                <div className="header-inner">
                    <div className="container position-relative">
                        <div className="row flex justify-content-between align-items-center">
                            <div className="col-xl-2 col-auto order-0 p-2">
                               BookXchange
                            </div>
                            <div className="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                                <div className="menu-column-area d-none d-xl-block position-static">
                                    <Navbar/>
                                </div>

                                <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                    <button type="button" className="toggle">
                                        <i className="icon-top"></i>
                                        <i className="icon-middle"></i>
                                        <i className="icon-bottom"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2">
                                <Button name='Contact Us' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;