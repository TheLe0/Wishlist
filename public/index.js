var list = document.querySelector("#app ul");
var input = document.querySelector("#app input");
var button = document.querySelector("#app button");

var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderList()
{
    list.innerHTML = '';
    for (item of wishlist)
    {
        var element = document.createElement('li');
        var text = document.createTextNode(item);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Remove');

        linkElement.setAttribute('href', '#');

        const pos = wishlist.indexOf(item);
        linkElement.setAttribute('onclick', 'deleteItem('+pos+')');

        linkElement.appendChild(linkText);

        element.appendChild(text);
        element.appendChild(linkElement);
        list.appendChild(element);
    }
}

renderList();

function addItem()
{
    var text = input.value;
    
    if (text == '')
    {
        return;
    }

    wishlist.push(text);
    input.value = '';
    renderList();
}

function deleteItem(pos)
{
    wishlist.splice(pos, 1);
    renderList();
}

function saveToStorage()
{
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}