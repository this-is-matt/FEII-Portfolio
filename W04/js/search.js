const input = form.searchInput;
const form = document.forms['search'];

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
form.addEventListener('submit', search, false);


function search() {
    alert(' Form Submitted');
    const form = document.forms['search'];
}