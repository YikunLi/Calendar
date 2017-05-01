/**
 * Created by liyikun on 2017/4/27.
 */

import DateDataSource from './DateDataSource.js'
import fetchJsonp from 'fetch-jsonp';

// GET /calendar/day?date=2017-5-1&key=68e1f799a888280fab5ad0f7b124853a HTTP/1.1
// Host: v.juhe.cn
// Connection: keep-alive
// Cache-Control: max-age=0
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// Accept-Encoding: gzip, deflate, sdch
// Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
// Cookie: aliyungf_tc=AQAAAKuINluTVAoA4xp9e4bt7A7Tyb2p
// If-None-Match: 55826f3e9cb13da564e47935fb7fbfd9

class DateRemoteDataSource extends DateDataSource {

    constructor() {
        super();
    }

    getDate(year, month, date, callback) {
        fetchJsonp(this.getAPI(year, month, date), {
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
        }).then(response => {
            return response.json();
        }).then(json => {
            if (json['reason'] === "Success") {
                callback.onDateLoaded(json['result']['data'])
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getAPI(year, month, date) {
        return `http://v.juhe.cn/calendar/day?date=${year}-${month}-${date}&key=68e1f799a888280fab5ad0f7b124853a`;
    }
}

export default DateRemoteDataSource;