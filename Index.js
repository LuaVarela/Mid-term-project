const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("[name=username]");
  if (username.length < 3) alert("please insert your name");

  const email = document.querySelector("[name=email]");
  if (!email.length) alert("please insert a valid email");

  const phone = document.querySelector("[name=phone]");
  if (phone.length < 12 && phone.charAt(0) !== "+")
    alert("please insert a valid phone number +34...");

  const message = document.querySelector("[name=message]");
  if (message.length < 50) alert("minimum length 50 characters");

  //   console.log(username, email, phone, message);

  const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

  const data = {
    user: username,
    email: email,
    phone: phone,
    message: message,
  };

  //   console.log(data);

  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
    },

    body: JSON.stringify({ item: data }),
  };

  fetch(url, fetchParams)
    .then((response) => {
      if (response.ok) return response.json();
    })

    .then((json) => {
      console.log(json);
    })

    .catch((error) => {
      console.log(error);
    });

  form.reset();
});
