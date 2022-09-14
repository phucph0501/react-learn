import React, { useState, useEffect, useRef } from 'react';

const RED = '#ff0000';
const BLUE = '#0000ff';
const GRAY = '#678c89';

function Footer(props) {
  const submitThemeColor = (color) => {
    if (color) {
      console.log('handleChangeTheme');
      props.saveColorTheme(color);
    }
  };
  return (
    <div className="footer">
      <div className="vertical-center">
        <span>Choose Theme </span>
        <button
          onClick={() => submitThemeColor(RED)}
          className="
  dot red"
        />
        <button onClick={() => submitThemeColor(BLUE)} className="dot blue" />
        <button onClick={() => submitThemeColor(GRAY)} className="dot gray" />
      </div>
    </div>
  );
}

export default Footer;
