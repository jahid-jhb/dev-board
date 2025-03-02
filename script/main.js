// random bg

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


// blog page link

document.getElementById('blog-page')
    .addEventListener('click', function () {
        window.location.href = 'pages/blog.html';
    });



// make date

let todayDate = new Date;

const dayNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

document.getElementById('day-name').innerText = dayNames[todayDate.getDay()] + ',';
document.getElementById('date-format').innerText = monthNames[todayDate.getMonth()] + ' ' + todayDate.getDate() + ' ' + todayDate.getFullYear();





// Activity Log bar

const taskBtns = document.getElementsByClassName('task-btn');
for (const taskBtn of taskBtns) {
    taskBtn.addEventListener('click', function (event) {


        // set alert

        alert('Board Updated Successfully');


        // cal for uncompleted task

        let unCompletedTask = ((parseInt(document.getElementById('uncompleted-task').innerText)) - 1).toString();
        document.getElementById('uncompleted-task').innerText = unCompletedTask;


        // cal for completed task

        let completedTask = ((parseInt(document.getElementById('completed-task').innerText)) + 1).toString();
        document.getElementById('completed-task').innerText = completedTask;


        // last alert

        if(parseInt(unCompletedTask) == 0){
            alert('Congrats!!! You have completed all the current task');
        }



        // make time

        let todayDate = new Date;

        let currentH = (todayDate.getHours()).toString();
        let currentHour = currentH;

        let currentTime = currentHour + ':' + (todayDate.getMinutes()).toString() + ':' + (todayDate.getSeconds()).toString() + ' AM';

        if (currentH > 12) {
            currentHour = (currentH - 12).toString();
            currentTime = currentHour + ':' + (todayDate.getMinutes()).toString() + ':' + (todayDate.getSeconds()).toString() + ' PM';
        }



        // get task title and create a p element and append it

        const taskTitle = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText;

        const activityBox = document.getElementById('activity');

        const p = document.createElement('p');
        p.innerText = 'You have Complete The Task' + ' ' + taskTitle + ' at ' + currentTime;

        activityBox.appendChild(p);


        // button disabled

        event.target.setAttribute('disabled', '');
        
    });
};


// Activity Log Clear

document.getElementById('activity-clear').addEventListener('click', function(){
    document.getElementById('activity').innerHTML = '';
});