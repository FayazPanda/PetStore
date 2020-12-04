function deletePet(petID) {
    fetch(`https://petstore.swagger.io/v2/pet/${petID}`, {method: 'delete'})
        .then(response => response.json())
        .then(json => {return json;})
        .catch(err => console.error(err));
}