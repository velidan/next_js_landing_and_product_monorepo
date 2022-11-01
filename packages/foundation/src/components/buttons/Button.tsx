import React from 'react';

export function Button() {
    return (
        <button onClick={() => {
            console.log('Hi.Button click!')
        }}>I'm Button Updated!</button>
    )
}