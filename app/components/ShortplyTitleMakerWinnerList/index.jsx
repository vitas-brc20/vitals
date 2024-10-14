'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import './ShortplyTitleMakerWinnerList.scss';
import ShortplyTitleMakerWinnerForm from "../ShortplyTitleMakerWinnerForm";
import prevButton from "../../assets/images/shortply-title-maker/reply/prev-button.png";
import prevButtonDisabled from "../../assets/images/shortply-title-maker/reply/prev-button-disabled.png";
import nextButton from "../../assets/images/shortply-title-maker/reply/next-button.png";
import nextButtonDisabled from "../../assets/images/shortply-title-maker/reply/next-button-disabled.png";

function ShortplyTitleMakerWinnerList({winnerInfo, winnerTotal, winnerCurrent, handleWinnerCurrent}) {

    const [hasPrev, setHasPrev] = useState(4 < (winnerCurrent * 4));
    const [hasNext, setHasNext] = useState(winnerTotal > (winnerCurrent * 4));

    useEffect(() => {
        setHasPrev(4 < (winnerCurrent * 4))
        setHasNext(winnerTotal > (winnerCurrent * 4))
    }, [winnerCurrent, winnerTotal]);

    const prevPage = () => {
        if (hasPrev) {
            handleWinnerCurrent(winnerCurrent - 1)
        }
    }

    const nextPage = () => {
        if (hasNext) {
            handleWinnerCurrent(winnerCurrent + 1)
        }
    }

    return (
        <>
            {winnerInfo?.length > 0 ?
                <>
                    <div className='shortply-title-maker-winner-list-title-container'>
                        <div className='shortply-title-maker-winner-list-title-text'>지난 수상작들</div>
                    </div>
                    {winnerInfo?.map((e, index) => {
                        return (
                            <ShortplyTitleMakerWinnerForm
                                key={index}
                                winner={e}/>
                        )
                    })}
                    <div className='shortply-winner-paging'>
                        <Image onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} className='shortply-winner-paging-prev'
                               src={hasPrev ? prevButton : prevButtonDisabled}
                               alt={'prevButton'} onClick={() => {
                            prevPage()
                        }}/>
                        <Image onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} className='shortply-winner-paging-next'
                               src={hasNext ? nextButton : nextButtonDisabled}
                               alt={'nextButton'} onClick={() => {
                            nextPage()
                        }}/>
                    </div>
                </>
                :
                <>
                </>
            }

        </>
    );
}

export default ShortplyTitleMakerWinnerList;
