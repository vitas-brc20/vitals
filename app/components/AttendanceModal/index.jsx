'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';
import 'moment/locale/ko';

import header from '@/app/assets/images/attendanceModal/1.png';
import button2 from '@/app/assets/images/attendanceModal/3.png';

import attendanceBackground from '@/app/assets/images/attendanceModal/attendance-back.png';
import attendance0 from '@/app/assets/images/attendanceModal/attendance0.png';
import attendance1 from '@/app/assets/images/attendanceModal/attendance1.png';
import attendance2 from '@/app/assets/images/attendanceModal/attendance2.png';
import attendance3 from '@/app/assets/images/attendanceModal/attendance3.png';
import attendance4 from '@/app/assets/images/attendanceModal/attendance4.png';
import attendance5 from '@/app/assets/images/attendanceModal/attendance5.png';
import attendance6 from '@/app/assets/images/attendanceModal/attendance6.png';
import attendance7 from '@/app/assets/images/attendanceModal/attendance7.png';
import attendance8 from '@/app/assets/images/attendanceModal/attendance8.png';

import './AttendanceModal.scss'; // 모달에 대한 스타일
import useStore from '@/app/stores/store';

moment.tz.setDefault('Asia/Seoul');

const imageUrls = [
    header,
    button2,
    attendanceBackground,
    attendance0,
    attendance1,
    attendance1,
    attendance2,
    attendance3,
    attendance4,
    attendance5,
    attendance6,
    attendance7,
    attendance8,
];

const AttendanceModal = ({
                             dayObject,
                             calendarData,
                             attendanceCount,
                             showToast,
                             progressAttendanceEvent,
                             isAttendanceModalVisible,
                             onClose,
                         }) => {
    const currentDate = useStore((state) => state.currentDate);

    const getAttendanceImage = () => {
        if (attendanceCount === 0) {
            return attendance0;
        } else if (attendanceCount === 1) {
            return attendance1;
        } else if (attendanceCount === 2) {
            return attendance2;
        } else if (attendanceCount === 3) {
            return attendance3;
        } else if (attendanceCount === 4) {
            return attendance4;
        } else if (attendanceCount === 5) {
            return attendance5;
        } else if (attendanceCount === 6) {
            return attendance6;
        } else if (attendanceCount === 7) {
            return attendance7;
        } else if (attendanceCount === 8) {
            return attendance8;
        }
        return attendance0;
    };

    const handleAttendance = (dayObject) => {
        try {
            //TODO 2회 불리지 않도록 체크
            progressAttendanceEvent();
            return;
        } catch (error) {
        }
    };

    const handleAttendanceButton = () => {
        let todayObject = calendarData.find((item) => item.eventDay === currentDate.format('YYYY-MM-DD'));

        if (dayObject.eventDay !== todayObject.eventDay || todayObject.missionType !== 'ATTENDANCE_BONUS') {
            showToast('오늘의 미션이 아니에요!\n확인 후 다음에 다시 참여해주세요.', '#FF66CC', '#fff');
        } else {
            if (todayObject.resultType === 'NOT_YET') {
                handleAttendance(dayObject);
            } else {
                showToast('이미 응모 완료되었습니다\n내일 다시 응모해주세요.', '#FFFFFF', '#352CE0');
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!isAttendanceModalVisible) {
        return <></>;
    }

    return (
        <div className='attendance-modal-backdrop' onClick={onClose}>
            <div className='modal-content'>
                {/*<Image onContextMenu={() => {
                return false;
            }} style={{ WebkitTouchCallout: 'none' }} onContextMenu={()=>{return false}} style={{ WebkitTouchCallout:'none' }} src={header} alt="header"/>*/}
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={attendanceBackground} alt='보너스 출첵 이미지' sizes='100vw'
                       width={500} height={500}/>
                <div className='attendance-image' onClick={(e) => e.stopPropagation()}>
                    <Image onContextMenu={() => {
                        return false;
                    }} src={getAttendanceImage()} alt='보너스 출첵 이미지'
                           style={{padding: '10px 33px', WebkitTouchCallout: 'none'}}
                           onClick={handleAttendanceButton} sizes='100vw'
                           width={500} height={500}/>
                </div>
            </div>
        </div>
    );
};

export default AttendanceModal;
