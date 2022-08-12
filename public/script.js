const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch("/checkout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          id: 1,
          quantity: 3,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});