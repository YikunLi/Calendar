/**
 * Created by liyikun on 2017/4/27.
 */

import CalenderContract from './CalenderContract.js'

class CalenderPresenter extends CalenderContract.Presenter {

    constructor(view, getDate) {
        super()
        this.mView = view;
        this.mGetDate = getDate;
    }

    /**
     * 加载当天信息
     */
    loadInfoOfToday() {

    }

    /**
     * 加载指定天数的信息
     * @param day
     *      指定的天数
     */
    loadInfoOfDay(day) {

    }

    /**
     * 加载指定月份的信息
     * @param month
     *      指定的月份
     */
    loadInfoOfMonth(month) {

    }

    /**
     * 加载指定年份的信息
     * @param year
     *      指定的年份
     */
    loadInfoOfYear(year) {

    }

    /**
     * 加载指定日期详情
     * @param year
     *      指定的年份
     * @param month
     *      指定的月份
     * @param day
     *      指定的日期
     */
    loadDateDetail(year, month, day) {

    }
}