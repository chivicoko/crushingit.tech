const app = () => {

    const HIDDEN_CLASS = 'hidden';
    const MARK_AS_DONE_CLASS = 'checkbox-done';

    const checkboxButton = document.querySelector("#shopping-item-checkbox");
    const notCompletedIcon = checkboxButton.querySelector("#not-completed-icon");
    const completedIcon = checkboxButton.querySelector("#completed-icon");
    const loadingSpinnerIcon = checkboxButton.querySelector("#loading-spinner-icon");
    // console.log(checkboxButton, completedIcon, notCompletedIcon, loadingSpinnerIcon);
    
    function handleMarkAsDone() {
        notCompletedIcon.classList.remove(HIDDEN_CLASS);
        loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
        
        setTimeout(() => {
            loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
            completedIcon.classList.remove(HIDDEN_CLASS);
            
            checkboxButton.classList.add(MARK_AS_DONE_CLASS);
        }, 3000)
    }
    
    function handleMarkAsNotDone() {
        completedIcon.classList.remove(MARK_AS_DONE_CLASS);

    }
    
    function handleMarkDoneorNotDone() {
        const markedAsDone = checkboxButton.classList.contains(MARK_AS_DONE_CLASS);

        if (markedAsDone) {
            handleMarkAsDone();
        } else {
            handleMarkAsNotDone();
        }
    }

    checkboxButton.addEventListener('click', handleMarkDoneorNotDone);
    
    // console.log(handleMarkDoneorNotDone);

    // -------------
//     const menuTrigger = document.querySelector("#user");
//     const menu = document.querySelector("#userModal");
  
//     const allMenuItems = menu.querySelectorAll('[role="menuitem"]');
  
//     function closeMenu() {
//       menuTrigger.ariaExpanded = "false";
//       menuTrigger.focus();
//     }
  
//     function handleMenuEscapeKeypress(event) {
//       if (event.key === "Escape") {
//         toggleMenu();
//       }
//     }
  
//     function handleMenuItemArrowKeyPress(
//       event,
//       menuItemIndex
//     ) {
//       // create some helpful variables : isLastMenuItem, isFirstMenuItem
//       const isLastMenuItem =
//         menuItemIndex === allMenuItems.length - 1;
//       const isFirstMenuItem = menuItemIndex === 0;
  
//       const nextMenuItem = allMenuItems.item(
//         menuItemIndex + 1
//       );
//       const previousMenuItem = allMenuItems.item(
//         menuItemIndex - 1
//       );
  
//       // if the user pressed arrow right or arrow down
//       if (
//         event.key === "ArrowRight" ||
//         event.key === "ArrowDown"
//       ) {
//         // if user is on last item, focus on first menuitem
//         if (isLastMenuItem) {
//           allMenuItems.item(0).focus();
  
//           return;
//         }
//         // then focus on next menu item
//         nextMenuItem.focus();
//       }
  
//       // if the user pressed arrow up or arrow left
//       if (
//         event.key === "ArrowUp" ||
//         event.key === "ArrowLeft"
//       ) {
//         if (isFirstMenuItem) {
//           allMenuItems.item(allMenuItems.length - 1).focus();
//           return;
//         }
  
//         previousMenuItem.focus();
//       }
//       // then focus on the previous menu item
//       // if the user is on first menu item, focus on last menuitem
//     }
  
//     function openMenu() {
//       menuTrigger.ariaExpanded = "true";
//       allMenuItems.item(0).focus();
  
//       menu.addEventListener(
//         "keyup",
//         handleMenuEscapeKeypress
//       );
  
//       // for each menu item, register an event listener for the keyup event
//       allMenuItems.forEach(function (
//         menuItem,
//         menuItemIndex
//       ) {
//         menuItem.addEventListener("keyup", function (event) {
//           handleMenuItemArrowKeyPress(event, menuItemIndex);
//         });
//       });
//     }
  
//     function toggleMenu() {
//       const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
//       menu.classList.toggle("menu-active");
  
//       if (isExpanded) {
//         closeMenu();
//       } else {
//         openMenu();
//       }
//     }
  
//     menuTrigger.addEventListener("click", toggleMenu);
}

app();