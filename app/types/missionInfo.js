import create_shortply from '../assets/images/missionImage/create_shortply.png';
import reply_5 from '../assets/images/missionImage/reply_5.png';
import bonus_attendance from '../assets/images/missionImage/bonus_attendance.png';
import vote_celpick from '../assets/images/missionImage/vote_celpick.png';
import create_shortply_with_my_feed from '../assets/images/missionImage/create_shortply_with_my_feed.png';
import create_shortply_use_search from '../assets/images/missionImage/create_shortply_use_search.png';
import React from 'react';

const missionInfo = {
    CREATE_TODAY_SHORTPLY: {
        text: '좋아요 12개 눌러서 숏플리 만들기',
        yesterdayText: '숏플리 만들기',
        image: create_shortply,
        type: 'shortply',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'숏플리를 만들고'}</p>
            <p>{'다시 응모해주세요.'}</p>
        </div>),
        failureButtonTitle: '숏플리 만들러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/video';
        },
        deeplink: 'vitals://deeplink/video',
    },
    REPLY_5: {
        text: '댓글 5개 이상 작성하기',
        yesterdayText: '댓글 5개 작성하기',
        image: reply_5,
        type: 'comment',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'댓글 5개 이상 작성한 후'}</p>
            <p>{'다시 응모해주세요.'}</p>
        </div>),
        failureButtonTitle: '댓글 남기러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/video';
        },
        deeplink: 'vitals://deeplink/video',
    },
    ATTENDANCE_BONUS: {
        text: '출석 체크하기',
        yesterdayText: '보너스 출첵하기',
        image: bonus_attendance,
        type: 'attendance',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'출석 체크 후 다시 응모해주세요'}</p>
        </div>),
        failureButtonTitle: '출석 체크 하러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/home';
        },
        successMessageTitle: '포인트가 지급되었습니다',
        successMessageText: (<div>
            <p>{'내 지갑에서 확인해보세요!'}</p>
        </div>),
        successButtonTitle: '확인하러 가기',
        successButtonAction: () => {
            window.location.href = 'vitals://deeplink/wallet';
        },
        deeplink: 'vitals://deeplink/attendance',
    },
    CELPICK_VOTE_COMPLETE: {
        text: '당일 셀픽 참여하기',
        yesterdayText: '당일 셀픽 참여하기',
        image: vote_celpick,
        type: 'celpick',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'아직 오늘의 셀픽에'}</p>
            <p>{'참여하지 않으셨어요'}</p>
        </div>),
        failureButtonTitle: '셀픽하러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/celpick';
        },
        deeplink: 'vitals://deeplink/celpick',
    },
    CREATE_TODAY_SHORTPLY_WITH_MY_FEED: {
        text: '내 영상을 넣어서 숏플리 만들기',
        yesterdayText: '내 영상을 넣어서 숏플리 만들기',
        image: create_shortply_with_my_feed,
        type: 'selfply',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'내 영상을 포함하여'}</p>
            <p>{'숏플리를 만들어주세요.'}</p>
        </div>),
        failureButtonTitle: '숏플리 만들러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/video';
        },
        deeplink: 'vitals://deeplink/video',
    },
    CREATE_TODAY_SHORTPLY_USE_SEARCH: {
        text: '검색해서 숏플리 만들기',
        yesterdayText: '검색해서 숏플리 만들기',
        image: create_shortply_use_search,
        type: 'selfply',
        isToast: false,
        failureMessageTitle: '오늘의 미션을 확인해주세요!',
        failureMessageText: (<div>
            <p>{'검색 탭에서 영상을 검색해서'}</p>
            <p>{'숏플리를 만들어주세요.'}</p>
        </div>),
        failureButtonTitle: '숏플리 만들러 가기',
        failureButtonAction: () => {
            window.location.href = 'vitals://deeplink/video';
        },
        deeplink: 'vitals://deeplink/video',
    },
    EVENT_SUCCESS: {
        ATTENDANCE: {
            text: '',
            image: create_shortply_with_my_feed,
            type: 'attendance',
        },
        ATTENDANCE_COMPLETE: {
            text: '',
            image: create_shortply_with_my_feed,
            type: 'attendance_complete',
            isToast: false,
        },
    },
};

export default missionInfo;
