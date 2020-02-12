import axios from "axios";

export default {
  getCards: function(cards) {
    return new Promise((resolve, reject) => {
      axios
        .get("localhost:4000/api")
        .then(res => {
          const users = res.data;
          const results = users.map(user => {
            return {
              login: user.login,
              image: user.avatar_url,
              language: language
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
  // Return a Promise to simulate an async call
  getLanguagesList: function() {
    return new Promise(resolve => {
      resolve(languages);
    });
  }
};
