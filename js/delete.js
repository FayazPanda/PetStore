function deletePet() {
    const petID = document.getElementById("delPetID").value;
    fetch(`https://petstore.swagger.io/v2/pet/${petID}`, {method: 'delete'})
        .then(response => response.json())
        .then(json => {return json;})
        .catch(err => console.error(err));
}