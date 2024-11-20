
//input   B5Scy6IR   
//output 
/*
          bindings
                = <&macro_press &kp LSHFT>
                , <&macro_tap &kp B>
                , <&macro_release &kp LSHFT>
                , <&macro_tap &kp N5>
                , <&macro_press &kp LSHFT>
                , <&macro_tap &kp S>
                , <&macro_release &kp LSHFT>
                , <&macro_tap &kp C &kp Y &kp N6 >
                , <&macro_press &kp LSHFT>
                , <&macro_tap &kp I &kp R>
                , <&macro_release &kp LSHFT>
                ;
*/
function converter(val, index) {
  let result = `
      p${index}: p${index} {
          compatible = "zmk,behavior-macro";
          #binding-cells = <0>;
           "${val}",
          bindings `;

  for (let i = 0; i < val.length; i++) {
    if (i === 0) {
      result += `
                = `;
    }
    else {
      result += `
                , `;
    }

    const char = val[i]

    if (/[A-Z]/.test(char)) {
      result += `<&macro_press &kp LSHFT>
                , <&macro_tap &kp ${char.toUpperCase()}>
                , <&macro_release &kp LSHFT>`;
    } else if (/[0-9]/.test(char)) {
      result += `<&macro_press &kp SAIDDDDDDDDD>
                , <&macro_tap &kp N${char}>
                , <&macro_release &kp SAIDDDDDDDDD>`;
    } else {
      result += `<&macro_press &kp SAIDDDDDDDDD>
                , <&macro_tap &kp ${char.toUpperCase()}>
                , <&macro_release &kp SAIDDDDDDDDD>`;
    }
  }
  result += `
                ;
      };`;
  return result;
}



const strArr = [
  "jf8HP18",
]

strArr.forEach((element, index) => {
  console.log(converter(element, index + 1))
});