document.querySelector("#getPetBtn").addEventListener('click', findPet);

function findPet() {
    let petID = document.querySelector("#getPetID").value;
    document.querySelector("#getPetID").value = "";
    getPet(petID);
}

function getPet(petId) {

    fetch(`https://petstore.swagger.io/v2/pet/${petId}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    appendHTML(data);
                });
            })
        .catch(err => console.error(err));
}

function appendHTML(object) {
    let content = document.querySelector("#displayPet");

    content.insertAdjacentHTML('beforeend',
        `<h5 id="displayPetID">Pet ID: ${object.id}</h5>
        <h5 id="displayPetName">Name: ${object.name}</h5>
        <h5 id="displayPetStatus">Status: ${object.status}</h5>
        `);
}