/**
 * Created by liyikun on 2017/4/24.
 */

import React from "react";
import "./DateView.css"

class DateView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <button className="date-view-content">{this.props.date}</button>
        </div>;
    }
}

DateView.defaultProps = {
    date: 1,
    isSelected: false,
};

export default DateView;