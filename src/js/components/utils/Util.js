const Util = {
  string: {
    hasEmptyValue(obj) {
      return Object.values(obj).some(value => value === "");
    },
    random() {
      const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let randomString = "";
      
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
      }
      
      return randomString;
    }
  },
}

export default Util