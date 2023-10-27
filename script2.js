function updateRGB() {
    let content = document.getElementById("content")
    let rgb = document.getElementById("rgb");
    content.style.color = rgb.value;
    content.style.border = `1px solid ${rgb.value}`;
}

function updateWidth() {
    let content = document.getElementById("content");
    let width = document.getElementById("width");
    content.style.width = width.value;
}
