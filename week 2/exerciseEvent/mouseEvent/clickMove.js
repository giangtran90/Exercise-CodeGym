let imgObj = null;
    imgObj = document.getElementById('ballImage');

function init()
{
    imgObj = document.getElementById('ballImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}

function clickRight()
{
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function clickLeft()
{
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}

function clickTop()
{
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
}

function clickBottom()
{
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}

window.onload = init;