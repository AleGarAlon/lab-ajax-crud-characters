const charactersAPI = new APIHandler('http://127.0.0.1:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try{
     const allCharacters = await charactersAPI.getFullList()  
     allCharacters.forEach((character) => {
     const newCard = document.createElement("div")
     newCard.setAttribute("class", "character-info")
     
      // character name
     const newName = document.createElement("div")
     newName.setAttribute("class","name")
     newName.innerText = `Character Name: ${character.name}`
     newCard.appendChild(newName)
     
     //character occupation
     const newOccupation = document.createElement("div")
     newOccupation.setAttribute("class","occupation")
     newOccupation.innerText = `Character occupation: ${character.occupation}`
     newCard.appendChild(newOccupation)

     //Is cartoon?
     const newCartoon = document.createElement("div")
     newCartoon.setAttribute("class","cartoon")
     newCartoon.innerText = `Is a cartoon?: ${character.cartoon}`
     newCard.appendChild(newCartoon)

     //character weapon
     const newWeapon = document.createElement("div")
     newWeapon.setAttribute("class","weapon")
     newWeapon.innerText = `Character weapon: ${character.weapon}`
     newCard.appendChild(newWeapon)
     //appending to the existing container
     const charContainer = document.querySelector(".characters-container")
     charContainer.appendChild(newCard)
     })
     console.log(allCharacters) 
     
    }catch (error){
      console.log(`Your error is: ${error}`)
    }
       
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {

  const characterId = document.getElementById("idInput").value;
  const characterById = await charactersAPI.getOneRegister(characterId)
  console.log(characterById)
  return  characterById
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {

  });
});
