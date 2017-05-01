/**
 * Created by liyikun on 2017/4/27.
 */

import DateDataSource from './DateDataSource.js'

class DateRepository extends DateDataSource {

    constructor(remoteDateSource) {
        super();
        this.mRemoteDataSource = remoteDateSource;
    }

    getDate(year, month, date, callback) {
        this.mRemoteDataSource.getDate(year, month, date, callback);
    }

}

export default DateRepository;