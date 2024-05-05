const Input = document.getElementById("intputBox");
function insertValue(value) {
  Input.value += value;
}
function clearResult() {
  Input.value = "";
}

function deleteResult() {
  Input.value = Input.value.slice(0, -1);
}
function calculate() {
  try {
    Input.value = eval(Input.value);
  } catch (error) {
    Input.value = "error";
  }
}
