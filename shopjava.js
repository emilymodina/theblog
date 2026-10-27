function sortItems(type) {
    var grid = document.querySelector(".grid");
    var items = grid.querySelectorAll(".item");

    // making the list sortable?
    var list = [];
    for (var i = 0; i < items.length; i++) {
        list.push(items[i]);
    }

    // sorting the garfield
    list.sort(function (a, b) {
        var diff = a.dataset[type] - b.dataset[type];   // low to high..

        if (type == "year" || type == "rating") {
            diff = b.dataset[type] - a.dataset[type];   // high to low..
        }

        // if 2 garfields tie in value theyll jsut stick to default order
        if (diff == 0) {
            diff = a.dataset.order - b.dataset.order;
        }

        return diff;
    });

    // garfields are put back on page but in a diff order
    for (var j = 0; j < list.length; j++) {
        grid.appendChild(list[j]);
    }

    // change the subheading and show the X
    var labels = {
        price: "Filtered by Price (Low to High)",
        year: "Filtered by Year (Newest First)",
        rating: "Filtered by Star Rating (Highest First)"
    };
    document.getElementById("filter-text").textContent = labels[type];
    document.getElementById("reset-x").style.display = "inline";
}

function resetFilter() {
    sortItems("order");
    document.getElementById("filter-text").textContent = "Filtered by Date Collected";
    document.getElementById("reset-x").style.display = "none";
}