

const divRoot = document.getElementById("root");

const hMainTitle = document.createElement("h1");
hMainTitle.innerText = "Pokemon Team Builder";
hMainTitle.style.textAlign = "center";
divRoot.appendChild(hMainTitle);

const currentCardContainer = document.createElement("div");
const addedCardsContainer = document.createElement("div");
addedCardsContainer.classList.add("added-cards-container");
divRoot.appendChild(currentCardContainer);
divRoot.appendChild(addedCardsContainer);


function createPokemonCard(parentElement, objPokemon) {

    parentElement.innerHTML = "";

    let pkmCard = document.createElement("div");
    pkmCard.className = "pkm-card";
    parentElement.appendChild(pkmCard);

        let pkmHead = document.createElement("div");
        pkmHead.className = "pkm-head";
        pkmCard.appendChild(pkmHead);

            let pkmData = [objPokemon.name, objPokemon.id];

            for (let info of pkmData) {
                let pTmp = document.createElement("p");
                pTmp.innerText = info;
                pkmHead.appendChild(pTmp);
            }


        let pkmInfo = document.createElement("div");
        pkmInfo.className = "pkm-info";
        pkmCard.appendChild(pkmInfo);

            let tmpElm = document.createElement("img");
            tmpElm.src = objPokemon.image;
            pkmInfo.appendChild(tmpElm);

            let table = document.createElement("table");
            pkmInfo.appendChild(table);

            let tbody = document.createElement("tbody");
            table.appendChild(tbody);


            pkmData = [
                { fieldName: "HP", data: objPokemon.stats.HP },
                { fieldName: "Attack", data: objPokemon.stats.attack },
                { fieldName: "Defense", data: objPokemon.stats.defense },
                { fieldName: "Speed", data: objPokemon.stats.speed }
            ];
            
            for (let info of pkmData) {
                let tRow = document.createElement("tr");
                tbody.appendChild(tRow);
    
                let tH = document.createElement("th");
                tH.innerText = info.fieldName;
                tRow.appendChild(tH);
    
                let tD = document.createElement("td");
                tD.innerText = info.data;
                tRow.appendChild(tD);
            }


            let btnRandom = document.createElement("button");
            btnRandom.innerText = "Next";
            parentElement.appendChild(btnRandom);
            btnRandom.addEventListener("click", function() {
                createPokemonCard(parentElement, pokemons[Math.floor(Math.random() * pokemons.length)]);
            });

            let btnAdd = document.createElement("button");
            btnAdd.innerText = "Add";
            parentElement.appendChild(btnAdd);

            const secondTitle = document.createElement("h1");
            secondTitle.innerText = "Pokemon Team";
            secondTitle.style.textAlign = "center";
            parentElement.appendChild(secondTitle);

            btnAdd.addEventListener("click", function() {
                if (addedCardsContainer.getElementsByClassName("cloned-card-container").length >= 6) {
                    return false;
                }
                let cardContainer = document.createElement("div");
                cardContainer.className = "cloned-card-container";
                addedCardsContainer.appendChild(cardContainer);

                let clonedCard = pkmCard.cloneNode(true);
                cardContainer.appendChild(clonedCard);

                let btnRemove = document.createElement("button");
                btnRemove.innerText = "Remove";
                cardContainer.appendChild(btnRemove);
                
                
                btnRemove.addEventListener("click", function() {
                    addedCardsContainer.removeChild(cardContainer);
                });

            });



}


createPokemonCard(currentCardContainer, pokemons[Math.floor(Math.random() * pokemons.length)]);






























