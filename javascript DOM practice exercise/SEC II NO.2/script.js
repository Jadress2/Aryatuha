function filterTable() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let table = document.getElementById("dataTable");
  let trs = table.getElementsByTagName("tr");

  for (let i = 1; i < trs.length; i++) {
    let tds = trs[i].getElementsByTagName("td");
    let match = false;

    for (let j = 0; j < tds.length; j++) {
      let td = tds[j];
      if (td && td.textContent.toLowerCase().includes(filter)) {
        match = true;
        break;
      }
    }

    trs[i].style.display = match ? "" : "none";
  }
}
