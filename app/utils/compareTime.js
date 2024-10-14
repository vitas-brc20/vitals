export const compareTimeIsBefore = (targetHour, targetMinute) => {
    const now = new Date();
    const kstOffset = 9 * 60; // KST는 UTC+9
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const kstTime = new Date(utc + (kstOffset * 60000));

    // 한국 시간의 시와 분 확인
    const hours = kstTime.getHours();
    const minutes = kstTime.getMinutes();

    if (hours < targetHour || (hours === targetHour && minutes < targetMinute)) {
        return true;
    }
    return false;
};


export const isOpenYesterdayWinners = () => {
    const targetHour = 10;
    const targetMinute = 0;

    const now = new Date();
    const kstOffset = 9 * 60; // KST는 UTC+9
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const kstTime = new Date(utc + (kstOffset * 60000));

    // 한국 시간의 시와 분 확인
    const hours = kstTime.getHours();
    const minutes = kstTime.getMinutes();

    if (hours < targetHour || (hours === targetHour && minutes < targetMinute)) {
        return false;
    }
    return true;
};