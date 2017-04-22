/**
 * Created by liyikun on 2017/4/21.
 */
import React from 'react'

var GridView = React.createClass({

    getDefaultProps: function () {
        return {
            adapter: null
        };
    },

    getInitialState: function () {
        return {
            value: [1, 2, 3, 4, 5]
        };
    },

    componentWillUpdate: function () {

    },

    render: function () {
        return <div>
            {
                this.state.value.map((item, index, array) => {
                    return <div>{item}</div>
                })
            }
        </div>;
    }

});

export default GridView;

class Adapter {

    getItemCount() {
    }

    getView() {
    }

}