import React from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */

function getInputStyle(length) {
  let hue = 0 + length * 11;
  if (hue < 124) {
    return {
      backgroundColor: `hsl(${hue},100%, 50%)`
    };
  } else if ((length = 10)) {
    let hue = "124";
    return { backgroundColor: `hsl(${hue},100%, 62%)` };
  }

  const inputStyle = {
    backgroundColor: "hsl (2,100%,10%)"
  };
  return inputStyle;
}

function PasswordInput() {
  const [password, setPassword] = React.useState("");
  const passwordLength = password.length;

  return (
    <div>
      <input
        style={getInputStyle(passwordLength)}
        className="password-input"
        type="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      {password.length}
    </div>
  );
}

export default PasswordInput;

// How to change the background color? : with Css property background-color or background.
// How to access the input value (password)?
// How should a function looks like which returns the color based on password length?
// Why does it make sense to use CMYK?
// ...
