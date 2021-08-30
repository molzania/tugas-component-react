
function ProductItem({listProducts}) 

{ return ( 
<>
<div className="card">
<img src={listProducts.gambar} alt="menu"/>
<div> {listProducts.menu} </div>
<div>{listProducts.harga}</div>
</div>

</>
    
    )} 

export default ProductItem; 