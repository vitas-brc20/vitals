// 3자리 마다 콤마 추가 ex) 1,000
export function formatNumberWithCommas(value) {
    if (!isNaN(value) && typeof value === 'number') {
        return value.toLocaleString();
    }
    return 0;
}
