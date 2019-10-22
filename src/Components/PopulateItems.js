import React from 'react';

class PopulateItems extends React.Component {
    render() {
        return (
            this.props.items.map((item, idx) => {
                return (
                    <li key={idx} className="nav-item">
                        <a
                            href={item.href}
                            className={item.className}
                            id={item.id}
                            role={item.role}
                            aria-controls={item.name}
                            aria-selected={item.select}
                        >
                            {item.name}
                        </a>
                    </li>
                );
            })
        );
    }
}

export default PopulateItems;