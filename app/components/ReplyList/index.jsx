import Image from 'next/image';

import './ReplyList.scss';
import React, {useEffect, useState} from "react";
import nextButton from "../../assets/images/shortply-title-maker/reply/next-button.png";
import nextButtonDisabled from "../../assets/images/shortply-title-maker/reply/next-button-disabled.png";
import prevButton from "../../assets/images/shortply-title-maker/reply/prev-button.png";
import prevButtonDisabled from "../../assets/images/shortply-title-maker/reply/prev-button-disabled.png";
import ReplyForm from "../ReplyForm";

function ReplyList({
                       profile,
                       replyInfo,
                       replyTotal,
                       replyCurrent,
                       handleReplyCurrent,
                       progressAddReplyLike,
                       showModal,
                       hideModal,
                       showToast
                   }) {

    //버튼 이미지 사전로드 (추후 모듈화)
    const [hasPrev, setHasPrev] = useState(5 < (replyCurrent * 5));
    const [hasNext, setHasNext] = useState(replyTotal > (replyCurrent * 5));

    useEffect(() => {
        setHasPrev(5 < (replyCurrent * 5))
        setHasNext(replyTotal > (replyCurrent * 5))
    }, [replyInfo, replyCurrent, replyTotal]);

    const prevPage = () => {
        if (hasPrev) {
            handleReplyCurrent(replyCurrent - 1)
        }
    }

    const nextPage = () => {
        if (hasNext) {
            handleReplyCurrent(replyCurrent + 1)
        }
    }

    const replyFormRendering = (replyInfo) => {

        const rendering = (replyInfo) => {
            const result = [];
            for (let i = 0; i < replyInfo.length; i++) {
                result.push(
                    <ReplyForm
                        key={i}
                        profile={profile}
                        reply={replyInfo[i]}
                        progressAddReplyLike={progressAddReplyLike}
                        showModal={showModal}
                        hideModal={hideModal}
                        showToast={showToast}
                    />
                );
            }
            return result;
        };

        return rendering(replyInfo);
    }

    return (
        <>
            {replyFormRendering(replyInfo)}
            {replyInfo?.length > 0 ?
                <div className='shortply-reply-paging'>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} className='shortply-reply-paging-prev'
                           src={hasPrev ? prevButton : prevButtonDisabled}
                           alt={'prevButton'} onClick={() => {
                        prevPage()
                    }}/>
                    <Image onContextMenu={() => {
                        return false;
                    }} style={{WebkitTouchCallout: 'none'}} className='shortply-reply-paging-next'
                           src={hasNext ? nextButton : nextButtonDisabled}
                           alt={'nextButton'} onClick={() => {
                        nextPage()
                    }}/>
                </div>
                :
                <></>}
        </>
    );
}

export default ReplyList;
