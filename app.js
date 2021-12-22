let add=document.querySelector("#add");
let tbody=document.querySelector("tbody");
let bool=true;
add.addEventListener("click",()=>{
    if(bool){
        tbody.innerHTML+=`
        <tr>
        <td></td>
        <td>
            <input type="text" class="form-control" placeholder="Name">
        </td>
        <td>
            <input type="text" class="form-control" placeholder="Surname">
        </td>
        <td>
            <input type="text" class="form-control" placeholder="Phone">
        </td>
        <td>
            <div class="btn-group">
                <button class="btn btn-success" onclick="saveRow(this)">Save</button>
                <button class="btn btn-danger" onclick="cancelRow(this)">Cancel</button>
            </div>
        </td>
    </tr>
        `
        order()
        bool=!bool;
    }else{
        alert("Save first")
    }
})
function order(){
    let td=document.querySelectorAll("tbody tr td:nth-child(1)");
    num=1;
    td.forEach(e=>{
        e.innerText=num;
        num++;
    })
}
function cancelRow(e) {
    e.closest("tr").remove();
    order()
}
function deleteRow(e) {
    e.closest("tr").remove();
    order()
}
function saveRow(e) {
    let td=e.closest("tr").querySelectorAll("td:not(:first-child,:last-child)");
    td.forEach(el=>{
        let inp=el.querySelector("input");
       if(inp.value.length>0) {
       
        el.innerText = inp.value;
       }
       else{
          inp.style.border="3px solid red"
       }
      
    })
    e.nextElementSibling.innerText = "Delete";
    e.nextElementSibling.setAttribute("onclick", "deleteRow(this)");
    e.innerText = "Edit";
    e.setAttribute("onclick", "editRow(this)");
    bool = !bool;
}
function editRow(e) {
    let td = e.closest("tr").querySelectorAll("td:not(:first-child, :last-child)");
    td.forEach(el => {
        el.innerHTML = `<input type="text" class="form-control" value="${el.innerText}">`
    })

    e.innerText = "Save";
    e.setAttribute("onclick", "saveRow(this)");
}