/**
 * Created by liyikun on 2017/4/27.
 */

class CalenderContract {

    static View = Sup => class extends Sup {

        /**
         * 显示当天的日历
         */
        showToday() {
        }

        /**
         * 显示指定天数的日历
         * @param day
         *      指定的天数
         */
        showDay(day) {
        }

        /**
         * 显示指定月份的日历
         * @param month
         *      指定的月份
         */
        showMonth(month) {
        }

        /**
         * 显示指定年份的日历
         * @param year
         *      指定的年份
         */
        showYear(year) {
        }

        /**
         * 显示指定日期的日历
         * @param year
         *      指定的年份
         * @param month
         *      指定的月份
         * @param day
         *      指定的日期
         */
        showDate(year, month, day) {
        }
    };

    static Presenter = {

        constructor: () => {

        },

        /**
         * 加载当天信息
         */
        loadInfoOfToday: () => {
        },

        /**
         * 加载指定天数的信息
         * @param day
         *      指定的天数
         */
        loadInfoOfDay: (day) => {
        },

        /**
         * 加载指定月份的信息
         * @param month
         *      指定的月份
         */
        loadInfoOfMonth: (month) => {
        },

        /**
         * 加载指定年份的信息
         * @param year
         *      指定的年份
         */
        loadInfoOfYear: (year) => {
        },

        /**
         * 加载指定日期详情
         * @param year
         *      指定的年份
         * @param month
         *      指定的月份
         * @param day
         *      指定的日期
         */
        loadDateDetail: (year, month, day) => {
        }
    };
}

export default CalenderContract;