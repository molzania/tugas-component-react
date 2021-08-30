
function ProductItem({listProducts}) 

{ return ( 
<>
<div className="product-card">
<img src={listProducts.gambar} alt="menu" type="jpg" className="food-menu"/>
<div> {listProducts.menu} </div>
<div>{listProducts.harga}</div>
</div>

</>
    
    )} 

export default ProductItem; 