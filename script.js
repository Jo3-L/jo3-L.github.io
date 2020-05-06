// array of images that are randomely selected for the background.
const images = [
    'https://images5.alphacoders.com/699/699273.png',
    'https://images6.alphacoders.com/712/712437.jpg',
    'https://images8.alphacoders.com/617/617304.jpg',
    'https://images2.alphacoders.com/833/833534.png',
    'https://i.imgur.com/tC06jOl.png',
    'https://i.imgur.com/tC06jOl.png',
];

// change this to have a different name in the greeting.
const name = 'Joe'; 

const url = images[Math.floor(Math.random() * images.length)];
const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function checkTime() {
    const now = new Date();
    let hour = now.getHours(), minutes = now.getMinutes(), greeting = 'Good morning', after = 'AM';
    if (hour >= 13) greeting = 'Good afternoon';
    if (hour >= 17) greeting = 'Good evening';
    if (hour >= 20) greeting = 'Good night'; 
    if (hour > 12) {
        after = 'PM';
        hour = hour - 12;
    }
    $(document).attr('title', greeting);
    $('#time').text(`${hour}:${minutes.toString().padStart(2, 0)} ${after}`);
    $('#greeting').text(`${greeting}, ${name}`);
    $('#date').text(`${now.toLocaleDateString('en-US', opts)}`);
}

const checkWindowSize = () => $(window).width() < 1224 ? $('#dock').attr('hidden', 'true') : $('#dock').removeAttr('hidden');
checkWindowSize();
$(window).resize(checkWindowSize);

$('body').css('background-image', `url(${url})`);
$('#image-link').attr('href', url);
checkTime();
setInterval(checkTime, 1000);
