import Image from 'next/image';
import howTo123 from '@/app/assets/images/saving-point/howToBanner/how-to-123.png';
import howTo4 from '@/app/assets/images/saving-point/howToBanner/how-to-4.png';
import howTo4Img from '@/app/assets/images/saving-point/howToBanner/how-to-4-img.gif';
import howAboutMissionFailed from '@/app/assets/images/saving-point/howToBanner/mission-failed.png';
import howToGetGifticon from '@/app/assets/images/saving-point/howToBanner/get-gifticon.png';
import whatIsSavingPoint from '@/app/assets/images/saving-point/howToBanner/saving-point.png';
import HowToModal from '@/app/components/HowToSavingPoint/HowToModal';
import {useState} from 'react';

function HowToSavingPoint() {
    const [isHowToModalVisible, setIsHowToModalVisible] = useState(false);
    const [howToModalInfo, setHowToModalInfo] = useState('');

    return (
        <>
            <div className='event-how-to'>
                <div className='how-to'>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} className='step123' src={howTo123} alt='Event Text'
                           sizes='100vw'
                           width={500} height={500}/>
                    <div className='step4'>
                        <Image onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} className='step4img' src={howTo4Img} alt='Event Text'
                               sizes='10vw'
                               width={50} height={50}/>
                        <Image onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} src={howTo4} alt='Event Text' sizes='100vw'
                               width={500} height={500}/>
                    </div>

                </div>
                <div className='help-popup-banner'>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} src={whatIsSavingPoint} alt='What is Saving Point'
                           sizes='100vw'
                           width={500} height={500} onClick={() => {
                        setHowToModalInfo('saving-point')
                        setIsHowToModalVisible(true)
                    }}/>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} src={howAboutMissionFailed} alt='How About Mission Failed'
                           sizes='100vw'
                           width={500} height={500} onClick={() => {
                        setHowToModalInfo('mission-failed')
                        setIsHowToModalVisible(true)
                    }}/>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} src={howToGetGifticon} alt='How About Mission Failed'
                           sizes='100vw'
                           width={500} height={500} onClick={() => {
                        setHowToModalInfo('get-gifticon')
                        setIsHowToModalVisible(true)
                    }}/>
                </div>
                <HowToModal
                    howToModalInfo={howToModalInfo}
                    isHowToModalVisible={isHowToModalVisible}
                    onClose={() => setIsHowToModalVisible(false)}
                />
            </div>
        </>
    );
}

export default HowToSavingPoint;
