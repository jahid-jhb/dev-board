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



let todayDate = new Date;

const dayName = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(dayName[todayDate.getDay()]);
console.log(monthName[todayDate.getMonth()]);
console.log(todayDate.getDate());
console.log(todayDate.getFullYear());
console.log(todayDate.getHours());
console.log(todayDate.getMinutes());
console.log(todayDate.getSeconds());