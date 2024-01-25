// alert
const showAlert = () => {
  alert('this is windows alert method');
};

// confirm
const showConfirm = () => {
  const result = confirm('this is windows confirm method');
  if (result === true) {
    alert('this is true');
  } else {
    console.log('this is false');
  }
};

// prompt
const showPrompt = () => {
  const promptName = prompt('this is windows prompt method');
  console.log(promptName);
  if (promptName === null) {
    alert('there is no text');
  } else {
    console.log('welcome to prompt method');
  }
};
