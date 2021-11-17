function generate()
{
    drawGameBoard();
}
function drawGameBoard()
{
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    tbl.style.border ='1px solid black';
    for (let i = 0; i<10; i++){
        const tr = tbl.insertRow();
        for (let j = 0; j<10; j++)
        {
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}