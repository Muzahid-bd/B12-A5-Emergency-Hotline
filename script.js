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
const callHistoryData = [];
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

// Call history clear part
document.getElementById("clear-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("call-history-container").innerText = "";
  callHistoryData.length = 0;
});
// for (history of callHistoryData) {
//   const callHistory = document.getElementById("call-history");
//   const currentTime = document.getElementById("current-time");
//   const div = document.createElement("div");

//   currentTime.innerText = now;

//   div.innerHTML = `<div
//                 class="bg-gray-100 rounded-xl mt-3 p-5 items-center grid grid-cols-3"
//               >
//                 <div class="text-left col-span-2">
//                   <h3 class="text-2xl font-bold">${history.serviceName}</h3>
//                   <p class="text-xl pt-2">${history.serviceNumber}</p>
//                 </div>
//                 <div class="">${history.currentTime}</div>
//             </div>`;
//   callHistory.appendChild(div);
// }

// for Copy Service Number Part
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

function valueUpdate(buttonClass, updateID) {
  const copyIndication = document.querySelectorAll(buttonClass);

  for (const update of copyIndication) {
    update.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Copy Button Clicked");
      const oldValue = parseInt(document.getElementById(updateID).innerText);
      const newValue = oldValue + 1;
      document.getElementById(updateID).innerText = newValue;
    });
  }
}

valueUpdate(".service-number-copy-btn", "copy-update-section");
document.getElementById("copy-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-1");
});
document.getElementById("copy-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-2");
});
document.getElementById("copy-btn-3").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-3");
});
document.getElementById("copy-btn-4").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-4");
});
document.getElementById("copy-btn-5").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-5");
});
document.getElementById("copy-btn-6").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-6");
});
document.getElementById("copy-btn-7").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-7");
});
document.getElementById("copy-btn-8").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-8");
});
document.getElementById("copy-btn-9").addEventListener("click", function (e) {
  e.preventDefault();
  copyFunction("service-number-9");
});
