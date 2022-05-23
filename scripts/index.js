//store the products array in localstorage as "products"





function Products(n, c, u, i){

    this.type=n;
    this.desc=c;

    this.price=`Rs${u}`;

    this.image=i;
}




function productData(e){

e.preventDefault();


let form = document.getElementById("products");

let type= form.type.value;

let desc = form.desc.value;

let price=form.price.value;

let image=form.image.value;


// let p1 = new Products(type, desc, )

// console.log(type, desc, price, image);
 

let p1 =new Products(type, desc, price, image);

// console.log(p1);

let data = JSON.parse(localStorage.getItem('products')) || [];
data.push(p1);


// console.log(data);

localStorage.setItem('products', JSON.stringify(data))

console.log(p1);

}
