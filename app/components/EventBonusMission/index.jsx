'use client';
import {React, useEffect, useState} from 'react';
import Image from 'next/image';
import bonus2Header from '../../assets/images/bonusMission/Bonus2Header.png';
import bonus2Back from '../../assets/images/bonusMission/Bonus2Back.png';
import bonus2Body0 from '../../assets/images/bonusMission/Bonus2Body0.png';
import bonus2Body1 from '../../assets/images/bonusMission/Bonus2Body1.png';
import bonus2Body2 from '../../assets/images/bonusMission/Bonus2Body2.png';
import bonus2Body3 from '../../assets/images/bonusMission/Bonus2Body3.png';
import bonus2Body4 from '../../assets/images/bonusMission/Bonus2Body4.png';
import bonus2Body5 from '../../assets/images/bonusMission/Bonus2Body5.png';
import bonus2Body6 from '../../assets/images/bonusMission/Bonus2Body6.png';
import bonus2Body7 from '../../assets/images/bonusMission/Bonus2Body7.png';
import bonus2Body8 from '../../assets/images/bonusMission/Bonus2Body8.png';
import bonus2Body9 from '../../assets/images/bonusMission/Bonus2Body9.png';
import bonus2Body10 from '../../assets/images/bonusMission/Bonus2Body10.png';

import './EventBonusMission.scss';


function EventTodayMission({bonusMissionCount}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (bonusMissionCount > 10) {
            bonusMissionCount = 10;
        }
        setCurrentIndex(bonusMissionCount);
    }, [bonusMissionCount]);

    const BonusBodyImage = ({index}) => {
        if (index === 0) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body0} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 1) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body1} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 2) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body2} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 3) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body3} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 4) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body4} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 5) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body5} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 6) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body6} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 7) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body7} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 8) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body8} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 9) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body9} alt={`attendance`} width={500} height={500}/>;
        } else if (index === 10) {
            return <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Body10} alt={`attendance`} width={500} height={500}/>;
        }
    };

    return (
        <div className='bonus-body-back'>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Header} alt='button' width={500} height={500}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={bonus2Back} alt='button' width={500} height={500}/>
            <div className='bonus-body'>
                <BonusBodyImage index={currentIndex}/>
            </div>
        </div>

    );
}

export default EventTodayMission;