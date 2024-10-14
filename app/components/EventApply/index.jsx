'use client';
import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import {autoHyphenPhoneNumber} from '../../utils/formatUtils';

import './EventApply.scss'; // 모달에 대한 스타일
import useStore from '../../stores/store';

import inputPhoneTop from '../../assets/images/phoneApplyForm/input-phone-1-top.png';
import inputPhoneNumber from '../../assets/images/phoneApplyForm/input-phone-2-number.png';
import inputPhonePolicyCheckBox from '../../assets/images/phoneApplyForm/input-phone-3-checkbox.png';
import inputPhonePolicyCheckBoxEnabled from '../../assets/images/phoneApplyForm/input-phone-3-checkbox-enabled.png';
import inputPhoneSubmitButton from '../../assets/images/phoneApplyForm/input-phone-4-button.png';
import inputPhoneSubmitButtonDisabled from '../../assets/images/phoneApplyForm/input-phone-4-button-disabled.png';
import inputPhonePolicyImage from '../../assets/images/phoneApplyForm/input-phone-5-policy.png';


moment.tz.setDefault('Asia/Seoul');

const EventApply = ({
                        profile,
                        calendarData,
                        scrollTarget,
                        progressJoinEvent,
                        bonusMissionCount,
                        showModal,
                        hideModal,
                        showToast,
                    }) => {
    const currentDate = useStore((state) => state.currentDate);
    const [dayObject, setDayObject] = useState(null);

    const [isSubmittable, setIsSubmittable] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('010-');
    const [agreed, setAgreed] = useState(false);

    //체크박스이미지들 사전로드 (추후 모듈화)
    const [currentCheckBoxImage, setCurrentCheckBoxImage] = useState(0);
    const checkBoxImages = [inputPhonePolicyCheckBox, inputPhonePolicyCheckBoxEnabled];

    //버튼 이미지 사전로드 (추후 모듈화)
    const [currentButtonImage, setCurrentButtonImage] = useState(0);
    const buttonImages = [inputPhoneSubmitButton, inputPhoneSubmitButtonDisabled];

    const inputRef = useRef(null);

    useEffect(() => {
        setDayObject(calendarData.find((item) => item.eventDay === currentDate.format('YYYY-MM-DD')));
    }, [currentDate]);

    useEffect(() => {
        checkIsSubmittable();
    }, [dayObject]);

    useEffect(() => {
        setCurrentButtonImage(isSubmittable ? 0 : 1);
    }, [isSubmittable]);

    const moveCursorToEnd = (event) => {
        setTimeout(() => {
            const input = inputRef.current;
            if (input) {
                const valueLength = input.value.length;
                input.setSelectionRange(valueLength, valueLength);
            }
        }, 0);
    };

    const handleFocus = () => {
        setIsFocused(true);
        moveCursorToEnd({target: inputRef.current});
    };

    const handleBlur = () => {
        // focus out doesn't cut event
        setTimeout(() => {
            setIsFocused(false);
        }, 100); // 약간의 지연 시간 (100ms)
    };

    const setCheckBox = (agreed) => {
        setCurrentCheckBoxImage((prevImage) => (prevImage + 1) % 2);
        setAgreed(agreed);
    };

    const checkIsSubmittable = () => {
        if (dayObject?.resultType !== 'NOT_YET') {
            setIsSubmittable(false);
            return false;
        }
        setIsSubmittable(true);
        return true;
    };

    const handleJoin = () => {
        if (!dayObject) {
            return;
        }

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

        if (dayObject.resultType !== 'NOT_YET') {
            showToast('이미 응모 완료되었습니다.\n내일 또 참여해주세요!', '#FFFFFF', '#352CE0');
            return true;
        }

        if (phoneNumber.length !== 13) {
            showToast('휴대폰 번호를 입력하지 않았습니다.\n다시 한 번 확인해주세요.', '#FFFFFF', '#352CE0');
            return false;
        }

        if (!agreed) {
            showToast('개인정보 수집 및 이용 동의에\n반드시 체크해주세요.', '#FFFFFF', '#352CE0');
            return false;
        }

        callProgressJoinEvent(phoneNumber, dayObject);
        return true;
    };

    const callProgressJoinEvent = (phoneNumber, dayObject) => {
        progressJoinEvent(phoneNumber, dayObject.missionType, bonusMissionCount,
            () => {
                dayObject.resultType = 'PARTICIPATION';
                checkIsSubmittable();
            },
            () => {
                scrollTarget();
            });
    };

    const InputPhoneSubmitButtonComponent = () => {
        return (
            <div>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} placeholder={'blur'}
                       onContextMenu={() => {
                           return false;
                       }}
                       src={buttonImages[currentButtonImage]}
                       alt='Toggle'
                       onClick={() => {
                           if (handleJoin() === true) {

                               checkIsSubmittable();
                           }
                       }}
                       style={{cursor: 'pointer', WebkitTouchCallout: 'none'}}
                       width={500} height={500}
                />
            </div>
        );
    };

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/-/g, '');
        const formatted = cleaned.padEnd(11, '0');

        return `${formatted.slice(0, 3)}-${formatted.slice(3, 7)}-${formatted.slice(7, 11)}`;
    };

    const formattedValue = formatPhoneNumber(phoneNumber);

    return (
        <div className='event-page'>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={inputPhoneTop} alt='bottom' sizes='100vw'
                   width={500} height={500}/>
            <div className='event-phone'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} src={inputPhoneNumber} alt='input' sizes='100vw'
                       width={500} height={500}/>
                <div className='event-phone-input-container'>
                    <div className='event-phone-area'>
                        <div className='event-phone-input-overlay'>
                            <span>{formattedValue.slice(0, phoneNumber.length)}</span>
                            <span className={`caret ${isFocused ? '' : 'hidden'}`}></span>
                            <span className='placeholder'>{formattedValue.slice(phoneNumber.length)}</span>
                        </div>
                        <input
                            type='text'
                            value={phoneNumber}
                            onChange={(e) => autoHyphenPhoneNumber(e, setPhoneNumber)}
                            className='event-phone-input'
                            placeholder='010-0000-0000'
                            ref={inputRef}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={moveCursorToEnd}
                            inputMode='numeric'
                            pattern='[0-9]*'
                        />
                    </div>
                </div>
            </div>

            <div className='event-phone-checkbox'>
                <Image onContextMenu={() => {
                    return false;
                }} style={{WebkitTouchCallout: 'none'}} placeholder={'blur'}
                       onContextMenu={() => {
                           return false
                       }}
                       src={checkBoxImages[currentCheckBoxImage]}
                       alt='Toggle'
                       onClick={() => {
                           setCheckBox(!agreed);
                       }}
                       style={{cursor: 'pointer', WebkitTouchCallout: 'none'}}
                       sizes='100vw'
                       width={500} height={500}
                />
            </div>

            <InputPhoneSubmitButtonComponent/>
            <Image onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                return false;
            }} style={{WebkitTouchCallout: 'none'}} src={inputPhonePolicyImage} alt='poilicy' sizes='100vw'
                   width={500} height={500}/>
        </div>
    );
};

export default EventApply;
