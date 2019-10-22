import React from 'react';

class FillTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        }
    }

    componentDidMount() {

        const menuItems = localStorage.getItem(this.props.menu);
        console.log(JSON.parse(menuItems));
        // this.setState({ menuItems: menuItems });
        // localStorage.setItem(menuItems);
    }

    render() {
        return (
            this.state.menuItems.map((item, idx) => {
                return (
                    <tr key={idx}>
                        <td>test</td>
                    </tr>
                );
            })
        );
    }
}

class PopulateTable extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                        <FillTable menu={this.props.menu} check={this.props.check} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PopulateTable;