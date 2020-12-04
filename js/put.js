

function updateData() {
    let id = document.getElementById("petIDPut").value;
    let categoryName = document.getElementById("categoryNamePut").value;
    let name = document.getElementById("petNamePut").value;
    let tagName = document.getElementById("tagNamePut").value;
    let status = document.getElementById("statusPut").value;

    console.log(id);
    console.log(categoryName);
    console.log(name);
    console.log(tagName);
    console.log(status);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": id,
        "category": {
            "id": 0,
            "name": categoryName
        },
        "name": name,
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": tagName
            }
        ],
        "status": status
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };

    fetch("https://petstore.swagger.io/v2/pet", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

//updateData(1, 0,"string", "usama's dog", 0, "string", "sold");