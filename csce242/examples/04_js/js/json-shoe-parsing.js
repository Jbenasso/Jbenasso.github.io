const getShoes = async() => {
    const url = "https://jbenasso.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("sorry");
    }
};

const showShoes = async () => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    
    shoes.forEach((shoe)=> {
        //make a section for each shoe put all the data in, nicely formatted
        //then append it to the shoe list
        const section = document.createElement("h3");
        section.classList.add("shoe");

        //heading
        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTMl

        //brand
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`;

        //loop through reviews reviews and make a ul li list
        const ul = document.createElement("ul");

        shoe.reviews.forEach(review => {
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });
        section.append(ul);


        //image
        const img = document.createElement("img");
        section.append(img);
        img.src = `https://jbenasso.github.io/json/images/${shoe.image}`;
        

        shoeListDiv.append(section);

    });
};

showShoes();