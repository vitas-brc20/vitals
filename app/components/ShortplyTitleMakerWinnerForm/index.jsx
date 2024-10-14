'use client';
import React from 'react';
import Image from 'next/image';

import './ShortplyTitleMakerWinnerForm.scss';
import playIcon from "../../assets/images/shortply-title-maker/main/play-icon.png";
import moment from "moment-timezone";

function ShortplyTitleMakerWinnerForm({winner}) {
    const goDeeplink = () => {
        window.location.href = 'vitals://deeplink/profile?nickname=' + winner.nickname + '';
    }

    function goShortplyDeeplink() {
        window.location.href = 'vitals://deeplink/shortply?id=' + winner.shortplyId + '';
    }

    return (
        <>
            <div className='shortply-title-maker-winner-list-container'>
                <div className='shortply-title-maker-winner-list-wrapper'>
                    <div className='shortply-title-maker-winner-list-image-container'>
                        <div className='shortply-title-maker-winner-list-image-wrapper'>
                            <Image
                                className='shortply-title-maker-winner-list-image'
                                width={50}
                                height={50}
                                style={{
                                    position: "relative",
                                    borderRadius: 11,
                                }}
                                src={winner.thumbnailUrl}
                                alt={''}
                                onClick={() => {
                                    goShortplyDeeplink()
                                }}
                            />
                            <Image onContextMenu={() => {
                                return false;
                            }} style={{WebkitTouchCallout: 'none'}}
                                   className='shortply-title-maker-winner-list-image-play-icon' src={playIcon}
                                   alt="Event Text" sizes="50vw"
                                   width={50} height={50} onClick={() => {
                                goShortplyDeeplink()
                            }}/>
                            <div className='shortply-title-maker-winner-list-image-shadow-dark'/>
                            <div className='shortply-title-maker-winner-list-image-shadow-bright'/>
                        </div>
                        <div style={{marginRight: '9vw', marginTop: '1vh'}}>
                            <div className='shortply-title-maker-winner-list-day'>
                                {moment.utc(winner?.eventDay).local().format('M월 D일')}
                            </div>
                            <div className='shortply-title-maker-winner-list-content'>
                                {'#'}{winner.hashtagName}
                            </div>
                            <div className='shortply-title-maker-winner-list-nickname' onClick={() => {
                                goDeeplink()
                            }}>
                                {(winner.nickname.length > 5) ? winner.nickname.substring(0, 5) + '…' : winner.nickname}{' 님'}
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}

export default ShortplyTitleMakerWinnerForm;
