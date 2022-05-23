


function append(){

    let data = JSON.parse(localStorage.getItem('products')) || [];

    let container = document.getElementById('all_products');


    container.innerHTML=null;

    data.forEach(function (el, index){

        let div = document.createElement('div');


        let img= document.createElement('img');
        img.src=el.image;


        let typ=document.createElement('typ');
        typ.innerText=el.type;


        let des=document.createElement('des');
        des.innerText=el.desc;

        let pri=document.createElement('pri');

        pri.innerText=el.price;

        var btn = document.createElement('button');
        btn.innerText="Remove";

        btn.addEventListener("click", function(){
            removeItem(el, index);
        });

        div.append(img, typ, des, pri, btn)
        all_products.append(div);

       
    });

function removeItem(el, index){
    console.log(el, index);
    data.splice(index, 1);
    console.log(data);
    localStorage.setItem("products", JSON.stringify(data));
    window.location.reload();
}
}

append();