var drawn = false;

function generate()
{
    if (drawn == true)
    {
        if (confirm("this will clear the current game, are you sure?"))
        {
            drawGameBoard();
        }
    }    
    else
    {
        drawGameBoard();
        drawn = true;
    }
    
}
function drawGameBoard()
{
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    for (let i = 0; i<10; i++){
        const tr = tbl.insertRow();
        for (let j = 0; j<10; j++)
        {
            setTimeout(function(){
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(``));
            }, (j+i)*120);
            
        }
    }
    body.appendChild(tbl);
}