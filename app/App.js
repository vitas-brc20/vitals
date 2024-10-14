'use client';
import React, {useState} from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';
//hooks
//components
import EventHeader from './components/EventHeader';
import EventFooter from './components/EventFooter';
import Image from 'next/image';//css
import './App.scss';

//images
import footerImage from './assets/images/footer.png';
import MainSwiper from "./components/MainSwiper";
import vitals from "./assets/images/vitals/vitals.png";
import {Fade} from "react-awesome-reveal";
import useToast from "./hooks/useToast";
import Toast from "./components/Toast";
moment.tz.setDefault('Asia/Seoul');

function App() {
    const {toast, showToast, hideToast} = useToast();
    const [page, setPage] = useState('HOME');

    function copy(txt) {

        navigator.clipboard.writeText(txt);

        showToast('copyed.', '#4A89FF', '#fff');
    }

    return (

        <>
            <div className='event-page'>
                <EventHeader animate={true}/>
                {page === 'HOME' ?
                    <>
                        <div className='vitals-home'>
                            <Fade cascade damping={1}>
                                <p>Hello, </p>
                                <p>We </p>
                                <p>Are </p>
                                <p>Vitals.</p>
                            </Fade>
                        </div>
                        <MainSwiper key={0} sliderImages={[
                            {src: vitals, title: 'vitals'}
                        ]} delay={3000}/>
                        <div className='vitals-description'>
                            <Fade cascade damping={1}>
                                <p><strong>Ethereum</strong> for Fractal Bitcoin</p>
                                <p>WITH brc-20 <strong>$VITAS </strong> bridge</p>
                            </Fade>
                        </div>

                        <div className='vitals-info'>
                            <Fade cascade damping={1}>
                                <p><strong>$VITALS</strong> Available in</p>
                                <p>Unisat.io</p>
                                <p>And <strong>OKX</strong> Marketplace</p>
                                <button style={{
                                    backgroundColor: '#A1D6B2',
                                    borderRadius: '6px',
                                    width: '30vw',
                                    height: '5vh'
                                }}
                                        onClick={() => {
                                            window.location.href = 'https://fractal.unisat.io/market/brc20?tick=VITALS'
                                        }}>Unisat
                                </button>
                                <button style={{
                                    backgroundColor: '#A1D6B2',
                                    borderRadius: '6px',
                                    width: '30vw',
                                    height: '5vh'
                                }}
                                        onClick={() => {
                                            window.location.href = 'https://www.okx.com/web3/marketplace/inscription/fractal-ordinals/token/VITALS'
                                        }}>OKX
                                </button>
                            </Fade>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                {page === 'INFO' ?
                    <>


                        <div className='vitals-info-ceo'>
                            <div className='vitals-info-ceo-text'>
                                <br/>
                                <div className='vitals-info-ceo-image-container'>
                                    <strong>VITALS</strong><br/>
                                </div>

                                <p>Hi,</p>
                                <p>this is VITALS. We Are building <strong className='word-1'> Ethereum</strong> inside <strong
                                    className='word-2'>Bitcoin.</strong></p>

                                <p>大家好，</p>
                                <p>我们是 $VITALS。正在 <strong className='word-1'> Bitcoin</strong> 内构建 <strong
                                    className='word-2'>Ethereum。</strong></p>

                                <p><br/></p>
                                <p style={{textAlign: 'right'}}>October 14, 2024</p>
                                <p><br/></p>
                                <p style={{textAlign: 'right'}}>$VITALS Community</p>
                            </div>
                        </div>


                    </>
                    :
                    <>
                    </>
                }
                {page === 'PARTNER' ?
                    <>


                        <div className='vitals-info-ceo'>
                            <div className='vitals-info-ceo-text'>
                                <br/>

                                <p>If you want to partner with VITALS?</p>

                                <p><br/></p>
                                <button style={{
                                    backgroundColor: '#A1D6B2',
                                    borderRadius: '6px',
                                    width: '30vw',
                                    height: '5vh'
                                }}
                                        onClick={() => {
                                            window.location.href = 'https://x.com/vitals_fbrc20'
                                        }}>DM on X
                                </button>
                            </div>
                        </div>


                    </>
                    :
                    <>
                    </>
                }
                <EventFooter footerImage={footerImage} page={page} setPage={setPage}/>
            </div>
            {toast.isVisible &&
                <Toast message={toast.message} backgroundColor={toast.backgroundColor} color={toast.color}
                       onClose={hideToast}/>}
        </>
    );
}

export default App;
