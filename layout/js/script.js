var visible = true;

const sidebar = document.querySelector('.side-bar');
const main = document.querySelector('.page-main');
const image = document.querySelector('.my-image');

document.addEventListener("DOMContentLoaded", function (event) {
    if (document.body.offsetWidth <= 768) {
        visible = false;
        sidebar.setAttribute('data-visible', 'not-visible');
        sidebar.style.fontSize = '0.9em';
    }
});

document.querySelector('.nav-toggle').addEventListener('click', function (event) {
    if (document.body.offsetWidth < 768) {
        if (sidebar.getAttribute('data-visible') === 'visible') {
            image.style.height = '0';
            image.style.width = '0';
            main.style.marginLeft = '0';
            sidebar.style.padding = '0 0';
            sidebar.style.width = '0';
            visible = false;
            sidebar.setAttribute('data-visible', 'not-visible');
        } else if (sidebar.getAttribute('data-visible') === 'not-visible') {
            image.style.height = '100px';
            image.style.width = '100px';
            main.style.marginLeft = '0';
            sidebar.style.height = '380px';
            sidebar.style.padding = '20px 0';
            sidebar.style.width = '100%';
            visible = true;
            sidebar.setAttribute('data-visible', 'visible');
        }
    } else {
        if (sidebar.getAttribute('data-visible') === 'visible') {
            image.style.height = '0';
            image.style.width = '0';
            main.style.marginLeft = '0';
            sidebar.style.height = '100%';
            sidebar.style.padding = '20px 0';
            sidebar.style.width = '0';
            visible = false;
            sidebar.setAttribute('data-visible', 'not-visible');
        } else if (sidebar.getAttribute('data-visible') === 'not-visible') {
            image.style.height = '128px';
            image.style.width = '128px';
            main.style.marginLeft = '300px';
            sidebar.style.height = '100%';
            sidebar.style.padding = '20px 0';
            sidebar.style.width = '300px';
            visible = true;
            sidebar.setAttribute('data-visible', 'visible');
        }
    }
});