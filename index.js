var productNameInput= document.getElementById('ProductName');//input kolo
var productPriceInput=document.getElementById('ProductPrice');//input kolo
var productCategoryInput=document.getElementById('ProductCategory');//input kolo
var productDescInput=document.getElementById('ProductDesc');//input kolo
var searchInput=document.getElementById('searchInput');//input kolo
var productContainer=[];
var addbtn=document.getElementById('addbtn');
var updateBtn=document.getElementById('updateBtn');

if(localStorage.getItem('products')!=null){
    productContainer=JSON.parse(localStorage.getItem('products'));
    displayProduct(productContainer)
}

function addProduct(){
var product ={
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value
}
productContainer.push(product);
localStorage.setItem("products", JSON.stringify(productContainer))
displayProduct(productContainer);
clearForm();
}

function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";
}

function displayProduct(arr){
    var cartoona=``;
    for(var i=0; i<arr.length; i++){
        cartoona+=`    <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].desc}</td>
        <td><button  onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartoona;
}

function deleteProduct(productIndex){
 productContainer.splice(productIndex,1);
 localStorage.setItem("products", JSON.stringify(productContainer))
 displayProduct(productContainer);
}

function searchProduct(term){
    var machedProducts=[];
    for(i=0; i<productContainer.length; i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())===true){
            machedProducts.push(productContainer[i])
        }
    }
    displayProduct(machedProducts);
}
searchProduct(searchInput.value)

function setFormForUpdate(i){
 addbtn.classList.replace('d-block', 'd-none');
 updateBtn.classList.replace('d-none','d-block');
 productNameInput.value=productContainer[i].name;
 productPriceInput.value=productContainer[i].price;
 productCategoryInput.value=productContainer[i].category;
 productDescInput.value=productContainer[i].desc;
}

function updateProducts(i){
var updatedProducts=[];
updateBtn.classList.replace('d-block', 'd-none');
addbtn.classList.replace('d-none','d-block');
productNameInput.value=productContainer[i].name;
 productPriceInput.value=productContainer[i].price;
 productCategoryInput.value=productContainer[i].category;
 productDescInput.value=productContainer[i].desc;
 updatedProducts.push(productContainer[i])
 localStorage.setItem("products", JSON.stringify(productContainer));
 displayProduct(updatedProducts);
 clearForm();
}



