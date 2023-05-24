const menuItems = document.querySelectorAll('.menuItem');

// Add click event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Remove "active" class from all menu items
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add "active" class to the clicked menu item
        menuItem.classList.add('active');
    });
});


// Slideshow functionality
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Set the default picture to the middle
let active = 3;

function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Create blur effect on background images
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt})`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt})`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

    // Call function when arrow is clicked
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }