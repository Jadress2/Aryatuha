      function addItem() {
      const input = document.getElementById("itemInput");
      const text = input.value.trim();
      if (text === "") return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = text;

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = () => editItem(span);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      document.getElementById("itemList").appendChild(li);
      input.value = "";
    }

    function editItem(span) {
      const newText = prompt("Edit item:", span.textContent);
      if (newText !== null) {
        span.textContent = newText.trim();
      }
    }
  
