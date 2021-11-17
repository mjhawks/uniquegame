var drawn = false;

function generate()
{
    if (drawn == true)
    {
        if (confirm("this will clear the current game, are you sure?"))
        {
            deleteGameBoard();
            setTimeout(function(){
                drawGameBoard();
                }, 3400);
            
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
    tbl.id = 'gameBoard';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    for (let i = 0; i<10; i++){
        const tr = tbl.insertRow();
        for (let j = 0; j<10; j++)
        {
            setTimeout(function(){
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(''));
            td.id = `${i} ${j}`;
            }, (j+i)*120);
            
        }
    }
    body.appendChild(tbl);
}
function deleteGameBoard()
{
    var board = document.getElementById("gameBoard");
    for (let i = 0; i<10; i++){
        for (let j = 0; j<10; j++)
        {
            setTimeout(function(){
            document.getElementById(`${i} ${j}`).id = "removeanimation";
            }, (j+i)*120);
        }
    }
    setTimeout(function(){
    board.remove();
    }, 3400);
}