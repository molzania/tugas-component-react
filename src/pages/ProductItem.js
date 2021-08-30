
function ProductItem({listProducts}) 

{ return ( 
<>
<div className="card">
<img src={listProducts.gambar} alt="menu" type="jpg"/>
<div> {listProducts.menu} </div>
<div>{listProducts.harga}</div>
</div>

</>
    
    )} 

export default ProductItem; 