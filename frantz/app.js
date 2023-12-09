const app = () => {
    
    const menulist = document.querySelector('#menulist');
    const menuBtn = document.querySelector('#menuBtn');
    const menuItemBtns = menulist.querySelectorAll('[role="menuitem"]');
    
    // clicking the menu trigger button
    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.attributes["aria-expanded"].value === "true";

        menulist.classList.toggle('active');
        menuItemBtns.item(0).focus();
        
        if (isExpanded) {
            menuBtn.ariaExpanded = "false";
            // menuBtn.focus();
        } else {
            menuBtn.ariaExpanded = "true";
        }
        
    });
    
    // clicking any of the menu items/buttons
    menuItemBtns.forEach(menuItemBtn => {
        menuItemBtn.addEventListener('click', () => {
            alert('A menu button has been clicked...');
        })
    });
    
    // pressing the 'Escape' key
    document.addEventListener('keyup', (event) => {
        if (event.key === "Escape" && menulist.classList.contains('active')) {
            menulist.classList.remove('active');
            menuBtn.focus();
            menuBtn.ariaExpanded = "false";
        } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            event.preventDefault();

            var focusedElement = document.activeElement;
            var focusableElements = Array.from(document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
            var currentIndex = focusableElements.indexOf(focusedElement);
            var nextIndex = (currentIndex + 1) % focusableElements.length;
            var nextElement = focusableElements[nextIndex];
            nextElement.focus();
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            event.preventDefault();
            
            var focusedElement = document.activeElement;
            var focusableElements = Array.from(document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));    
            var currentIndex = focusableElements.indexOf(focusedElement);    
            var previousIndex = (currentIndex - 1) % focusableElements.length;    
            var previousElement = focusableElements[previousIndex];
            previousElement.focus();
        }
    })
    
    // console.log(menuItemBtns.item(0));


}

app();