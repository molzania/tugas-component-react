import React, {useState}  from 'react';
import './Soal2.css';
import img3 from './pink3.jpg';
import batagor from './products/batagor.jpg';
import kimchi from './products/kimchi.jpg';
import topokki from './products/topokki.jpg'
import sushi from './products/sushi.jpg';
import ProductItem from './ProductItem';

function Soal2() {

  const [listProducts, setListProducts] = useState([{
    menu: 'Batagor',
    gambar: {batagor},
    harga: 10000
  },
  {
  menu: 'Kimchi',
  image: {kimchi},
  harga: 15000
  },
  {
  menu: 'Topokki',
  gambar: {topokki},
  harga: 20000
  },
  {
  menu: 'Sushi',
  gambar: {sushi},
  harga: 25000
  }])



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
      <h2>Selamat Datang di Molzania Shop</h2>
      <p>Di bawah ini List Produk yang Kami Jual:</p>
  </div>
  {listProducts.map((item, index) => {
    return <ProductItem value={item} key={index}/>
  })}
      </div>
    );
  }
  
  export default Soal2;