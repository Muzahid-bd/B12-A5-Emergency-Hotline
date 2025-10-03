const callHistoryData = [];
// Heart Icons

const heartIcons = document.querySelectorAll(".heart-icon");

for (const icon of heartIcons) {
  icon.addEventListener("click", function (e) {
    e.preventDefault();

    const oldValue = parseInt(
      document.getElementById("nav-heart-icon").innerText
    );
    const newValue = oldValue + 1;
    document.getElementById("nav-heart-icon").innerText = newValue;
  });
}

document.getElementById("call-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  const serviceName = document.getElementById("service-name-1").innerText;
  const serviceNumber = document.getElementById("service-number-1").innerText;

  //  coin reduce part
  const oldValue = parseInt(document.getElementById("coinAvailable").innerText);

  const newValue = oldValue - 20;
  if (oldValue >= 20) {
    document.getElementById("coinAvailable").innerText = newValue;
    alert(`📞 Calling ${serviceName} ${serviceNumber}`);
  } else {
    alert(`❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে ২০ কয়েল লাগবে ।`);
    return;
  }
  const data = {
    serviceName: serviceName,
    serviceNumber: serviceNumber,
    currentTime: new Date().toLocaleTimeString(),
  };
  callHistoryData.push(data);
});

//call history part

document.getElementById("call-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  const callHistoryContainer = document.getElementById(
    "call-history-container"
  );
  callHistoryContainer.innerText = "";
  for (const data of callHistoryData) {
    const div = document.createElement("div");
    const now = new Date().toLocaleTimeString();
    div.innerHTML = `            <div
              class="bg-gray-100 rounded-xl mt-3 p-5 items-center grid grid-cols-3"
            >
              <div class="text-left col-span-2">
                <h3 class="text-2xl font-bold">${data.serviceName}</h3>
                <p class="text-xl pt-2">${data.serviceNumber}</p>
              </div>
              <div id="current-time">${now}</div>
            </div>`;
    callHistoryContainer.appendChild(div);
  }
});

for (history of callHistoryData) {
  const callHistory = document.getElementById("call-history");
  const currentTime = document.getElementById("current-time");
  const div = document.createElement("div");

  currentTime.innerText = now;

  div.innerHTML = `<div
                class="bg-gray-100 rounded-xl mt-3 p-5 items-center grid grid-cols-3"
              >
                <div class="text-left col-span-2">
                  <h3 class="text-2xl font-bold">${history.serviceName}</h3>
                  <p class="text-xl pt-2">${history.serviceNumber}</p>
                </div>
                <div class="">${history.currentTime}</div>
            </div>`;
  callHistory.appendChild(div);
}

function copyFunction(idForCopy) {
  const copyText = document.getElementById(idForCopy);
  const textToCopy = copyText.innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Copied the text: " + textToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

document.getElementById("copy-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-1");
});

// function copyFunction(copyId) {
//   const copyText = document.getElementById(copyId);
//   const textToCopy = copyText.innerText || copyText.textContent; // get text

//   navigator.clipboard
//     .writeText(textToCopy)
//     .then(() => {
//       alert("Copied the text: " + textToCopy);
//     })
//     .catch((err) => {
//       console.error("Failed to copy: ", err);
//     });
// }

// document.getElementById("copy-btn-1").addEventListener("click", function (e) {
//   e.preventDefault();
//   copyFunction("service-number-1");
// });

// function copyFunction(copy) {
//   var copyText = document.getElementById(copy);
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);

//   alert("Copied the text: " + copyText.value);
// }

// document.getElementById("copy-btn-1").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("copy button Clicked");
//   copyFunction("service-number-1");
// });

// Call Buttons

//   const validPin = 1234;
//   const bank = document.getElementById("bank").value;
//   const accountNumber = document.getElementById("account-number").value;

//   const amount = parseInt(document.getElementById("add-amount").value);
//   const pin = document.getElementById("add-pin").value;
//   const availableBalance = parseInt(
//     document.getElementById("available-balance").innerText
//   );
//   if (accountNumber.length < 11) {
//     alert("Please Enter a Valid Account Number.");
//     return;
//   }
//   if (pin != validPin) {
//     alert("Please Enter a Valid pin Number.");
//     return;
//   }
//   const totalNewAvailableBalance = amount + availableBalance;
//   document.getElementById("available-balance").innerText =
//     totalNewAvailableBalance;
//   console.log(
//     bank,
//     accountNumber,
//     amount,
//     pin,
//     availableBalance,
//     totalNewAvailableBalance
//   );
