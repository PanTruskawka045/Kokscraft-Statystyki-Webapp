import React from "react";
import {Link} from "react-router-dom";
import {FilledStarIcon} from "./icon/StarIcon";

function Navbar() {
    return (
        <nav className={"navbar fixed bg-primary transition-[width] duration-500 ease-in-out"}>
            <ul className={"navbar-nav"}>
                <li className="logo">
                    <div className="nav-link">
                        <span className="link-text logo-text">Kokscraft</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    className="text-nav-primary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    className="text-nav-secondary"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to={"/player/stats"} className="nav-link">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 478 478"
                             className="svg-inline--fa fa-w-16 fa-9x">
                            <g>
                                <path
                                    d="M119.5,187.75H17.1c-9.4,0-17,7.6-17.1,17.1v256c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-256 C136.6,195.35,128.9,187.75,119.5,187.75z"
                                    fill="currentColor" className="text-nav-primary"/>
                            </g>
                            <g>
                                <path
                                    d="M290.2,0.05H187.8c-9.4,0-17.1,7.6-17.1,17v443.8c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1V17.15 C307.3,7.65,299.6,0.05,290.2,0.05z"
                                    fill="currentColor" className="text-nav-secondary"/>
                            </g>
                            <g>
                                <path
                                    d="M460.9,136.55H358.5c-9.5,0-17.1,7.6-17.1,17.1v307.2c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-307.2 C478,144.15,470.3,136.55,460.9,136.55z"
                                    fill="currentColor" className="text-nav-primary"/>
                            </g>
                        </svg>
                        <span className="link-text">Statystyki</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/player/friends"} className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"
                             className="svg-inline--fa fa-w-16 fa-9x scale-150">
                            <g className="fa-group">
                                <path className="text-nav-primary"
                                      d="M96,128A128,128,0,1,1,224,256,128,128,0,0,1,96,128ZM0,482.3A178.26,178.26,0,0,1,178.3,304h91.4A178.26,178.26,0,0,1,448,482.3,29.7,29.7,0,0,1,418.3,512H29.7A29.7,29.7,0,0,1,0,482.3Z"
                                      fill="currentColor"/>
                                <path className="text-nav-secondary"
                                      d="M609.3,512H471.4a64,64,0,0,0,8.6-32v-8a199.54,199.54,0,0,0-69.8-151.8c2.4-.1,4.7-.2,7.1-.2h61.4A161.28,161.28,0,0,1,640,481.3,30.71,30.71,0,0,1,609.3,512ZM432,256a111.77,111.77,0,0,1-79.3-32.9,160.06,160.06,0,0,0,13-169.4A112,112,0,1,1,432,256Z"
                                      fill="currentColor"/>
                            </g>
                        </svg>
                        <span className="link-text">Znajomi</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="../../../kokscraft/bot" className="nav-link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot"
                             className="svg-inline--fa fa-robot fa-w-20" role="img"
                             viewBox="0 0 640 512">
                            <path fill="currentColor" className="text-nav-secondary"
                                  d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
                        </svg>
                        <span className="link-text">Bot<br/>discordowy</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="../../../kokscraft/bot/faq" className="nav-link">
                        <svg x="0px" y="0px"
                             viewBox="0 0 973.1 973.1">
                            <g>
                                <path d="M502.29,788.199h-47c-33.1,0-60,26.9-60,60v64.9c0,33.1,26.9,60,60,60h47c33.101,0,60-26.9,60-60v-64.9
                            C562.29,815,535.391,788.199,502.29,788.199z" fill="currentColor"
                                      className="text-nav-secondary"/>
                                <path d="M170.89,285.8l86.7,10.8c27.5,3.4,53.6-12.4,63.5-38.3c12.5-32.7,29.9-58.5,52.2-77.3c31.601-26.6,70.9-40,117.9-40
                c48.7,0,87.5,12.8,116.3,38.3c28.8,25.6,43.1,56.2,43.1,92.1c0,25.8-8.1,49.4-24.3,70.8c-10.5,13.6-42.8,42.2-96.7,85.9
                c-54,43.7-89.899,83.099-107.899,118.099c-18.4,35.801-24.8,75.5-26.4,115.301c-1.399,34.1,25.8,62.5,60,62.5h49
                c31.2,0,57-23.9,59.8-54.9c2-22.299,5.7-39.199,11.301-50.699c9.399-19.701,33.699-45.701,72.699-78.1
                C723.59,477.8,772.79,428.4,795.891,392c23-36.3,34.6-74.8,34.6-115.5c0-73.5-31.3-138-94-193.4c-62.6-55.4-147-83.1-253-83.1
                c-100.8,0-182.1,27.3-244.1,82c-52.8,46.6-84.9,101.8-96.2,165.5C139.69,266.1,152.39,283.5,170.89,285.8z"
                                      fill="currentColor" className="text-nav-secondary"/>
                            </g>
                        </svg>
                        <span className="link-text">FAQ</span>
                    </a>
                </li>

                <li className="nav-item">
                    <Link to={"favourites"} className="nav-link">
                        {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
                        {/*     viewBox="0 0 576 512">*/}
                        {/*    <path className="text-nav-primary"*/}
                        {/*        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>*/}
                        {/*</svg>*/}
                        <FilledStarIcon className={"text-nav-secondary"}/>
                        <span className="link-text">Ulubieńcy</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link to={"/speedbuilders/stats"} className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 726.67 722.83">
                            <defs>
                            </defs>
                            <rect fill="currentColor" className="text-nav-primary" x=".91" y="182.23" width="337.46"
                                  height="153.6"/>
                            <rect fill="currentColor" className="text-nav-primary" x="389.21" y="182.23" width="337.46"
                                  height="153.6"/>
                            <rect fill="currentColor" className="text-nav-primary" x="157.98" y="388.29" width="411.05"
                                  height="153.6"/>
                            <rect fill="currentColor" className="text-nav-secondary" y="388.29" width="107.57"
                                  height="153.6"/>
                            <rect fill="currentColor" className="text-nav-primary" x="618.63" y="388.29" width="108.04"
                                  height="153.6"/>
                            <path fill="currentColor" className="text-nav-primary"
                                  d="M.91,594.35h337.46v128.49H104.75c-57.31,0-103.84-46.53-103.84-103.84v-24.65h0Z"/>
                            <path fill="currentColor" className="text-nav-secondary"
                                  d="M393.68,594.35h328.5c2.47,0,4.48,2.01,4.48,4.48v16.77c0,59.19-48.05,107.24-107.24,107.24h-225.74c-2.47,0-4.48-2.01-4.48-4.48v-119.53c0-2.47,2.01-4.48,4.48-4.48Z"/>
                            <rect fill="currentColor" className="text-nav-secondary" x="157.46" width="411.57"
                                  height="129.77"/>
                            <path fill="currentColor" className="text-nav-primary"
                                  d="M107.57,0h0v129.77H0v-22.2C0,48.2,48.2,0,107.57,0Z"/>
                            <path fill="currentColor" className="text-nav-secondary"
                                  d="M618.63,0h0c59.63,0,108.04,48.41,108.04,108.04v21.73h-108.04V0h0Z"/>
                        </svg>
                        <span className="link-text">Statystyki Speed Builders</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/speedbuilders/leaderboards"} className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path className="text-nav-secondary" fill="currentColor"
                                d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                        </svg>
                        <span className="link-text">Topki Speed Builders</span>
                    </Link>
                </li>


            </ul>
        </nav>
    );
}


export default Navbar;
