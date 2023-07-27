class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 async getFullList  ()   {
        const response = await axios.get("http://localhost:8000/characters")

  if (response.status === 200) {
    return response.data
    }
  }

  async getOneRegister () {
          const response = await axios.get("http://127.1.1.0:8000/characters/:id")

    if (response.status === 200) {
      return response.data
      }
  }

  async createOneRegister (characterInfo) {
      try {
        const response = await axios
        .post("http://127.1.1.0:8000/characters", characterInfo)
         console.log(characterInfo)
         return response.data
       }
        catch (error) {
        console.log(error)
      }
  }

  async updateOneRegister (characterNewInfo) {
    try {const response = await axios
      .patch("http://127.1.1.0:8000/characters/:id", characterNewInfo)
      
       return response.data
     }
      catch (error) {
      console.log(error)
    }
  }

  async deleteOneRegister () {
    if (response.status === 200) {
      const response = await axios.delete("http://127.1.1.0:8000/characters/:id")
       
      }
  }
}

