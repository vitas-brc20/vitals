import React from 'react';
import refreshIcon from '../../assets/images/ic-refresh.svg';
import Image from 'next/image';

function RefreshButton({onClick}) {
    return (
        <div className='refresh-button-container'>
            <button onClick={onClick}>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={refreshIcon} alt='Refresh' sizes='100vw'
                       width={500} height={500}/>
            </button>
        </div>
    );
}

export default RefreshButton;
