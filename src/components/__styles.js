import React from 'react';
import { createComponent } from 'react-fela';

const container = () => ({
    flexDirection: 'row',
    flex: 1,
    marginRight: '40px',
});

const setter = (props) => ({
    display: 'flex',
    flexDirection: `${props.direction||'row'}`,
    justifyContent:'space-between',
});

const button = () => ({
    width: '10%',
    height: '25px',
    backgroundColor: '#f7f8fa',
});

const header = () => ({
    width: '100%',
    height: '45px',
    backgroundColor: '#f7f8fa',
   //boxShadow: '1px 3px',
    display:'flex',
});

const footer = () => ({
    width: '100%',
    height: '45px',
    backgroundColor: '#f7f8fa',
    color: '#7FFF00',
    display:'flex',
    margin:'auto',
    cursor:'pointer'
});

const midPosition = () => ({
    margin:'auto',
})

// add min height
const midComponent = () => ({
    backgroundColor:'grey',
    height:'auto',
    minHeight:'100px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
});

const cards = () => ({
    backgroundColor: '#fff',
    color: 'blue',
    height: '30px',
    display: 'flex',
    alignContent: 'flex-start',
    padding: '4px',
    marginBottom: '8px',
    cursor:'pointer'
})
//    display: 'flex',setter
//align-content:
export const Header = createComponent(header,'div');
export const Cards = createComponent(cards,'div',['onClick']);
export const MidComponent = createComponent(midComponent,'div');
export const Footer = createComponent(footer,'div', ['onClick']);
export const Button = createComponent(button,'button', ['onClick']);
export const Container = createComponent(container,'div');
export const Setter = createComponent(setter,'div');
export const MidPosition = createComponent(midPosition,'div');
