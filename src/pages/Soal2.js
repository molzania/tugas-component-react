import React from 'react';
import './Soal2.css';
import img3 from './pink3.jpg';

function Soal2() {
    return (
      <div className="Soal-2">
     <div className="pertanyaan" style={{backgroundImage: `url(${img3})`}}>
    <h1>Soal 2</h1>
    <p>1. Buatlah sebuah component ListProduct yg memiliki state array of object</p>
    <p>2. Buatlah component ProductItem yg akan menerima props dari ListProduct</p>
    <p>3. Di dlm ListProduct, lakukan maping pada state lalu tampilkan ProductItem serta berikan props.</p>
    <p>Component : ListProduct, ProductItem</p>
    </div>
  <div className="jawaban-2">

    
  </div>
      </div>
    );
  }
  
  export default Soal2;