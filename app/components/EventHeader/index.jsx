'use client'
import Image from 'next/image';
import logo from '../../assets/images/vitals/vitals.png';
import React, {useCallback, useEffect, useRef} from "react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function EventHeader({animate}) {
    SwiperCore.use([Autoplay, Navigation]);

    return (
        <>
            <div className='event-header'>
                <div className='header-tab-nav-container'>
                    <div className='header-tab'>
                        <Image src={logo} alt={'logo'} style={{width: '10vw'}}></Image>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;$VITALS</p>
                        <a href='https://fractal.unisat.io/market/brc20?tick=VITALS'>&nbsp;&nbsp;&nbsp;&nbsp;https://fractal.unisat.io/market/brc20?tick=VITALS</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EventHeader;
