import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import colors from './themes/colors';

import SelectPage from "./routes/SelectPage";
import SelectorChoosePage from "./routes/SelectorChoosePage";

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <ThemeProvider theme={colors}>
                <h1>Hello world</h1>
                <ul>
                    <li><NavLink to='/select-page' activeStyle = {{color: 'red'}}>select page</NavLink></li>
                    <li><NavLink to='/selector-choose' activeStyle = {{color: 'red'}}>selector choose</NavLink></li>
                </ul>
                <Route path = '/select-page' component = {SelectPage}/>
                <Route path = '/selector-choose' component={SelectorChoosePage}/>
            </ThemeProvider>
        )
    }
}

export default App;