import Image from 'next/image';
import shortplyMain from '@/app/assets/images/shortply-title-maker/main/main-shortply.png';

import inputReplyText from "../../assets/images/shortply-title-maker/main/reply-input.png";
import React, {useRef, useState} from "react";
import inputReplySubmitButton from "../../assets/images/shortply-title-maker/main/submit.png";
import inputReplySubmitButtonDisabled from "../../assets/images/shortply-title-maker/main/submit-unavailable.png";
import playIcon from "../../assets/images/shortply-title-maker/main/play-icon.png";
import useTrackingCode from "../../hooks/useTrackingCode";

function TodayShortplyInfo({profile, shortplyInfo, progressAddReply, showModal, hideModal, showToast}) {
    const {setAppsflyerTrackingCode} = useTrackingCode();

    function goShortplyDeeplink() {
        setAppsflyerTrackingCode('title_maker_shortply', {
            profile_id: profile?.id || 0,
            shortply_id: shortplyInfo.shortplyId,
        });
        window.location.href = 'vitals://deeplink/shortply?id=' + shortplyInfo.shortplyId;
    }

    const [replyText, setReplyText] = useState('');
    //버튼 이미지 사전로드 (추후 모듈화)

    const inputRef = useRef(null);


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

        if (shortplyInfo?.makeCount >= 5) {
            showToast('이미 제목을 5회 제출하셨습니다.\n내일 또 참여해주세요!', '#FFFFFF', '#352CE0');
            return false;
        }

        if (replyText.length < 1) {
            showToast('해시태그를 입력하지 않았습니다.\n입력 후 다시 시도해주세요!', '#FFFFFF', '#352CE0');
            return false;
        }

        callProgressJoinEvent();
        return true;
    };

    const callProgressJoinEvent = () => {
        progressAddReply(replyText);
        setReplyText('');
    };

    return (
        <>
            <div className="step-status">
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} className='main-frame' src={shortplyMain} alt="Event Text"
                       sizes="100vw"
                       width={500} height={500}/>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} className='background' src={shortplyInfo?.thumbnailUrl}
                       alt="Event Text" sizes="50vw"
                       width={50} height={50} onClick={() => {
                    goShortplyDeeplink()
                }}/>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} className='play-icon' src={playIcon} alt="Event Text"
                       sizes="50vw"
                       width={50} height={50} onClick={() => {
                    goShortplyDeeplink()
                }}/>
            </div>
            <div className='reply-form'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} className='reply-form-input-image' src={inputReplyText} alt='input' sizes='80vw'
                       width={500} height={500}/>
                <Image onContextMenu={() => {
                    return false;
                }} placeholder={'blur'} className='reply-form-submit-image'
                       src={shortplyInfo?.makeCount < 5 ? inputReplySubmitButton : inputReplySubmitButtonDisabled}
                       alt='Toggle'
                       onClick={() => {
                           if (shortplyInfo?.makeCount < 5) {
                               handleJoin();
                           }
                       }}
                       style={{cursor: 'pointer', WebkitTouchCallout: 'none'}}
                       width={500} height={500}
                />
                <div className='reply-form-input-container'>
                    <div className='reply-form-area'>
                        {shortplyInfo?.makeCount < 5 ?
                            <>
                            <div className='reply-form-input-overlay'>
                                <textarea
                                    value={replyText}
                                    onChange={(e) => {
                                        let text = e.target.value
                                        text = text.replaceAll("\n", "")
                                        const regexEmoji = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
                                        if (regexEmoji.test(text)) {
                                            let strVal = text.replace(regexEmoji, '');
                                            text = strVal
                                        }
                                        const regexSymbol = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/g;
                                        if (regexSymbol.test(text)) {
                                            let strVal = text.replace(regexSymbol, '');
                                            text = strVal
                                        }

                                        setReplyText(text.replaceAll(" ", "_"))
                                    }}
                                    className='reply-form-input-overlay-text'
                                    placeholder='숏플리 제목을 입력해주세요.'
                                    maxLength={30}
                                    ref={inputRef}
                                    onClick={() => {
                                        setAppsflyerTrackingCode('title_maker_write', {
                                            profile_id: profile?.id || 0,
                                            shortply_id: shortplyInfo.shortplyId,
                                        });
                                    }}
                                />
                            </div>
                            </>
                            :
                            <></>
                        }

                    </div>
                </div>
            </div>
            {shortplyInfo?.makeCount >= 5 ?
                <>
                    <div className='reply-done-text'>
                        일일 최대 5개 까지 제출 가능해요.
                    </div>
                </>
                :
                <>
                </>
            }

        </>
    );
}

export default TodayShortplyInfo;
