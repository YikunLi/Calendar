/**
 * Created by liyikun on 2017/4/27.
 */

class DateInfo {

    /**
     * 周一所使用的数字
     * @type {number}
     */
    static WEEK_MONDAY = 1;

    constructor() {
        this.initialize();
        if (arguments.length > 0) {
            [this.year, this.month, this.number] = arguments;
            let date = new Date();
            date.setFullYear(this.year, this.month - 1);
            date.setDate(this.number);
            this.day = (date.getDay() + 7) % 8;
        }
    }

    initialize() {
        /**
         * @type {number} 数字
         */
        this.number = 0;
        /**
         * @type {string} 农历
         */
        this.lunar = "";
        /**
         * @type {number} 星期几 1-7 1表示星期一，7表示星期日
         */
        this.day = 0;
        /**
         * 所属于的月份
         * @type {number}
         */
        this.month = 0;
        /**
         * 所属于的年份
         * @type {number}
         */
        this.year = 0;
        /**
         * @type {boolean} 是否是假期
         */
        this.isHoliday = false;
    }

}

export default DateInfo;
