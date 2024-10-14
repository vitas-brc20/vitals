import {useCallback, useState} from 'react';

const useToast = () => {
    const [toast, setToast] = useState({isVisible: false, message: '', backgroundColor: '#202027', color: '#fff'});

    const showToast = useCallback((message, backgroundColor, color) => {
        setToast({
            isVisible: true,
            message,
            backgroundColor: backgroundColor ? backgroundColor : '#202027',
            color: color ? color : '#fff',
        });
    }, []);

    const hideToast = useCallback(() => {
        // 애니메이션 시작 전 상태를 업데이트
        setToast((prev) => ({...prev, isVisible: false}));
    }, []);

    return {
        toast,
        showToast,
        hideToast,
    };
};

export default useToast;
