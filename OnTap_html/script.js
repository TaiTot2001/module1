class Student {
    id;
    name;
    classId;
    email;
    dateOfBirth;

    constructor(id, name, classId, email, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.classId = classId;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
}

const student = [
    new Student('HV-0001', 'Nguyễn Văn A', 'C1022G1', 'nguyenvana@gmail.com', "01/01/2004"),
    new Student('HV-0002', 'Nguyễn Văn B', 'C1122G1', 'nguyenvanb@gmail.com', "02/02/2004"),
    new Student('HV-0003', 'Nguyễn Thị C', 'C1222G1', 'nguyenthic@gmail.com', '03/03/2004'),
];

function displayStudent() {
    let tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";
    let row = '';
    for (let i = 0; i < student.length; i++) {
        console.log(student[i]);
        row += `
<tr>
     <td>${student[i].id}</td>
     <td>${student[i].name}</td>
     <td>${student[i].classId}</td>
     <td>${student[i].email}</td>
     <td>${student[i].dateOfBirth}</td>
</tr>
        `
    }
    tableBody.innerHTML = row;
}

displayStudent();

function addStudent() {
    // event.preventDefault();// Ngăn form reload lại trang

    let id = prompt("Nhập mã học viên (VD: HV-0004):");
    let name = prompt("Nhập tên học viên:");
    let classId = prompt("Nhập lớp:");
    let email = prompt("Nhập email:");
    let dateOfBirth = prompt("Nhập ngày sinh (dd/mm/yyyy):");

    if (id && name && classId && email && dateOfBirth) {
        let newStudent = new Student(id, name, classId, email, dateOfBirth);
        student.push(newStudent);
        displayStudent(); // Hiển thị lại danh sách
    } else {
        alert("Vui lòng nhập đầy đủ thông tin học viên.");
    }
}

function editStudent() {
    let checkId = prompt("Nhập mã học viên cần sửa")
    for (let i = 0; i < student.length; i++) {
        if (checkId === student[i].id) {
            let select = prompt(`
                Bạn muốn sửa mục nào của học viên ${checkId} :
                0. Sửa mã học viên
                1. Sửa tên
                2. Sửa lớp
                3. Sửa email
                4. Sửa ngày sinh
                5. Sửa tất cả
                Điền số từ 0-5 để chọn mục tương ứng mà bạn muốn sửa😄.
                `)
            while (+select > 5 || +select < 0 || select === "" || isNaN(select)) {
                select = prompt(`
                    Bạn đã nhập sai!
                    Vui lòng nhập giá trị 0-5 tương ứng với các mục sau:
                    0. Sửa mã học viên
                    1. Sửa tên
                    2. Sửa lớp
                    3. Sửa email
                    4. Sửa ngày sinh
                    5. Sửa tất cả
                    `)
            }
            if (select === null) {
                alert("Chương trình đã thoát !")
                return;
            } else if (+select === 0) {
                let id = prompt("Nhập mã học viên (VD: HV-0004):");
                student[i].id = id;
                alert("Bạn đã sửa thành công")
                displayStudent();
                return;
            } else if (+select === 1) {
                let name = prompt("Nhập tên học viên:");
                student[i].name = name;
                alert("Bạn đã sửa thành công")
                displayStudent();
                return;
            } else if (+select === 2) {
                let classId = prompt("Nhập lớp:");
                student[i].classId = classId;
                alert("Bạn đã sửa thành công")
                displayStudent();
                return;
            } else if (+select === 3) {
                let email = prompt("Nhập email:");
                student[i].email = email;
                alert("Bạn đã sửa thành công")
                displayStudent();
                return;
            } else if (+select === 4) {
                let dateOfBirth = prompt("Nhập ngày sinh (dd/mm/yyyy):");
                student[i].dateOfBirth = dateOfBirth;
                alert("Bạn đã sửa thành công")
                displayStudent();
                return;
            } else if (+select === 5) {
                let id = prompt("Nhập mã học viên (VD: HV-0004):");
                if (id === null) return;

                let name = prompt("Nhập tên học viên:");
                if (name === null) return;

                let classId = prompt("Nhập lớp:");
                if (classId === null) return;

                let email = prompt("Nhập email:");
                if (email === null) return;

                let dateOfBirth = prompt("Nhập ngày sinh (dd/mm/yyyy):");
                if (dateOfBirth === null) return;

                student[i].id = id;
                student[i].name = name;
                student[i].classId = classId;
                student[i].email = email;
                student[i].dateOfBirth = dateOfBirth;

                alert("Bạn đã sửa tất cả thông tin thành công");
                displayStudent();
                return;
            }
            // else{
            //     alert("Chương trình đã thoát !")
            //     return;
            // }

        } else if (checkId === null) {
            alert("Bạn đã hủy sửa thông tin sinh viên!")
            return;
        }
    }
    if (+checkId === null) {
        alert("Chương trình đã thoát !");
    }
    else {
        alert(`Mã sinh viên bạn tìm không tồn tại !`)
    }
}


function deleteStudent() {
    let checkId = prompt("Nhập mã học viên cần xóa");
    if (checkId === null || checkId === "") {
        alert("Bạn đã hủy xóa thông tin học viên!");
        return;
    }
    for (let i = 0; i < student.length; i++) {
        if (checkId === student[i].id) {
            if (confirm(`Bạn có chắc chắn muốn xóa học viên có mã "${checkId}" không?`)) {
                student.splice(i, 1);
                displayStudent();
                return;
            } else {
                return;
            }
        }
    }
    alert(`Mã sinh viên bạn tìm không tồn tại!`)
}