import React from 'react';
import './Soal1.css';
import {useState} from 'react';
import img1 from './pink.jpg';

function Soal1() {
    const [count, setCount] = useState(0);

    const tambah = () => {
      if(count >= 0){
setCount(count + 1);
      }
    }

    const kurang = () => {
      if(count > 0){
        setCount(count-1);
      } else (
        setCount(0)
      )
    }

    return (
      <div className="Soal-1">
    <div className="pertanyaan-1" style={{backgroundImage: `url(${img1})`}}>
    <h1>Soal 1</h1>
    <p>Buatlah component counter tanpa melihat kodingan siapapun</p>
    </div>
    <div className="jawaban-1">
    <p>Masukkan angka yang diinginkan di bawah ini:</p>
    <h4>Angka</h4>
    <div className="counter">
      <button onClick={tambah}>+</button>
        <span className="angka">{count}</span>
      <button onClick={kurang}>-</button>
      </div>
      </div>
      </div>
    );
  }
  
  export default Soal1;