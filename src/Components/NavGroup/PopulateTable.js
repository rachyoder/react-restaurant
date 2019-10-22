import React from 'react';

class FillTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menuItems = JSON.parse(localStorage.getItem(this.props.menu));
        return (
            menuItems.menu_items.map((item, idx) => {
                const length = item.description.length;
                return (
                    <tr key={idx}>
                        <td>{item.description}</td>
                        <td>${length}.99</td>
                    </tr>
                );
            })
        );
    }
}

class PopulateTable extends React.Component {

    render() {

        return (localStorage.length > 0 ? (
            <div className="container">
                <table className="table table-borderless table-hover">
                    <tbody>
                        <FillTable menu={this.props.menu} check={this.props.check} />
                    </tbody>
                </table>
            </div>
        ) : (
                <div className="container text-center">
                    Loading...
            </div>
            ));
    }
}

export default PopulateTable;