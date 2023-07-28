import React from 'react';
import './headerStyle.css'


const Header = () => {
    return (
        <div>
            <nav className="navStyle">
                <div className="navDivStyle">
                
                        <img src="https://i.ibb.co/L06XcbH/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        
            
                    <div className="flex md:order-2">
                       <div className='flex gap-10'>
                       
                        <button
                            type="button"
                            className="navBtnStyleLogin"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="navBtnStyleGetStart"
                        >
                            Get started
                        </button>
                       </div>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="responsiveIcon"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul
                            className="navUlStyle"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="navLiStyleFirst"
                                    aria-current="page"
                                >
                                    Startups
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="navLiAnchorStyle"
                                >
                                    Rise Funding
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="navLiAnchorStyle"
                                >
                                    Learn
                                </a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;