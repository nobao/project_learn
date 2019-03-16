function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

let phoneNumber = validate(prompt('Введите номер', '123-4567'));
alert (phoneNumber);
