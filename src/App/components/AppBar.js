import React, {Component} from 'react'
import styled, {css} from 'styled-components'

const Bar = styled.div`
    display: grid; 
    margin-bottom: 40px   
    grid-template-columns: 180px auto 100px 100px;`
;

const Logo = styled.div`
    font-size: 1.5em;
`;
const ControlBtnElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow : 0px 0px 6px #03ff03;
    `}
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}) {
    return (
        <ControlBtnElem active={active}>
            {toProperCase(name)}
        </ControlBtnElem>
    )
}
export default class AppBar extends Component {
    render() {
        return (
            <Bar>
                <Logo>cryptodash</Logo>
                <div/>
                <ControlButton name="dashboard" active/>
                <ControlButton name="settings"/>
            </Bar>
        )
    }
}