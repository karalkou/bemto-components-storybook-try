import React, { Component } from 'react';
import Button from '../common/Button';
import MaterialButton from 'material-ui/Button';

class SelectorChoosePage extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <h2>Selector Choose Page</h2>
                <Button content='Bemto-like btn test' _color_blue/>

                <div/>

                <MaterialButton raised color="primary">
                    MUI Button
                </MaterialButton>
            </div>
        )
    }
}

export default SelectorChoosePage;