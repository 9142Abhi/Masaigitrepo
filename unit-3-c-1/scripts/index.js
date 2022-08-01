//store the products array in localstorage as "products"
function prod(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function myProducts(event){
    event.preventDefault()
    let arr=[];
    let form=document.getElementById("products");
    
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let myProd=new prod(type,desc,price,image);
    arr.push(myProd);
    
    
    
    localStorage.setItem("products",JSON.stringify(arr)); 
    
    
    let x=JSON.parse(localStorage.getItem("products"))||[];
    
   
    
}