
setInterval(function(){
    
    today = new Date();

    hr = today.getHours();

    min = today.getMinutes();

    sec = today.getSeconds();


    hr_rotate = 30*hr+min/2;

    min_rotate = 6*min;

    sec_rotate = 6*sec;


    hour.style.transform = `rotate(${hr_rotate}deg)`;

    minute.style.transform = `rotate(${min_rotate}deg)`;


    second.style.transform = `rotate(${sec_rotate}deg)`





},1000);