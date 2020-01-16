import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            // TODO: Make another item component
            <div className="card">
                <div className="card-header">
                    Item
                </div>
                <div className="card-body">
                    <p className="card-text">Sample Text for the card</p>
                </div>
            </div>
        );
    }
}

export default Items;