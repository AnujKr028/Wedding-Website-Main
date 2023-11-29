// JavaScript for handling the form and displaying engagements

function recordEngagement() {
    // Get form values
    const coupleName = document.getElementById('coupleName').value;
    const date = document.getElementById('date').value;
    const venue = document.getElementById('venue').value;

    // Create a new engagement entry
    const engagementEntry = document.createElement('li');
    engagementEntry.innerHTML = `<strong>${coupleName}</strong> - ${date} - ${venue}`;

    // Append the new entry to the list
    document.getElementById('engagementsList').appendChild(engagementEntry);

    // Clear the form fields
    document.getElementById('coupleName').value = '';
    document.getElementById('date').value = '';
    document.getElementById('venue').value = '';
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}






// JS for Wedding Expences Page





// Initialize the table with predefined items
window.onload = function () {
  var table = document.getElementById("expenseList");

  predefinedItems.forEach(function (item) {
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);

      cell1.innerHTML = item.name;
      cell2.innerHTML = "Rs." + item.expense.toFixed(2);

      updateTotalExpense(item.expense);
  });
};

function addItem() {
  var itemName = document.getElementById("itemName").value;
  var itemExpense = parseFloat(document.getElementById("itemExpense").value);

  if (itemName && !isNaN(itemExpense)) {
      var table = document.getElementById("expenseList");
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);

      cell1.innerHTML = itemName;
      cell2.innerHTML = "Rs." + itemExpense.toFixed(2);

      updateTotalExpense(itemExpense);

      // Clear input fields
      document.getElementById("itemName").value = "";
      document.getElementById("itemExpense").value = "";
  } else {
      alert("Please enter valid item name and expense.");
  }
}

function updateTotalExpense(itemExpense) {
  var totalElement = document.getElementById("totalExpense");
  var currentTotal = parseFloat(totalElement.innerText.split(":")[1].trim().substring(1));

  var newTotal = currentTotal + itemExpense;
  totalElement.innerText = "Total Expense: Rs." + newTotal.toFixed(2);
}