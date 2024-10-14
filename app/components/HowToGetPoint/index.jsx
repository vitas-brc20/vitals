import Image from 'next/image';
import description from '@/app/assets/images/saving-point/howToGetPoint/description.png';
import wte from '@/app/assets/images/saving-point/howToGetPoint/wte.png';
import shortply from '@/app/assets/images/saving-point/howToGetPoint/shortply.png';
import marketingShortply from '@/app/assets/images/saving-point/howToGetPoint/marketing-shortply.png';
import feedUpload from '@/app/assets/images/saving-point/howToGetPoint/feed-upload.png';
import celpick from '@/app/assets/images/saving-point/howToGetPoint/celpick.png';

function HowToGetPoint() {

    function goToDeeplink(deeplink) {
        if (deeplink === 'wte') {
            window.location.href = 'vitals://deeplink/video';
        }
        if (deeplink === 'shortply') {
            window.location.href = 'vitals://deeplink/video';
        }
        if (deeplink === 'marketingShortply') {
            window.location.href = 'vitals://deeplink/profile/shortply';
        }
        if (deeplink === 'feedUpload') {
            window.location.href = 'vitals://deeplink/home';
        }
        if (deeplink === 'celpick') {
            window.location.href = 'vitals://deeplink/celpick';
        }
    }

    return (
        <>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={description} alt={'description'}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={wte} alt={'wte'} onClick={() => {
                goToDeeplink('wte')
            }}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={shortply} alt={'shortply'} onClick={() => {
                goToDeeplink('shortply')
            }}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={marketingShortply} alt={'marketingShortply'} onClick={() => {
                goToDeeplink('marketingShortply')
            }}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={feedUpload} alt={'feedUpload'} onClick={() => {
                goToDeeplink('feedUpload')
            }}/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={celpick} alt={'celpick'} onClick={() => {
                goToDeeplink('celpick')
            }}/>
        </>
    );
}

export default HowToGetPoint;
