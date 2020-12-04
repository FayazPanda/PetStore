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
                    console.log("catId", data.category.id);
                    console.log("catName", data.category.name);
                    console.log("name", data.name);
//                    for
                    console.log("photoUrl", data.photoUrls[0]);
//                    for
//                      for
                    console.log("photoTagId", data.tags[0]);
//                    console.log("photoTagName", data.tags[0].tag.name);

                    console.log("status", data.status);
                });
            })
            .catch(err => console.error(err));
}
getPet(5);