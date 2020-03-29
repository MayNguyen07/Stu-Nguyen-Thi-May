function caculator() {
  var a = parseInt(document.querySelector("#firstnumber").value);
  var b = parseInt(document.querySelector("#secondnumber").value);
  var compute = document.querySelector('input[name="op"]:checked').value;
  var caculate;

  if (compute == "add") {
    caculate = a + b;
  } else if (compute == "min") {
    caculate = a - b;
  } else if (compute == "mul") {
    caculate = a * b;
  } else if (compute == "div") {
    caculate = a / b;
  } else {
    caculate = a ** b;
  }

  document.querySelector("#result").innerHTML = caculate;
}
