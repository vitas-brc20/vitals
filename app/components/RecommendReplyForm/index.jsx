'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import './RecommendReplyForm.scss'; // 모달에 대한 스타일
import profileThumbnail from "../../assets/images/shortply-title-maker/reply/profile-thumbnail-default.png";
import likeOffIcon from "../../assets/images/shortply-title-maker/reply/like-off-icon.png";
import likeOnIcon from "../../assets/images/shortply-title-maker/reply/like-on-icon.png";

moment.tz.setDefault('Asia/Seoul');

const RecommendReplyForm = ({profile, recommendReplyInfo, showModal, hideModal, showToast, progressAddReplyLike}) => {
    const [recommendReply, setRecommendReply] = useState({});
    //버튼 이미지 사전로드 (추후 모듈화)


    const next = () => {
        let recommendReplyIdx = Math.floor(Math.random() * 10)
        setRecommendReply(recommendReplyInfo[recommendReplyIdx])
    }

    useEffect(() => {
        if (recommendReplyInfo) {
            next()

            const intervalRef = setInterval(() => next(), 3000);

            return () => {
                clearInterval(intervalRef);
            };
        }
    }, [recommendReplyInfo]);

    const handleJoin = () => {
        if (!profile) {
            showModal(
                '로그인이 필요합니다',
                <div>
                    <p>{`로그인 페이지로 이동하시겠습니까?`}</p>
                </div>,
                [
                    {
                        label: '네, 로그인 할래요',
                        onClick: () => {
                            window.location.href = 'vitals://deeplink/login';
                        },
                    },
                ],
                () => hideModal(false),
            );
            return;
        }

        if (recommendReply?.isLiked) {
            showToast('이미 좋아요를 누른 댓글입니다.', '#FFFFFF', '#352CE0');
            return true;
        }

        callProgressJoinEvent();
        return true;
    };

    const callProgressJoinEvent = () => {
        progressAddReplyLike(recommendReply);
        recommendReply.isLiked = true;
        recommendReply.likeCount = recommendReply.likeCount + 1;
    };

    if (recommendReplyInfo?.length === 10) {
        return (
            <>
                <div className='recommend-shortply'>
                    <div className='recommend-shortply-title'>
                        지금 인기 있는 숏플리 제목
                    </div>
                    <div className='recommend-shortply-form'>
                        <div className='shortply-reply'>
                            <div className='shortply-reply-list'>
                                <div className='shortply-reply-list-avatar'>
                                    <Image
                                        src={recommendReply?.profileThumbnail ? recommendReply?.profileThumbnail : profileThumbnail}
                                        alt={'profileThumbnail'}/>
                                </div>
                                <div className='shortply-reply-list-profile'>
                                    <div className='shortply-reply-list-profile-info'>
                                        <div className='shortply-reply-list-profile-info-nickname'>
                                            {recommendReply?.nickname?.length > 15 ? recommendReply?.nickname.substring(0, 15) + '…' : recommendReply?.nickname}
                                        </div>
                                        <div className='shortply-reply-list-profile-info-register-datetime'>
                                            {moment.utc(recommendReply?.registerDateTime).local().format('HH:mm')}
                                        </div>
                                    </div>
                                    <div className='shortply-reply-list-content-text'>
                                        {'#'}{recommendReply?.hashtagName}
                                    </div>
                                </div>
                            </div>
                            <div className='shortply-reply-list-like-button'>
                                <Image onContextMenu={() => {
                                    return false;
                                }} style={{WebkitTouchCallout: 'none'}} className='like-icon'
                                       src={recommendReply?.isLiked ? likeOnIcon : likeOffIcon}
                                       alt={'likeIcon'}
                                       width={'10vw'}
                                       onClick={() => {
                                           handleJoin()
                                       }}/>
                                <div
                                    className={`shortply-reply-list-like-number${recommendReply?.isLiked ? '-liked' : ''}`}>
                                    {recommendReply?.likeCount > 9999 ? '9999+' : recommendReply?.likeCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='recommend-shortply'>
                </div>
            </>

        );
    }
};

export default RecommendReplyForm;
