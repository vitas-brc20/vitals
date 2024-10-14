'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import howAboutMissionFailed from '@/app/assets/images/saving-point/howToModal/mission-failed.png';
import howToGetGifticon from '@/app/assets/images/saving-point/howToModal/get-gifticon.png';
import whatIsSavingPoint from '@/app/assets/images/saving-point/howToModal/saving-point.png';
import './HowToModal.scss'; // 모달에 대한 스타일

moment.tz.setDefault('Asia/Seoul');

const HowToModal = ({howToModalInfo, isHowToModalVisible, onClose}) => {
    const [howToModalType, setHowToModalType] = useState('');

    useEffect(() => {
        if (howToModalInfo === 'get-gifticon') {
            setHowToModalType(howToGetGifticon)
        }
        if (howToModalInfo === 'mission-failed') {
            setHowToModalType(howAboutMissionFailed)
        }
        if (howToModalInfo === 'saving-point') {
            setHowToModalType(whatIsSavingPoint)
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
    }, [onClose]);


    if (!isHowToModalVisible || !howToModalInfo) {
        return <></>;
    }
    return (
        <div className='how-to-modal-backdrop' onClick={onClose}>
            <div className='modal-content'>
                <div className='how-to-modal-border'>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} src={howToModalType} alt={'HowTos'} sizes='100vw'
                           width={500} height={500}/>
                </div>
            </div>
        </div>
    );
};

export default HowToModal;
