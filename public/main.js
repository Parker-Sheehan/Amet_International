

const formSubmit = (evt) => {
    evt.preventDefault()
    const email = document.querySelector('input').value
    console.log(email)

    axios.post('/api/submit', email)
        .then(res =>{
            console.log(email)
        })
        .catch(err => console.log(err))

}

const typing = (evt) => {
    evt.preventDefault()
    const email = document.querySelector('input').value
    console.log(email)

    axios.post('/api/currentText', objBody)
        .then(res =>{
            console.log("it's doing things")
        })
        .catch(err => console.log(err))
}

document.querySelector('button').addEventListener("click",formSubmit)

document.querySelector('input').addEventListener("change",typing)