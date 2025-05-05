class Book {
    id;
    name;
    yearOfPublication;
    quantity;
    status;

    constructor(id, name, yearOfPublication, quantity, status) {
        this.id = id;
        this.name = name;
        this.yearOfPublication = yearOfPublication;
        this.quantity = quantity;
        this.status = status;
    }
}

const book = [
    new Book('12345', 'Toán', '2000', '3', 'true'),
    new Book('23456', 'Văn', '1998', '4', 'true'),
    new Book('37456', 'Tiếng Anh', '1999', '5', 'false')
];

function displayBook() {
    let tableBody = document.getElementById("bookList");
    tableBody.innerHTML = "";
    let row = '';
    for (let i = 0; i < book.length; i++) {
        console.log(book[i]);
        row += `
<tr>
     <td>${book[i].id}</td>
     <td>${book[i].name}</td>
     <td>${book[i].yearOfPublication}</td>
     <td>${book[i].quantity}</td>
     <td>${book[i].status}</td>
</tr>
        `
    }
    tableBody.innerHTML = row;
}

displayBook();

function addBookNew() {
    let id;
    while (true) {
        id = prompt("Nhập mã sách (5 ký tự, bắt đầu từ 1-5):");
        if (!id) return; // nếu nhấn Cancel
        if (/^[1-5][0-9]{4}$/.test(id)) {
            if (book.find(b => b.id === id)) {
                alert("Mã sách đã tồn tại!");
            } else {
                break;
            }
        } else {
            alert("Mã sách không hợp lệ! Phải bắt đầu từ 1-5 và có 5 chữ số.");
        }
    }

    let name;
    while (true) {
        name = prompt("Nhập tên sách:");
        if (!name) {
            alert("Tên sách không được để trống!");
        } else {
            break;
        }
    }

    let year;
    while (true) {
        year = prompt("Nhập năm xuất bản (4 chữ số):");
        if (!year) return;
        if (/^\d{4}$/.test(year)) {
            break;
        } else {
            alert("Năm xuất bản phải là 4 chữ số.");
        }
    }

    let quantity;
    while (true) {
        quantity = prompt("Nhập số quyển > 0:");
        if (quantity === null) return;
        if (!isNaN(quantity) && Number(quantity) > 0) {
            quantity = Number(quantity);
            break;
        } else {
            alert("Số quyển không hợp lệ! Phải là số > 0.");
        }
    }

    const newBook = new Book(id, name, Number(year), quantity, quantity > 0);
    book.push(newBook);
    displayBook();
    alert("Thêm sách mới thành công!");
}

function addBookAvailable() {
    let id = prompt("Nhập mã số sách muốn thêm số lượng:");
    let found = false;

    for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
            found = true;
            let addQty = +prompt("Nhập số quyển muốn thêm:");
            if (isNaN(addQty) || Number(addQty) <= 0) {
                alert("Số quyển thêm phải là số lớn hơn 0!");
                return;
            }

            book[i].quantity += Number(addQty);

            if (book[i].quantity > 0) {
                book[i].status = true;
            }

            alert("Đã thêm sách thành công!");
            break;
        }
    }

    if (!found) {
        alert("Không tìm thấy sách với mã số đã nhập!");
    }

    displayBook();
}

function borrowBook() {
    let id = prompt("Nhập mã số sách muốn mượn:");
    let found = false;

    for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
            found = true;
            if (book[i].quantity > 0) {
                book[i].quantity--;

                // Nếu sau khi mượn mà số quyển = 0 thì trạng thái là false
                if (book[i].quantity === 0) {
                    book[i].status = false;
                }

                alert("Mượn sách thành công!");
            } else {
                alert("Sách đã hết! Không thể mượn.");
            }
            break;
        }
    }

    if (!found) {
        alert("Không tìm thấy mã sách.");
    }

    displayBook();
}

function showMostBook() {
    let mostBook = book[0];

    for (let i = 1; i < book.length; i++) {
        if (book[i].quantity > mostBook.quantity) {
            mostBook = book[i];
        }
    }

    alert(`Sách có số lượng nhiều nhất là:\nTên sách: ${mostBook.name}\nSố lượng: ${mostBook.quantity}\nNăm sản xuất:${mostBook.yearOfPublication}`);
}