const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    reject(new Error("User not Logged In"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
