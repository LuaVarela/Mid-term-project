const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(data);

  const fullname = document.getElementById("fullname").value;
  if (fullname.length < 3) alert("please insert your name");

  const email = document.getElementById("emailaddres").value;
  if (!email.length) alert("please insert a valid email");

  const phone = document.getElementById("phone").value;
  if (phone.length < 12 && phone.charAt(0) !== "+")
    alert("please insert a valid phone number +34...");

  const message = document.getElementById("message").value;
  if (message.length < 50) alert("minimum length 50 characters");

  //   console.log(username, email, phone, message);

  const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

  const data = {
    user: fullname,
    email: email,
    phone: phone,
    message: message,
  };

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
