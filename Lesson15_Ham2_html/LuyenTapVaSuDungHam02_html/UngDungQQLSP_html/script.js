const products = [`Tao`, `Cam`, `Chuoi`, `Le`];
let productIndex = -1

function displayProduct() {
    document.getElementById(`productCount`).innerHTML = products.length + `products`;
    const tableBody = document.getElementById('productList');
    tableBody.innerHTML = '';
    let row = ``;
    for (let i = 0; i < products.length; i++) {
        row += `<tr>`;
        row += `<td>${products[i]}</td>`;
        row += `<td><button type="button" onclick="handleEdit(${i})">edit</button></td>`;
        row += `<td><button type="button" onclick="handleDelete(${i})">Delete</button></td>`;
        row += `</tr>`
    }
    tableBody.innerHTML = row;
}

function createProduct(e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    if (productIndex !== -1) {
        products[productIndex] = productName;
        productIndex = -1;
        document.getElementById('productName').value = '';
        document.getElementById('btnAdd').innerText = 'Add';
    } else {
        products.push(productName);
    }
    displayProduct();
}

function handleDelete(index) {
    if (confirm(`ban co muon xoa san pham ${products[index]} khong ?`)) {
        products.splice(index, 1);
        displayProduct();
    }

}

function handleEdit(index) {
    productIndex = index;
    const productName = products[index];
    console.log(productName);
    document.getElementById('productName').value = productName;
    document.getElementById('btnAdd').innerText = 'Update';
    displayProducts();
}

displayProduct();
