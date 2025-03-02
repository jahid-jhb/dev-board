document.getElementById('random-theme')
    .addEventListener('click', function (event) {
        let color = '#';

        for (let i = 0; i < 6; i++) {
            const hexLetters = "0123456789abcdef";
            const ranNum = Math.floor(Math.random() * 16);

            color += hexLetters[ranNum];
        }
        document.body.style.backgroundColor = color;
    });

document.getElementById('blog-page')
    .addEventListener('click', function () {
        window.location.href = 'pages/blog.html';
    });