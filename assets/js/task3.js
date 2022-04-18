const numArr = [];

const addNumber = () => {
  for (let i = 0; i <= 25; i++) {
    numArr.push(Math.floor(Math.random() * 100))
  }
  numArr[5] = 0;
  numArr[6] = 0;
  numArr[15] = 0;

  return addNumber;
}

const findPositiveIndex = () => {
  numArr.forEach((item, index) => {
    if (index % 2 === 0) {
      console.log(index);
    }
  })
}

const findPositiveItems = () => {
  numArr.forEach((item) => {
    if(item % 2 === 0) {
      console.log (item);
  }
})
}

const findZeroItems = () => {
  numArr.forEach((item, index) => {
    if(item === 0) {
      console.log(index)
    }
  }) 
}

const countZeroItems = () => {
  let zeroSum = 0;
  numArr.forEach((item) => {
    if(item === 0) {
      zeroSum++;
    }
  })
  console.log(zeroSum);
}


addNumber();