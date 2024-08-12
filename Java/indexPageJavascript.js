document.addEventListener('DOMContentLoaded', function() {
    const fiverButton = document.getElementById("fiverLinkButton");

    fiverButton.addEventListener('click', function() {
        const url = "https://www.fiverr.com/";
        window.open(url, '_blank');
    });
});

