function checkAge() {
  const ageField = document.getElementById('age');
  const ageText = ageField.value;
  const errorTag = document.getElementById('error');

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw 'please enter the number';
    } else if (age < 18) {
      throw 'children is not allowed';
    } else if (age > 30) {
      throw 'old person is not allowed';
    }
    errorTag.innerHTML = '';
  } catch (err) {
    console.log('Error', err);
    errorTag.innerHTML = 'Error: ' + err;
  } finally {
    console.log('all done inside try catch');
  }
  console.log(151233);
}
