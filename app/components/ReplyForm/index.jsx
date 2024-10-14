'use client';
import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import './ReplyForm.scss'; // 모달에 대한 스타일
import profileThumbnail from "../../assets/images/shortply-title-maker/reply/profile-thumbnail-default.png";
import likeOffIcon from "../../assets/images/shortply-title-maker/reply/like-off-icon.png";
import likeOnIcon from "../../assets/images/shortply-title-maker/reply/like-on-icon.png";

moment.tz.setDefault('Asia/Seoul');

const ReplyForm = ({
                       profile,
                       reply,
                       progressAddReplyLike,
                       showModal,
                       hideModal,
                       showToast
                   }) => {

    const handleJoin = () => {

        // if (!profile) {
        //     showModal(
        //         '로그인이 필요합니다',
        //         <div>
        //             <p>{`로그인 페이지로 이동하시겠습니까?`}</p>
        //         </div>,
        //         [
        //             {
        //                 label: '네, 로그인 할래요',
        //                 onClick: () => {
        //                     window.location.href = 'vitals://deeplink/login';
        //                 },
        //             },
        //         ],
        //         () => hideModal(false),
        //     );
        //     return;
        // }

        if (reply?.isLiked) {
            showToast('이미 좋아요를 누른 댓글입니다.', '#FFFFFF', '#352CE0');
            return true;
        }

        callProgressJoinEvent();
        return true;
    };

    const callProgressJoinEvent = () => {
        progressAddReplyLike(reply);
        reply.isLiked = true;
        reply.likeCount = reply.likeCount + 1;
    };


    return (
        <>
            <div className='latest-shortply'>
                <div className='latest-shortply-form'>
                    <div className='shortply-reply'>
                        <div className='shortply-reply-list'>
                            <div className='shortply-reply-list-avatar'>
                                <Image
                                    src={reply?.profileThumbnail ? reply?.profileThumbnail : profileThumbnail}
                                    alt={'profileThumbnail'}/>
                            </div>
                            <div className='shortply-reply-list-profile'>
                                <div className='shortply-reply-list-profile-info'>
                                    <div className='shortply-reply-list-profile-info-nickname'>
                                        {reply?.nickname?.length > 15 ? reply?.nickname.substring(0, 15) + '…' : reply?.nickname}
                                    </div>
                                    <div className='shortply-reply-list-profile-info-register-datetime'>
                                        {moment.utc(reply?.registerDateTime).local().format('HH:mm')}
                                    </div>
                                </div>
                                <div className='shortply-reply-list-content-text'>
                                    {'#'}{reply?.hashtagName}
                                </div>
                            </div>
                        </div>
                        <div className='shortply-reply-list-like-button'>
                            <Image onContextMenu={() => {
                                return false;
                            }} style={{WebkitTouchCallout: 'none'}} className='like-icon'
                                   src={reply?.isLiked ? likeOnIcon : likeOffIcon}
                                   alt={'likeIcon'}
                                   width={'10vw'}
                                   onClick={() => {
                                       handleJoin()
                                   }}/>
                            <div
                                className={`shortply-reply-list-like-number${reply?.isLiked ? '-liked' : ''}`}>
                                {reply?.likeCount > 9999 ? '9999+' : reply?.likeCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReplyForm;
