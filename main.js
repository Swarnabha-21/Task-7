window.onload = () => {
    const footer = document.createElement("footer");
    const footerContent = document.createTextNode("© Swarnabha Pradhan | All Rights Reserved "+new Date().getFullYear()+".");
    footer.appendChild(footerContent);
    document.body.appendChild(footer);
};
