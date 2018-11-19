
async function get_ip(hint) {
  try {
    let response = await fetch('http://ip-api.com/json');
    if (response.status !== 200) {
      throw new Error(response.status + " " + response.statusText);
    }
    let {query:ip, country, city} = await response.json();
    document.getElementById('result').textContent = `${ip} (${city}, ${country})`;
    hint.textContent = "Your IP address is:";
  } catch (err) {
    alert("Problem retrieving data: " + err);
  }
}

document.getElementById('hint').onclick = function () {
  let hint = this;

  get_ip(this);

  hint.textContent = "Retrieving IP address...";
  hint.style.cursor = "inherit";
  hint.onclick = null;
};