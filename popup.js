const toggleSwitch = document.querySelector('.toggle-switch');
const toggleSwitchInner = document.querySelector('.toggle-switch-inner');
var enabled = false

toggleSwitch.addEventListener('click', () => {
    toggleSwitchInner.classList.toggle('enabled');
    enabled = !enabled
    if (enabled) {
        console.log('on');
    } else {
        console.log('off')
    }
});