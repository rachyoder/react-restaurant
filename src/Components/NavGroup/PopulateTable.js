import React from 'react';
import './PopulateTable.css';

class FillTable extends React.Component {

    render() {
        const menuItems = JSON.parse(localStorage.getItem(this.props.menu));
        return (
            menuItems.menu_items.map((item, idx) => {
                const length = item.description.length;
                const words = item.description.split(' ');
                return (
                    <tr key={idx} className="my-3 py-3">
                        <td className="caps"><p><i><b>{words.slice(0, 2).join(" ")}</b></i></p></td>
                        <td className="text-muted"><p><i>{item.description}</i></p></td>
                        <td><p className="last-item"><i>${length}.99</i></p></td>
                    </tr>
                );
            })
        );
    }
}

class PopulateTable extends React.Component {

    render() {

        return (localStorage.length > 0 ? (
            <div className="container" id="montserrat">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="image">
                            <img id="image" src={this.props.src} alt={this.props.menu} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="table-container">
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