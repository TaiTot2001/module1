let number = prompt('Nhập số cần kiểm tra:');
if (number % 2 === 0 && number != 0) {
    document.write(number + ' Là số chẵn.');
}
else if (number % 2 !==0) {
    document.write(number + ' Là số lẻ.');
}
else {
    document.write('Invalid input!');}
