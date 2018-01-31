import React, {Component} from 'react';
import styled from 'styled-components';
import bemto from 'bemto-components';
import theme from '../themes/theme';

const StyledButton = styled(bemto('button', {}))`
    display: inline-block;
    padding: 7px 15px;
    border: 1px;
    border-style: solid;
    border-radius: 0;
    text-decoration: none;
    text-align: center;
    color: black;
    border-color: black;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // to prevent flickering on safari
    &:hover {
        text-decoration: none;
        cursor: pointer
    }
    &:active,
    &:visited {
        color: inherit;
    }
    
    &_size {
        &_l {
            padding: 16px 24px;
            font-size: 17px;
        }
        &_m {
            padding: 14px 21px;
            font-size: 14px;
        }
        &_s {
            padding: 9px 14px;
            font-size: 14px;
        }
    }
    
    &_align {
        &_center {
            text-align: center;
        }
    }
    
    &_full-width {
        width: 100%;
        line-height: 1;
        text-align: center;
    }
    
    &_color {
        &_blue {
            background-color: ${theme.blue_1};
            border-color: ${theme.blue_1};
            color: white;
            &:hover {
                border: 1px solid ${theme.blue_2};
                background: linear-gradient(180deg, ${theme.blue_3} 0%, ${theme.blue_2} 100%);
            }
            &:active {
                background-color: black;
            }
            &:disabled {
                background-color: ${theme.gray_4};
            }
        }
        &_gray {}
        &_black {}
    }
    
    &_hidden {
        display: none;
    }
`;

class Button extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    render() {
        const {content, ...rest} = this.props;
        return (
            <StyledButton {...rest}>
                {content}
            </StyledButton>
        )
    }
}

export default Button;