const text = document.getElementsByClassName('expandedText'); 
const open = document.getElementsByClassName('expandText'); 
const close = document.getElementsByClassName('closeText'); 

function expandText() {
    // If expandText (open) is currently visible, hide it and make the other elements visible
    if (open.style.display === 'block' || open.style.display === '') {
        text.style.display = 'block';
        open.style.display = 'none';
        close.style.display = 'block';
    } else {
        // Else, return to original state
        text.style.display = 'none';
        open.style.display = 'block';
        close.style.display = 'none';
    }
}

// Event listeners
open.addEventListener('click', expandText);
close.addEventListener('click', expandText);
