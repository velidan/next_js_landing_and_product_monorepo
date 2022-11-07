import React from 'react';

const style = {
  width: 200,
  height: 100,
  backgroundColor: '#1899D6',
  border: 'solid transparent',
  borderRadius: '16px',
  borderWidth: '0 0 4px',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'din-round,sans-serif',
  fontSize: '15px',
  fontWeight: 700,
  letterSpacing: '.8px',
  lineHeight: '20px',
  margin: '0',
  outline: 'none',
  overflow: 'visible',
  padding: '13px 16px',
  textAlign: 'center',
  textTransform: 'uppercase',
  touchAction: 'manipulation',
  transform: 'translateZ(0)',
  transition: 'filter .2s',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

export function Button() {
  return (
    <button
      style={style as any}
      onClick={() => {
        console.log('Hi.Button click!');
      }}
    >
      <span className="bg-red-500 md:bg-purple-600">I'm a Button!</span>
    </button>
  );
}
