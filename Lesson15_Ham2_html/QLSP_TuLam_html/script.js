const products = ['IP 12 Promax', 'IP 13 Promax', 'IP 14 Promax', 'IP 15 Promax',]

function displayProduct() {
    const tableBody = document.getElementById('productList');
    tableBody.innerHTML = '';
    let row = '';
    for (let i = 0; i < products.length; i++) {
        row += '<tr>';
        row += `<td> ${products[i]} </td>`;
        row += `<td><button type="button" onclick="handleEdit(${i})">Edit </button></td>`;
        row += `<td><button type="button" onclick="handleDelete(${i})" >Delete </button></td>`;
        row += '</tr>';

    }
    tableBody.innerHTML = row;
}

let productIndex = -1;

function addProduct(e) {
    e.preventDefault();
    const productName = document.getElementById('names').value;
    if (productIndex !== -1) {
        products[productIndex] = productName;
        productIndex = -1;
        document.getElementById('names').value = '';
        document.getElementById('btnAdd').innerText = 'Add';
    }
    else{
        products.push(productName);
        document.getElementById('names').value = '';
    }
    displayProduct();
}
function handleEdit(index) {
    productIndex = index;
    const productName= products[index];
    console.log(productName);
    document.getElementById('names').value = productName;
    document.getElementById('btnAdd').innerText = 'Update';

}

displayProduct();
