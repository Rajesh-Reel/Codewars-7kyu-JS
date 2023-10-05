/*

7 kyu 

Regex validate PIN code 

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN (pin) {
    let check = [];
    if (pin.length === 4 || pin.length === 6) {
      for (let i = 0; i < pin.length; i++) {
        if (typeof Number(pin[i]) === "number" && Number(pin[i]) >= 0 && pin[i] !== "\n") {
  //         console.log(typeof pin[i])
          check.push(pin[i]);
        }
      }
    }
  //   console.log(check, check.length)
    return check.length == 4 || check.length == 6 ? true : false;
}