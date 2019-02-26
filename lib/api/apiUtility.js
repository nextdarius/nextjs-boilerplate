const axios = require("axios");

class ApiUtility {
  static async getCollectionOf(collectionName) {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/" + collectionName
      );
      return users.data;
    } catch {
      return [];
    }
  }
}

export default ApiUtility;
