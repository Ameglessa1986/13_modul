window.onload = () => {
    document.querySelector('#surnameOutput').innerText = 'Surname';
    document.querySelector('#firstNameOutput').innerText = 'Name';
    document.querySelector('#patronymicOutput').innerText = 'Patronomic';
    document.querySelector('#genderOutput').innerText = 'Sex';
    document.querySelector('#birthDayOutput').innerText = 'Day';
    document.querySelector('#birthMonthOutput').innerText = 'Month';
    document.querySelector('#birthYearOutput').innerText = 'Year';
    document.querySelector('#professionOutput').innerText = 'Work';
}

document.querySelector('#generationBtn').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
})

document.querySelector('#cleaningBtn').addEventListener('click', () => {
    document.querySelector('#surnameOutput').innerText = 'Surname';
    document.querySelector('#firstNameOutput').innerText = 'Name';
    document.querySelector('#patronymicOutput').innerText = 'Patronomic';
    document.querySelector('#genderOutput').innerText = 'Sex';
    document.querySelector('#birthDayOutput').innerText = 'Day';
    document.querySelector('#birthMonthOutput').innerText = 'Month';
    document.querySelector('#birthYearOutput').innerText = 'Year';
    document.querySelector('#professionOutput').innerText = 'Work';
})