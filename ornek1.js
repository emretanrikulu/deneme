// 1---
setTimeout(
    function()
    {
        console.log('hello from callback');

    },2000
)

console.log('hello ffrom scope');

//--2
setTimeout(changeText,2000)

function changeText()
{
 document.querySelector('h1').textContent='hello form callback'
}

//3
function changeText()
{
    document.querySelector('h1').textContent='hello from callback'
}

const timerId=setTimeout(changeText,3000)

document.querySelector('#cancel').addEventListener('click',
()=>
{
    console.log(timerId);
    clearTimeout(timerId)
    console.log('timer cancelled')
})
