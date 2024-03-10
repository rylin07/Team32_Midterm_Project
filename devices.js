/* 
Author: Ryan Lin
ISU Netid : rlin1@iastate.edu
Date : March 7th, 2024 */

// Function to create iPhone entries and append them to the webpage
function displayiPhones(data) {
    const mainContainer = document.getElementById("iphoneCatalogue");

    let row = document.createElement("div");
    row.className = "row";

    data.iPhones.forEach((iphone, index) => {
        let col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="${iphone.image_src}" alt="${iphone.model}" class="bd-placeholder-img card-img-top img-fluid" style="max-height: 200px; width: auto; display: block; margin-left: auto; margin-right: auto;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${iphone.model}</h5>
                    <p class="card-text">${iphone.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                            </div>
                            <small class="text-muted">${iphone.price}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

        row.appendChild(col);

        if ((index + 1) % 3 === 0 || index === data.iPhones.length - 1) {
            mainContainer.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
        }
    });
}

fetch('data.JSON')
    .then(response => response.json())
    .then(data => {
        displayiPhones(data);
    })
    .catch(err => console.error('Failed to load data:', err));
