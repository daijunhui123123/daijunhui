const res = [
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
]
const oUl = document.querySelector('#brads');
oUl.innerHTML = res.map(function (item) { console.log(item); return `<li>${item}</li>`; })
