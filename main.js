const submit = document.getElementById('submit')
const itemList = document.getElementById('items');


submit.addEventListener("click", addToCrudCrud);

function addToCrudCrud(e){
    e.preventDefault();
    const name = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    let myObj = {
        name: name,
        desc: description,
        quantity: quantity,
        price: price
    };
    axios.post("https://crudcrud.com/api/48542c86e3de4d29a8cc1629edeedfa9/stock",myObj)
    .then(res => {
        showUserOnScreen(myObj);
    })
    .catch(err =>{
        console.log(err)
    })
}

function showUserOnScreen(user){
    const name = user.name;
    const description = user.desc;
    const quantity = user.quantity;
    const price = user.price;

     //create li
    let li = document.createElement('li');
    let buy1 = document.createElement('button');
    let buy2 = document.createElement('button');
    let buy3 = document.createElement('button');

    //inserting text
    const newliText = document.createTextNode(name+'-'+description+'-'+quantity+'-'+price);
    let buy1Text = document.createTextNode('Buy 1');
    let buy2Text = document.createTextNode('Buy 2');
    let buy3Text = document.createTextNode('Buy 3');
    li.appendChild(newliText);
    buy1.appendChild(buy1Text);
    buy2.appendChild(buy2Text);
    buy3.appendChild(buy3Text);

    let container = document.querySelector('#items');
    container.appendChild(li);
    li.appendChild(buy1);
    li.appendChild(buy2);
    li.appendChild(buy3);

    buy1.onclick = ()=>{
        let idUser=user._id;
        let quant=user.quantity-1;
        // document.getElementById('itemName').value=user.name;
        // document.getElementById('description').value=user.desc;
        // document.getElementById('quantity').value = user.quantity;
        // document.getElementById('price').value=user.price;
        axios.put("https://crudcrud.com/api/48542c86e3de4d29a8cc1629edeedfa9/stock/"+idUser,{
            name: user.name,
            desc: user.desc,
            quantity: quant,
            price: user.price
          })
    }
    buy2.onclick = ()=>{
        let idUser=user._id;
        let quant=user.quantity-2;
        // document.getElementById('itemName').value=user.name;
        // document.getElementById('description').value=user.desc;
        // document.getElementById('quantity').value = user.quantity;
        // document.getElementById('price').value=user.price;
        axios.put("https://crudcrud.com/api/48542c86e3de4d29a8cc1629edeedfa9/stock/"+idUser,{
            name: user.name,
            desc: user.desc,
            quantity: quant,
            price: user.price
          })
    }
    buy3.onclick = ()=>{
        let idUser=user._id;
        let quant=user.quantity-3;
        // document.getElementById('itemName').value=user.name;
        // document.getElementById('description').value=user.desc;
        // document.getElementById('quantity').value = user.quantity;
        // document.getElementById('price').value=user.price;
        axios.put("https://crudcrud.com/api/48542c86e3de4d29a8cc1629edeedfa9/stock/"+idUser,{
            name: user.name,
            desc: user.desc,
            quantity: quant,
            price: user.price
          })
    }
}

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/48542c86e3de4d29a8cc1629edeedfa9/stock")
    .then((res)=>{
        console.log(res);
        for(var i=0 ;i< res.data.length;i++){
            showUserOnScreen(res.data[i]);
        }
    })
    .catch((err)=>{
      console.log(err);
    })
  })
