
fetch(' https://github.com/npm/cli/releases/tag/v9.2.0', {
    method: 'POST',
    body: JSON.parse,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(()=>console.error("error"))
    .finally(()=>console.warn("finally"))