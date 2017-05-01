/**
 * Created by liyikun on 2017/4/21.
 */
import React from 'react'
import DateView from "../date/DateView";
import './GridView.css'

class Adapter {

    getView(date) {
        return <DateView date={date}/>
    }

}

class GridView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gridData: []
        };
    }

    getHeaderValue() {
        return this.getValue(this.props.header);
    }

    getContentValue() {
        return this.getValue(this.props.content);
    }

    getValue(source) {
        let targetArray = [];
        let sourceArray = source;
        let columnCount = this.props.columnCount;
        for (let i = 0; i <= sourceArray.length / columnCount; i++) {
            targetArray[i] = sourceArray.concat().splice(i * columnCount, columnCount);
        }
        return targetArray;
    }

    getView(item) {
        let view = this.props.adapter.getView(item);
        return view;
    }

    handleClick(position) {
        // notify item click event
        if (this.props.onItemClickListener !== null) {
            this.props.onItemClickListener.onItemClick(position);
        }
    }

    render() {
        return <div>
            <table>
                <thead>
                {
                    this.getHeaderValue().map((rowItem, rowIndex, array) => {
                        return <tr>
                            {
                                rowItem.map((item, columnIndex, rowArray) => {
                                    return <td>{item}</td>
                                })
                            }
                        </tr>
                    })
                }
                </thead>
                <tbody>
                {
                    this.getContentValue().map((rowItem, rowIndex, array) => {
                        return <tr>
                            {
                                rowItem.map((item, columnIndex, rowArray) => {
                                    let position = rowIndex * this.props.columnCount + columnIndex;
                                    return <td onClick={this.handleClick.bind(this, position)}>
                                        {this.getView(item)}
                                    </td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>;
    }

}

GridView.defaultProps = {
    header: [
        "一", "二", "三", "四", "五", "六", "日"
    ],
    content: [
        27, 28, 29, 30, 31, 1, 2,
        3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30
    ],
    adapter: new Adapter(),
    columnCount: 7,
    onItemClickListener: null
};

export default GridView;

class OnItemClickListener {

    onItemClick(position) {

    }
}