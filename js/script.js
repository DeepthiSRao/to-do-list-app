const newItem = () =>{
    let list = $('#list');
    let li = $('<li></li>');
    let inputVal = $('#input').val();
    li.append(inputVal);
    
    //1. Adding new item to list
    if(inputVal === ''){
        alert("You must write something!!!");
    }else{
        list.append(li);
    }

    //2. Crossing out on item from the list
    const crossOut = () =>{
        li.toggleClass("strike");
    }

    li.on("dblclick", ()=>crossOut());

    //3. Adding the delete button 'x' to list item
    let crossOutBtn = $('<crossOutButton></crossOutButton>');
    crossOutBtn.append(document.createTextNode('x'));
    li.append(crossOutBtn);

    crossOutBtn.on('click', ()=>{
        li.addClass("delete");
    });

    //4. Reordering
    list.sortable();
};