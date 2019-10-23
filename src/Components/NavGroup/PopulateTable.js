import React from 'react';
import './PopulateTable.css';

class FillTable extends React.Component {

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
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image">
                            <img id="image" src={this.props.src} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <table className="table table-borderless table-hover mx-4 px-4">
                                <tbody>
                                    <FillTable menu={this.props.menu} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div className="container text-center">
                    Loading...
            </div>
            ));
    }
}

export default PopulateTable;