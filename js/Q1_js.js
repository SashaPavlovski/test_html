let string = "A man, a plan, a canal: Panama";
let string2 = "race a car";
let ifPalindrome = (currentString) => {
  if (typeof currentString !== "string")
    throw new Error(`${currentString} is not string`);

  let arrayCurrent = [...currentString];
  let newArrayRegular = [];

  for (let i = 0; i < arrayCurrent.length; i++) {
    if (
      (arrayCurrent[i] >= "a" && arrayCurrent[i] <= "z") ||
      (arrayCurrent[i] >= "A" && arrayCurrent[i] <= "Z")
    ) {
      newArrayRegular.push(arrayCurrent[i]);
    }
  }

  let strRwgular = [...newArrayRegular].join("");
  let strRwgularSmall = strRwgular.toLowerCase();
  let newstrRereverse = newArrayRegular.reverse().join("");
  let strRereverseSmall = newstrRereverse.toLowerCase();
  //console.log(strRwgularSmall + "  " + strRereverseSmall);
  if (strRwgularSmall === strRereverseSmall) return true;
  return false;
};
console.log(ifPalindrome(string));
