const newdata = JSON.parse(data);
console.log(newdata);

const divContentElem = document.querySelector('.content');

newdata.forEach(element => {
    divContentElem.insertAdjacentHTML('beforeend',`
    <div class='wrapper'>
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
        <p>${element.address.city}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>
    </div>
    `)
});