export const autoHyphenPhoneNumber = (e, setFunction) => {
    if (e.target.value.length < 4) {
        return;
    }
    if (!/^[0-9-]*$/.test(e.target.value)) {
        return;
    }

    const rawPhone = e.target.value.replace(/-/g, '');

    let formattedPhone = '';

    if (rawPhone.length < 4) {
        formattedPhone = `${rawPhone}-`;
    } else if (rawPhone.length < 8) {
        formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
    } else if (rawPhone.length < 11) {
        formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3, 7)}-${rawPhone.slice(7)}`;
    } else {
        formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3, 7)}-${rawPhone.slice(7, 11)}`;
    }

    const displayPhone = formattedPhone.length > 0 ? formattedPhone : '';
    setFunction(displayPhone);
};

export const formatWinnersStringData = (data) => {
    return data
        .map((item, index) => {
            // 변환된 문자열
            const formatted = `${item.nickname}(${item.phoneNumber})`;
            // 3번째 항목마다 줄바꿈 추가, 그 외에는 탭 추가
            if ((index + 1) % 3 === 0) {
                return formatted + '\n';
            }
            return formatted + '\t';
        })
        .join('') // 배열을 하나의 문자열로 결합
        .trim(); // 문자열 앞뒤 공백 제거
};

export function insertLineBreaks(text, base) {
    const words = text.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i]);
        if ((i + 1) % base === 0 && i !== words.length - 1) {
            result.push('\n');
        }
    }

    return result.join(' ').replace(/\s*\n\s*/g, '\n');
}