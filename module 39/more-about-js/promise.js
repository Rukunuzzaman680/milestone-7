const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(5666646);
  } else {
    reject('No Data Available');
  }
});
getData
  .then(data => console.log(data + 14))
  .catch(err => console.log(err, 'ERR:'));
