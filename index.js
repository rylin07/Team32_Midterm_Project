/*
Author: Ryan Lin
ISU Netid : rlin1@iastate.edu
Date : March 7th, 2024 */

function displaySelectedProducts(data) {
    // Define arrays of the models you want to display
    const selectedIPhoneModels = ["iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max"];
    const selectedMacBookModels = ["MacBook Pro 16", "iMac", "MacBook Air M1", "MacBook Pro 14"]; // Adjust model names as per your data

    // Filter and display iPhones
    const filteredIPhones = data.iPhones.filter(iphone => selectedIPhoneModels.includes(iphone.model));
    displayProducts(filteredIPhones, "iphoneCatalogue");

    // Filter and display MacBooks/iMac
    const filteredMacBooks = data.MacBooksAndiMac.filter(mac => selectedMacBookModels.includes(mac.model));
    displayProducts(filteredMacBooks, "macbookCatalogue");
}

function displayProducts(products, containerId) {
    const mainContainer = document.getElementById(containerId);
    mainContainer.innerHTML = ''; // Clear existing content
    let row = document.createElement("div");
    row.className = "row";

    products.forEach((product, index) => {
        let col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="${product.image_src}" alt="${product.model}" class="bd-placeholder-img card-img-top img-fluid" style="max-height: 200px; width: auto; display: block; margin-left: auto; margin-right: auto;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.model}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                            </div>
                            <small class="text-muted">${product.price}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

        row.appendChild(col);

        if ((index + 1) % 3 === 0 || index === products.length - 1) {
            mainContainer.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
        }
    });
}

fetch('data.JSON')
    .then(response => response.json())
    .then(data => displaySelectedProducts(data))
    .catch(err => console.error('Failed to load data:', err));
