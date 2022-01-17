var date = new Date();
date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
document.getElementById('date').value = date.toJSON().slice(0,10);

$("form").submit(function(event) {
  event.preventDefault();
  let name = $("#name").val()
  let school = $("#school").val()
  let date = $("#date").val()
  let covid = $("#covid").prop("checked")
  
  if (!name) {
    alert("Please provide a name to appear on the daily pass.");
    return false;
  }

  if (!school) {
    alert("Please provide a school to appear on the daily pass.");
    return false;
  }

  if (!date) {
    alert("Please provide a date to appear on the daily pass.");
    return false;
  }

  if (covid) {
    alert("Please stay home if you have COVID-19 symptoms.");
    return false;
  }

  window.location.href = `/result?name=${name}&school=${school}&date=${date}`
  return false;
})