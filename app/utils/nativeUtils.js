export const apiCallbacks = {};

// Android와 iOS에 메시지를 전송하는 함수
export const sendMessageToNativeApp = (methodName, data) => {
    const jsonString = JSON.stringify(data);

    // Android와 통신
    if (window.Android) {
        window.Android[methodName](jsonString);
    }

    // iOS와 통신
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[methodName]) {
        window.webkit.messageHandlers[methodName].postMessage(jsonString);
    }
};

// AppsFlyer 추적 코드 설정
export const setAppsflyerTrackingCode = (data) => {
    sendMessageToNativeApp('setAppsflyerTrackingCode', data);
};

// API 요청을 보내는 메서드
export const sendApiRequest = (request) => {
    //TODO Api Request 확인
    console.log("INIS request", request)
    try {
        const requestId = generateRequestId();
        request.requestId = requestId;
        apiCallbacks[requestId] = request.callback;

        sendMessageToNativeApp('sendApiRequest', request);
    } catch (error) {
        console.error('Failed to send API request:', error);
        sendMessageToNativeApp('setAppsflyerTrackingCode', {
            logName: 'sendApiRequestError',
            logData: error,
        });
    }
};

// requestId를 생성하는 메서드
export const generateRequestId = () => {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 15);

    return `${timestamp}-${randomPart}`;
};

// API 응답을 처리하는 메서드
export const getApiResponse = (event) => {
    const {requestId, data} = event;

    try {
        if (!requestId) {
            return;
        }

        // 해당 ID에 대한 콜백 함수가 있는지 확인하고 호출
        const callback = apiCallbacks[requestId];

        if (callback) {
            callback(data);
        }
    } catch (error) {
        sendMessageToNativeApp('setAppsflyerTrackingCode', {
            message: 'getApiResponseError',
            data: error,
        });
    } finally {
        delete apiCallbacks[requestId]; // 호출 후 삭제
    }
};
