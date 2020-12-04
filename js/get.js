function getPet(petId) {

    fetch(`https://petstore.swagger.io/v2/pet/${petId}`)  
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    console.log("name", data.name);
                    console.log("status", data.status);
                });
            })
            .catch(err => console.error(err));
}
function getPetByStatus(status) {

    fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)  
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);

                    for(let i=0;i<data.length;i++) {

                        console.log("catId", data[i].id);
                        console.log("name", data[i].name);
                        console.log("status", data[i].status);
                    }
                });
            })
            .catch(err => console.error(err));
}
getPetByStatus("sold");