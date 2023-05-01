



function OneSecCounter( )
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}


setInterval(OneSecCounter, 1000);



