import {create} from 'zustand';
import moment from 'moment-timezone';

moment.tz.setDefault('Asia/Seoul');

const useStore = create((set) => ({
    currentDate: process.env.NEXT_PUBLIC_REACT_APP_ENV === 'dev' || process.env.NEXT_PUBLIC_REACT_APP_ENV === 'local' ? moment(process.env.NEXT_PUBLIC_REACT_APP_START_DATE) : moment(),
    setCurrentDate: (date) => set({currentDate: date}),
}));

export default useStore;
