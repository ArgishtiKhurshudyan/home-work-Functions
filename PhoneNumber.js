/// Given a phone number.

function PhoneNum(n) {
  if (n.toString().length < 10) {
    return "badNumber";
  } else if (n.toString().length > 10) {
    return "incorrectNumber";
  } else {
    console.log("correctNumber");
  }
  return n.toString().length;
}
console.log(PhoneNum(8794561233));
