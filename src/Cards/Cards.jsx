import React, { Component } from 'react'
import Card from './CardUI'

import coder1 from '../Assets/coder1.jpg'
import coder2 from '../Assets/coder2.jpg'
import coder3 from '../Assets/coder3.jpg'


class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            imgsrc={coder1} title="Code"
                        />
                    </div>
                    <div className="col-md-4">
                    <Card
                            imgsrc={coder2} title="Console"
                        />
                    </div>
                    <div className="col-md-4">
                    <Card
                            imgsrc={coder3} title="Playground"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;
