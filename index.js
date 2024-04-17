//This code snippet demonstrates how to create a 3D animation effect using jQuery. 
// alert('Hello');
// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');



/* Movement Animation Setup:
The initial setup involves selecting the card and container elements. By moving Animation Event
 The code calculates the rotation angles based on the mouse position and applies them to the card element. And by
removing animation, Animation reset occurs when the mouse leaves the container, resetting the card's rotation. Next is
Adding Animation, animation effects are added when the mouse enters the container, creating a popout effect for various elements. And when 
it comes to selecting elements selection of specific elements within the card for additional transformations.
*/