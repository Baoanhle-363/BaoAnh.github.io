function calculate(operator) {
    const str1 = document.getElementById('num1').value;
    const str2 = document.getElementById('num2').value;
    let result;

    switch (operator) {
        case '+':
            result = str1 + str2; // Nối hai chuỗi lại với nhau
            break;
        case '-':
            result = 'Không thể thực hiện phép trừ trên chuỗi'; // Tùy chỉnh thông báo
            break;
        case '*':
            result = 'Không thể thực hiện phép nhân trên chuỗi'; // Tùy chỉnh thông báo
            break;
        case '/':
            result = 'Không thể thực hiện phép chia trên chuỗi'; // Tùy chỉnh thông báo
            break;
        default:
            result = 'Lỗi';
    }

    document.getElementById('result').innerText = result;
}