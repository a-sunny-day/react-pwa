import React from 'react';
import './test-section.scss';
import classnames from 'classnames';
export default function TextSectioin(props) {
    return (
        <div className={classnames({"xyz-random-text-section": true,  [props.className]: props.className})}>
            {props.children}
        </div>
    )
}