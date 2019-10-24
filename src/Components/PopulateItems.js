import React from 'react';

class PopulateItems extends React.Component {
    render() {
        return (
            this.props.items.map((item, idx) => {
                return ( this.props.link ? (
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
                    ) : (
                        <li className="list-group-item p-1 contactList" key={idx}>
                            <p id="montserrat" className="text-center m-0 contactPara">{item}</p>
                        </li>
                    )
                );
            })
        );
    }
}

export default PopulateItems;