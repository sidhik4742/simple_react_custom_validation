export const formValidator = (fname, lname) => {
  console.log('datas should be validate :', fname, lname); // this will show first name last name
  console.log(typeof lname);
  let errMsg = {
    status: false,
  };
  if (fname === '') {
    errMsg.fname = '*This field is required';
    errMsg.status = true;
  }
  if (lname === '') {
    errMsg.lname = '*This field is required';
    errMsg.status = true;
  }
  return errMsg;
};
