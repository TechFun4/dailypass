let date = new Date();
date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
document.getElementById('date').value = date.toJSON().slice(0,10);

var remember = false;

if (localStorage.name) {
  var remember = true;
  document.getElementById("name").value = localStorage.name;
  document.getElementById("remember").checked = true;
}
if (localStorage.school) {
  var remember = true;
  document.getElementById("school").value = localStorage.school;
  document.getElementById("remember").checked = true;
}

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

  window.location.href = "/result?name=" + name + "&school=" + school + "&date=" + date;
  return false;
})

async function updateSchools(strig) {
  // might want to add metadata headers such as User-Agent jic
  let f = await fetch("https://pap.lausd.net/_odata/MSFT_Facility/?$filter=substringof(%27%s%27,msft_name)", encodeURIComponent(strig));
  f = await f.json();
  f.forEach(async e => {
    // do stuff with e obj
  });
}

$("#name, #school").on('input', function() {
  if (remember) {
    localStorage.name = document.getElementById("name").value;
    localStorage.school = document.getElementById("school").value;
  }
})

function rememberChange() {
  if (document.getElementById("remember").checked) {
    remember = true;
    localStorage.name = document.getElementById("name").value;
    localStorage.school = document.getElementById("school").value;
  } else {
    remember = false;
    localStorage.removeItem("name");
    localStorage.removeItem("school");
  }
}

$('#school').on('input', function() {
    console.log($('#school').val())
});