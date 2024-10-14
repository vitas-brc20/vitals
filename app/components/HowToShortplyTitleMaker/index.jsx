import Image from 'next/image';
import reward from '@/app/assets/images/shortply-title-maker/reward.png';
import howTo from '@/app/assets/images/shortply-title-maker/how-to.png';

function HowToShortplyTitleMaker() {

    return (
        <>
            <div className='reward'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={reward} alt='Event Text' sizes='100vw'
                       width={500} height={500}/>
            </div>
            <div className='how-to'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={howTo} alt='Event Text' sizes='100vw'
                       width={500} height={500}/>
            </div>
        </>
    );
}

export default HowToShortplyTitleMaker;
