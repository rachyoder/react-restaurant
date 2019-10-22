import React from 'react';

class PopulateTable extends React.Component {


    render() {
        return (
            this.props.items.map((item, idx) => {
                <div
                    className={item.class}
                    id={item.name}
                    role="tabpanel"
                    aria-labelledby={item.id}
                >
                    <table className="table">
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>

            })
        );
    }
}