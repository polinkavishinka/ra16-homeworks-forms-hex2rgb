import React, { useState } from 'react';
import './App.css';

function getChunks(str: string, len: number): string[] {
  const chunks = [];

  for (let i = 0; i < str.length; i += len) {
    chunks.push(str.substring(i, i+len));
  }

  return chunks;
}

function hex2dec(code: string): string {
  return (+('0x' + code)).toString();
}

function getDecChunks(hexChunks: string[]): string[] {
  return hexChunks.map((code) => hex2dec(code));
}

const errMsg = 'Ошибка!';

function App() {
  const [ msg, setMsg ] = useState('');
  const [ rgbCode, setRgbCode ] = useState('rgb(255, 255, 255)');

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const { value } = event.target;
    const { length } = value;

    const relevanted3 = (/^#[0-9a-f]{3}$/i).test(value);
    const relevanted6 = (/^#[0-9a-f]{6}$/i).test(value);

    if (
      length > 7
      // ||  (length === 4 && !relevanted3)
      || (length === 7 && ! relevanted6)
    ) {
      setMsg(errMsg);
    }

    if (!(relevanted3 || relevanted6))  {
      return;
    }

    const code = value.substring(1)

    let hexChunks: string[] = ['', '', ''];

    if (relevanted3) {
      hexChunks = getChunks(code, 1);

      hexChunks = hexChunks.map((chunk) => chunk.repeat(2));
    }

    if (relevanted6) {
      hexChunks = getChunks(code, 2);
    }

    const decChunks = getDecChunks(hexChunks);
    const rgbCode = `rgb(${decChunks.join(' ,')})`;
    setRgbCode(rgbCode);
    setMsg(rgbCode);
  }

  return (
    <>
      <div className='container' style={{backgroundColor: rgbCode}}>
        <input className='input' onChange={changeInput} />
        <div className='result'>{msg || ' '}</div>
      </div>
    </>
  )
}

export default App
