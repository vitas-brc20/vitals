'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import header from '../../assets/images/beforeModal/question.png';
import button1 from '../../assets/images/beforeModal/2.png';
import button2 from '../../assets/images/beforeModal/3.png';

import './BeforeModal.scss';

moment.tz.setDefault('Asia/Seoul');

const imageUrls = [header, button1, button2];

const BeforeModal = ({onClose, handleAdvertisement, isBeforeModalVisible}) => {
    const [loadedImages, setLoadedImages] = useState(0);

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

    if (loadedImages !== imageUrls.length || !isBeforeModalVisible) {
        return <></>;
    }

    return (
        <div className='before-modal-backdrop' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='modal-content-text'>
                    <p style={{fontSize: '24px', marginBottom: '10px'}}>이벤트 알림을 받아보시겠어요?</p>
                    <p>이벤트 경품, 미션 등</p>
                    <p>다양한 정보와 소식을 알려드릴게요.</p>
                </div>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} placeholder={'blur'}
                       onContextMenu={() => {
                           return false;
                       }} style={{WebkitTouchCallout: 'none'}}
                       src={imageUrls[1]}
                       alt='좋아요 버튼'
                       onClick={() => {
                           console.log('눌리니?');
                           handleAdvertisement();
                       }}
                       sizes='100vw'
                       width={500} height={500}
                />
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} placeholder={'blur'}
                       onContextMenu={() => {
                           return false;
                       }}
                       src={imageUrls[2]}
                       alt='다음에 할게요 버튼'
                       style={{marginTop: '10px', WebkitTouchCallout: 'none'}}
                       onClick={() => {
                           onClose();
                       }}
                       sizes='100vw'
                       width={500} height={500}
                />
            </div>
        </div>
    );
};

export default BeforeModal;
