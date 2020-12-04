document.querySelector("#POSTPetBtn").addEventListener('click', addPet);

function addPet() {
    let petID = document.querySelector("#petIDPOST").value;
    let petName = document.querySelector("#petNamePOST").value;
    let petStatus = document.querySelector("#petStatusPOST").value;
    clearInput();

    let pet = createPet(petID, petName, petStatus);

    postPet(pet);
}

function postPet(newPet) {
    fetch(`https://petstore.swagger.io/v2/pet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newPet
    })
        .then(response => response.text())
        .then(result => console.info('Success:', result))
        .catch(error => console.error('Error:', error));
}

function createPet(id, name, status){
    let newPet = JSON.stringify(
        {
            "id": id,
            "category": {
                "id": 0,
                "name": "PLACEHOLDER" // Unsure if we are implementing Category
            },
            "name": name,
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "PLACEHOLDER" // Unsure if we are implementing Tags
                }
            ],
            "status": status
        }
    );

    return newPet;
}

function clearInput() {
    document.querySelector("#petIDPOST").value = "";
    document.querySelector("#petNamePOST").value = "";
}