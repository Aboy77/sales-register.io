const form = document.getElementById("form");
console.log(form)

form.addEventListener("submit", async(e) => {
    console.log(e.target)
    const send = await fetch("/add/register", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({product: "Producto 1", quantity: 2, total: 1500})
    });

    const res = await send.json();
    console.log(res)
})