/**
 * Created by liyikun on 2017/4/21.
 */

import React from 'react'
import Selector from './selector/Selector.js'
import GridView from './view/GridView.js'
import CalenderContract from './CalenderContract'

class CalenderComponent extends CalenderContract.View(React.Component) {

    render() {
        return <div>
            <GridView/>
        </div>;
    }

    handleDayClick() {

    }

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
}

export default CalenderComponent;

// import GetDate from '../domain/usecase/GetDate.js'
// import DateRepository from '../domain/data/source/DateRepository.js'
// import DateRemoteDataSource from '../domain/data/source/DateRemoteDataSource.js'
// let dataSource = new DateRemoteDataSource();
// let repository = new DateRepository(dataSource);
// let usecase = new GetDate(repository);
// console.log(usecase.getDateOfToday());
// usecase.getDateOfMonth(2017, 5, {
//     onSuccess: (monthInfo) => {
//         console.log(monthInfo);
//     },
//
//     onError: () => {
//
//     }
// });