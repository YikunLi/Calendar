/**
 * Created by liyikun on 2017/4/21.
 */

import React from 'react'
import './Selector.css'

var Selector = React.createClass({

    getDefaultProps: function () {
        return {
            unit: "",
            values: []
        };
    },

    getInitialState: function () {
        return {
            value: 0,
            isSelected: false
        };
    },

    render: function () {
        return <select>
            <option>dasdada</option>
        </select>;
    }


});

export default Selector;