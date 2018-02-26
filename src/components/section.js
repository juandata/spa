import React from 'react';
import '../assets/css/nav.css';

export function Section(props)  {
    return <section onClick={ (e) => props.onClick(props.navName,e) }><h1>{props.navName}</h1></section>;
}
