const USER = "USER";

export let localStorageServ = {
  user: {
    set: function (dataUser) {
      let dataJSON = JSON.stringify(dataUser);
      localStorage.setItem(USER, dataJSON);
    },
    get: function () {
      let dataJSON = localStorage.getItem(USER);
      if (!dataJSON) {
        return null;
      } else {
        return JSON.parse(dataJSON);
      }
    },
    remove: function () {
      localStorage.removeItem(USER);
    },
  },
};
