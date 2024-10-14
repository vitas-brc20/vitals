'use client';
import {React, useEffect, useState} from 'react';
import useStore from '../../stores/store';
import Image from 'next/image';
import todayHeader from '../../assets/images/todayMission/today-header.png';
import todayMissionImage from '../../assets/images/todayMission/today-mission-image.png';
import todayGoodsImage from '../../assets/images/todayMission/today-goods-back.png';

import './EventTodayMission.scss';
import EventApply from '../EventApply';
import missionInfo from '../../types/missionInfo';

const EventImage = ({currentMissionInfo}) => {
    if (!currentMissionInfo) {
        return null;
    }
    return <Image onContextMenu={() => {
        return false;
    }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
        return false;
    }} style={{WebkitTouchCallout: 'none'}} src={currentMissionInfo?.image} alt={'TodayImage'} width={500}
                  height={500}/>;
};

const EventText = ({currentMissionInfo}) => {
    if (!currentMissionInfo) {
        return null;
    }
    return currentMissionInfo?.text;
};


function EventTodayMission({
                               profile,
                               calendarData,
                               scrollTarget,
                               bonusMissionCount,
                               progressJoinEvent,
                               showModal,
                               hideModal,
                               showToast,
                           }) {
    const currentDate = useStore((state) => state.currentDate);
    const [currentMissionInfo, setCurrentMissionInfo] = useState(null);
    const [currentItemInfo, setCurrentItemInfo] = useState(null);

    useEffect(() => {
        const currentMissionType = calendarData.find((item) => item.eventDay === currentDate.format('YYYY-MM-DD'));

        setCurrentMissionInfo(missionInfo[currentMissionType?.missionType]);
        setCurrentItemInfo({'text': currentMissionType?.itemName, 'image': currentMissionType?.itemImageUrl});
    }, [currentDate, calendarData]);

    if (currentMissionInfo === missionInfo.ATTENDANCE_BONUS) {
        return;
    }

    // const showTodayMission = () => {
    //     showModal(
    //         currentMissionInfo?.failureMessageTitle,
    //         currentMissionInfo?.failureMessageText,
    //         [
    //             {
    //                 label: currentMissionInfo?.failureButtonTitle,
    //                 onClick: () => {
    //                     currentMissionInfo?.failureButtonAction()
    //                 },
    //             },
    //         ],
    //         () => {
    //             hideModal(false)
    //         }
    //     )
    // }

    function goMissionDeepLink() {
        window.location.href = currentMissionInfo?.deeplink;
    }

    return (
        <div className='event-page'>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} style={{WebkitTouchCallout: 'none'}} src={todayHeader}
                   alt="Today's Mission" sizes='100vw'
                   width={500} height={500}/>
            <div className='today-back' onClick={() => {
                goMissionDeepLink();
            }}>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={todayMissionImage} alt="Today's Mission" sizes='100vw'
                       width={500} height={500}/>
                <div className='today-image'>
                    <EventImage currentMissionInfo={currentMissionInfo}/>
                </div>
                <div className='today-text'>
                    <EventText currentMissionInfo={currentMissionInfo}/>
                </div>
            </div>
            <div className='today-back'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={todayGoodsImage} alt="Today's Goods" sizes='100vw'
                       width={500} height={500}/>
                <div className='today-item-image'>
                    <EventImage currentMissionInfo={currentItemInfo}/>
                </div>
                <div className='today-text'>
                    <EventText currentMissionInfo={currentItemInfo}/>
                </div>
            </div>

            <EventApply
                profile={profile}
                calendarData={calendarData}
                scrollTarget={scrollTarget}
                bonusMissionCount={bonusMissionCount}
                progressJoinEvent={progressJoinEvent}
                showToast={showToast}
                showModal={showModal}
                hideModal={hideModal}
            />
        </div>

    );
}

export default EventTodayMission;