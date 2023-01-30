import "./css/style.css"; //importing css

let modal = document.querySelector(".modal")
let span = document.querySelector(".close")
let btn = document.querySelector(".btn")

const myPromise = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(modal.style.display = "block")
        }, 60000);
    });
}

const resolvingPromise = async () => {
    let result = await myPromise();
    return result
}

resolvingPromise()

span.style.cursor = "pointer"

span.addEventListener("click", () => {
    modal.style.display = "none";
})

// btn promise

const promesa = new Promise((resolve, reject) => {
    resolve();
});

const btnResolving = async () => {
    btn.addEventListener("animationend", () => {
        // btn.style.backgroundColor = "aqua";
        alert("Continue to subscribe")
    })
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "aqua";
    })
    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
    });
}

btnResolving()
