
let html_1 = `
<button>
    <svg role="button" tabindex="0" aria-label="Search" class="arrow" width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
    </svg>
</button>
`;

let html_2 = `
<button>
    <svg role="button" tabindex="0" aria-label="Search" class="arrow" width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg>
</button>
`;

let isTrue = true;

const arrow_container = document.querySelector('.setup-arrows');
const steps = document.querySelector('.steps');
arrow_container.innerHTML = html_1;

arrow_container.onclick = () => {
    if (arrow_container.innerHTML === isTrue ) {
        arrow_container.innerHTML = html_1;
        steps.style.display = 'none';
    } else {
        arrow_container.innerHTML = html_2;
        steps.style.display = 'block';
    }

    isTrue = !isTrue;
};


// steps-guide check/uncheck btn
let svg_1 = `
<svg role="button" tabindex="0" aria-label="Search" class="step-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
</svg>
`

let svg_2 = `
<svg role="button" tabindex="0" aria-label="Search" class="step-checked" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>
</svg>
`

let svg_3 = `
<svg role="button" tabindex="0" aria-label="Search" class="step-hover" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const checkBtns = document.querySelectorAll('.check-btns');



checkBtns.forEach(btn => {
    btn.setAttribute('data-checked', 'false');
    btn.innerHTML = svg_1;

    btn.onclick = () => {
        if (btn.getAttribute('data-checked') === 'false') {
            btn.innerHTML = svg_2;
            btn.setAttribute('data-checked', 'true');
        } else {
            btn.innerHTML = svg_1;
            btn.setAttribute('data-checked', 'false');
        }
    };
});


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
// const cancelAnchorTag = document.querySelector('.trial-extension div a');
const trialExtension = document.querySelector('.trial-extension');

cancelSvg.onclick = () => {
    trialExtension.style.display = 'none';
}

// cancelAnchorTag.onclick = () => {
//     trialExtension.style.display = 'none';
// }