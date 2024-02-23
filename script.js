function confirmDownload(productName) {
    // Display the first popup with a notice and an OK button
    if (confirm('Are you sure you want to download ' + productName + '? Click OK to proceed.')) {
        // If OK is clicked, display the Terms of Service popup
        showTermsOfService(productName);
    }
}

function showTermsOfService(productName) {
    // Display the Terms of Service popup
    var agree = confirm('Please read and agree to the Terms of Service before downloading ' + productName +
        '.\n\nI have read and agree to the terms of service.');

    if (agree) {
        // If the user agrees, initiate the download
        initiateDownload(productName);
    } else {
        // If the user does not agree, display a message
        alert('You must agree to the Terms of Service to proceed with the download.');
    }
}

function initiateDownload(productName) {
    // Simulate the download process or redirect to the actual download link
    alert('Downloading ' + productName + '...');
}

function unavailableDownload() {
    // Display a message for unavailable downloads
    alert('This product is currently unavailable for download.');
}
