'use client';
import React from 'react';
import Image from 'next/image';

import './ShortplyTitleMakerLastWinner.scss';
import playIcon from "../../assets/images/shortply-title-maker/main/play-icon.png";
import winnerAcademy from "../../assets/images/shortply-title-maker/winner/winner-academy.png";
import moment from "moment-timezone";

function ShortplyTitleMakerLastWinner({lastWinnerInfo}) {
    const goDeeplink = () => {
        window.location.href = 'vitals://deeplink/profile?nickname=' + lastWinnerInfo.nickname + ''
    }

    function goShortplyDeeplink() {
        window.location.href = 'vitals://deeplink/shortply?id=' + lastWinnerInfo.shortplyId + ''
    }

    return (
        <>
            {lastWinnerInfo?.shortplyTitleMakerId ?
                <>
                    <div className='shortply-title-maker-winner-background'>
                        <div className='shortply-title-maker-winner'>
                            <div className='shortply-title-maker-winner-title'>
                                <Image onContextMenu={() => {
                                    return false;
                                }} style={{WebkitTouchCallout: 'none'}}
                                       className='shortply-title-maker-winner-title-image' src={winnerAcademy}
                                       alt={'winnerAcademy'} width={50} height={50}/>
                            </div>
                            <div className='shortply-title-maker-winner-image-container'>
                                <div className='shortply-title-maker-winner-image-wrapper'>
                                    <Image
                                        className='shortply-title-maker-winner-image'
                                        width={50}
                                        height={50}
                                        style={{
                                            position: "relative",
                                            borderRadius: 11,
                                        }}
                                        src={lastWinnerInfo.thumbnailUrl}
                                        alt={''}
                                        onClick={() => {
                                            goShortplyDeeplink()
                                        }}
                                    />
                                    <Image onContextMenu={() => {
                                        return false;
                                    }} style={{WebkitTouchCallout: 'none'}}
                                           className='shortply-title-maker-winner-image-play-icon' src={playIcon}
                                           alt="Event Text" sizes="50vw"
                                           width={50} height={50} onClick={() => {
                                        goShortplyDeeplink()
                                    }}/>
                                    <div className='shortply-title-maker-winner-image-shadow-dark'/>
                                    <div className='shortply-title-maker-winner-image-shadow-bright'/>
                                </div>
                            </div>
                            <div className='shortply-title-maker-winner-day-container'>
                                <div className='shortply-title-maker-winner-day-wrapper'>
                                    <div className='shortply-title-maker-winner-day-text'>
                                        {moment.utc(lastWinnerInfo?.eventDay).local().format('M월 D일')}{' 수상작'}
                                    </div>
                                </div>
                                <div className='shortply-title-maker-winner-content-container'/>
                                <div className='shortply-title-maker-winner-content-text'>
                                    {'#'}{lastWinnerInfo.hashtagName}
                                    <div className='shortply-title-maker-winner-content-nickname' onClick={() => {
                                        goDeeplink()
                                    }}>
                                        {(lastWinnerInfo.nickname.length > 5) ? lastWinnerInfo.nickname.substring(0, 5) + '…' : lastWinnerInfo.nickname}{' 님'}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                </>
            }
        </>
    );
}

export default ShortplyTitleMakerLastWinner;
