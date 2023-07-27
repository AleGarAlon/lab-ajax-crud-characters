const charactersAPI = new APIHandler('http://127.0.0.1:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try{
     const allCharacters = await charactersAPI.getFullList()  
     return allCharacters
    }catch (error){
      console.log(`Your error is: ${error}`)
    }
     /*allCharacters.forEach((character) => {
      character.name = document.getElementsByClassName("name")
     })
     console.log(allCharacters)   */
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {

    try{
    const oneCharacter = await charactersAPI.getOneRegister()
    }
    catch (error){
      console.log(`Your getElementById error is: ${error}`)
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {

  });
});
