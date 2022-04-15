var form = document.getElementById("googleSheetdb");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST" ,
        body: new FormData(document.getElementById("googleSheetdb")),
    }).then(
        Response => Response.json()
    )
})