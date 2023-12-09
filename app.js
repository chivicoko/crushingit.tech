const app = () => {

    const HIDDEN_CLASS = 'hidden';
    const MARK_AS_DONE_CLASS = 'checkbox-done';

    const checkBtnsForSteps = document.querySelectorAll('.steps .top .head');

    const checkboxButton = document.querySelector("#shopping-item-checkbox");
    const notCompletedIcon = checkboxButton.querySelector("#not-completed-icon");
    const completedIcon = checkboxButton.querySelector("#completed-icon");
    const loadingSpinnerIcon = checkboxButton.querySelector("#loading-spinner-icon");

    const checkboxButtonStatus = checkboxButton.querySelector("#shopping-item-checkbox-status");

    
    function handleMarkAsDone() {
        notCompletedIcon.classList.add(HIDDEN_CLASS);
        loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);

        // checkboxButtonStatus.ariaLabel = "Loading. Please wait...";
        
        setTimeout(() => {
            loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
            completedIcon.classList.remove(HIDDEN_CLASS);
            
            checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as done', 'as not done');
            
            // checkboxButtonStatus.ariaLabel = "Successfully marked clean your room as done.";
            checkboxButton.classList.add(MARK_AS_DONE_CLASS);
        }, 1000)
    }
    
    function handleMarkAsNotDone() {
        completedIcon.classList.add(HIDDEN_CLASS);
        loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);
        
        // checkboxButtonStatus.ariaLabel = "Loading. Please wait...";

        setTimeout(() => {
            loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
            
            checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as not done', 'as done');
            
            // checkboxButtonStatus.ariaLabel = "Successfully marked clean your room as not done.";
            notCompletedIcon.classList.remove(HIDDEN_CLASS);
        }, 1000);

    }
    
    function handleMarkDoneorNotDone() {
        checkBtnsForSteps.forEach((btn) => {
            const markedAsDone = checkboxButton.classList.contains(MARK_AS_DONE_CLASS);
    
            if (markedAsDone) {
                handleMarkAsNotDone();
            } else {
                handleMarkAsDone();
            }
        });
    }

    checkboxButton.addEventListener('click', handleMarkDoneorNotDone);
    

    // -------------
    const menuTrigger = document.querySelector("#user");
    const menu = document.querySelector("#userModal");
  
    const allMenuItems = menu.querySelectorAll('[role="menuitem"]');
  
    function closeMenu() {
      menuTrigger.ariaExpanded = "false";
      menuTrigger.focus();
    }
  
    function handleMenuEscapeKeypress(event) {
      if (event.key === "Escape") {
        toggleMenu();
      }
    }
  
    function handleMenuItemArrowKeyPress(
      event,
      menuItemIndex
    ) {
      const isLastMenuItem =
        menuItemIndex === allMenuItems.length - 1;
      const isFirstMenuItem = menuItemIndex === 0;
  
      const nextMenuItem = allMenuItems.item(
        menuItemIndex + 1
      );
      const previousMenuItem = allMenuItems.item(
        menuItemIndex - 1
      );
  
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowDown"
      ) {

        if (isLastMenuItem) {
          allMenuItems.item(0).focus();
  
          return;
        }
        nextMenuItem.focus();
      }
  
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        if (isFirstMenuItem) {
          allMenuItems.item(allMenuItems.length - 1).focus();
          return;
        }
  
        previousMenuItem.focus();
      }
    }
  
    function openMenu() {
      menuTrigger.ariaExpanded = "true";
      allMenuItems.item(0).focus();
  
      menu.addEventListener(
        "keyup",
        handleMenuEscapeKeypress
      );
  
      allMenuItems.forEach(function (
        menuItem,
        menuItemIndex
      ) {
        menuItem.addEventListener("keyup", function (event) {
          handleMenuItemArrowKeyPress(event, menuItemIndex);
        });
      });
    }
  
    function toggleMenu() {
      const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
      menu.classList.toggle("menu-active");
  
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  
    menuTrigger.addEventListener("click", toggleMenu);
    
}

app();


const html1 = `
    <button>
        <svg role="button" tabindex="0" aria-label="Search" class="arrow" width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
        </svg>
    </button>
`;

const html2 = `
    <button>
        <svg role="button" tabindex="0" aria-label="Search" class="arrow" width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
        </svg>
    </button>
`;

let isTrue = true;
const arrowContainer = document.querySelector('.setup-arrows');
const steps = document.querySelector('.steps');

arrowContainer.innerHTML = isTrue ? html1 : html2;

arrowContainer.onclick = () => {
    arrowContainer.innerHTML = isTrue ? html1 : html2;
    steps.style.display = isTrue ? 'none' : 'block';
    isTrue = !isTrue;
};


// start accordion
function toggleAccordion(sectionNumber) {
    var content = document.getElementById('section' + sectionNumber);
    var step = document.getElementById('step' + sectionNumber);
    var items = document.querySelectorAll('.accordion-content');
  
    items.forEach(function(item) {
      if (item !== content) {
        item.style.display = 'none';
        var relatedStepNumber = item.id.replace('section', '');
        var relatedStep = document.getElementById('step' + relatedStepNumber);
        relatedStep.classList.remove('step-display-content');
      }
    });
  
    if (content.style.display === 'flex') {
      content.style.display = 'none';
      step.classList.remove('step-display-content');
    } else {
      content.style.display = 'flex';
      step.classList.add('step-display-content');
    }
  }
  

// modals
//   user modal
const user = document.querySelector('.user');
const userModal = document.querySelector('.userModal')
user.onclick = () => {
    userModal.style.display = userModal.style.display === 'none' ? 'block' : 'none';
    notificationModal.style.display = 'none';
}

//   user modal
const notification = document.querySelector('#bell');
const notificationModal = document.querySelector('.notificationModal')
notification.onclick = () => {
    notificationModal.style.display = notificationModal.style.display === 'none' ? 'block' : 'none';
    userModal.style.display = 'none';
}


// cancel fo select plan banner
const cancelSvg = document.querySelector('#cancelSvg');
const trialExtension = document.querySelector('.trial-extension');

cancelSvg.onclick = () => {
    trialExtension.style.display = 'none';
}
