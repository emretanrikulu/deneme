const intervalId=setInterval(myCallback,1000,'gms')

function myCallback(gelen)
{
    console.log(gelen,Date.now())
}

document.getElementById('stop').addEventListener('click',
stopChange)


function stopChange()
{
    clearInterval(intervalId)
}

