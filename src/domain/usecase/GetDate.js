/**
 * Created by liyikun on 2017/4/27.
 */

import DateInfo from '../data/DateInfo.js'
import MonthInfo from '../data/MonthInfo.js'

var DateHelper;

class GetDate {

    constructor(dateRepository) {
        this.mDateRepository = dateRepository;
    }

    getDateOfToday() {
        let [year, month, date] = DateHelper.getDateOfToady();
        return new DateInfo(year, month + 1, date);
    }

    getDateOfMonth(year, month, callback) {
        let days = DateHelper.getDaysOfMonth(year, month);
        let finished = 0;
        let monthInfo = new MonthInfo();
        for (let date = 1; date <= days; date++) {
            this.mDateRepository.getDate(year, month, date, {
                onDateLoaded: (info) => {
                    let dateInfo = new DateInfo(year, month, date);
                    dateInfo.isHoliday = info['holiday'] !== undefined;
                    dateInfo.lunar = info['lunar'];
                    monthInfo.dates[date] = dateInfo;
                    console.log(dateInfo);
                    if (++finished >= days) {
                        callback.onSuccess(monthInfo);
                    }
                },

                onDateNotAvailable: () => {
                    callback.onError();
                }
            });
        }
    }

    /**
     * 获取日期信息
     * @param year
     * @param month
     * @param date
     */
    getDate(year, month, date) {

    }
}

export default GetDate

/**
 * 一个工具类，用来帮助处理日期
 * */
DateHelper = class {

    /**
     * 获取今天所在的日期
     * @returns {Array}
     */
    static getDateOfToady() {
        let date = new Date();
        console.log(date);
        return [date.getFullYear(), date.getMonth(), date.getDate()];
    }

    /**
     * 获取一个月有多少天
     * @param month
     *      给定的月份
     * @returns {number}
     */
    static getDaysOfMonth(year, month) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                return DateHelper.isLeapYear(year) ? 29 : 28;
            default:
                return 2;
        }
    }

    /**
     * ①、普通年能被4整除且不能被100整除的为闰年。（如2004年就是闰年,1900年不是闰年）
     * ②、世纪年能被400整除的是闰年。(如2000年是闰年，1900年不是闰年)
     * ③、对于数值很大的年份,这年如果能整除3200,并且能整除172800则是闰年。如172800年是闰年，86400年不是闰年
     * (因为虽然能整除3200，但不能整除172800)（此按一回归年365天5h48'45.5''计算）。
     */
    static isLeapYear(year) {
        return (DateHelper.isDivisible(year, 3200) && DateHelper.isDivisible(year, 172800)) ||
            DateHelper.isDivisible(year, 400) ||
            (DateHelper.isDivisible(year, 4) && !DateHelper.isDivisible(year, 100));
    }

    static isDivisible(dividend, divisor) {
        return dividend / divisor !== 0 && dividend % divisor === 0;
    }

}