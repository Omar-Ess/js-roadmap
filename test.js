// ---------normal -----------

function makeRequest(service) {
  if (service !== "google") return "we only talk to google";

  console.log("making request ....");

  setTimeout(function () {
    return "Google response";
  }, 2000);
}

function processResponse(response) {
  console.log(response + " is being processed ... ");
  setTimeout(function () {
    console.log("response is processed sucessfully");
  }, 1000);
}

const response = makeRequest("google");

processResponse(response);

// -------------callbacks-----------------
function makeRequest(service, processResponseCb) {
  if (service !== "google") return "we only talk to google";

  console.log("making request ....");

  setTimeout(function () {
    processResponseCb("Google response");
  }, 2000);
}

makeRequest("google", function (response) {
  console.log(response + " is being processed ... ");
  setTimeout(function () {
    console.log("response is processed sucessfully");
  }, 1000);
});

// ----------------------promises ----------------------------
function makeRequest(service) {
  return new Promise(function (resolve, reject) {
    if (service !== "google") reject("we only talk to google");

    console.log("making request ....");

    setTimeout(function () {
      resolve("Google response");
    }, 3000);
  });
}

function processResponse(response) {
  return new Promise(resolve => {
    console.log(response + " is being processed ... ");
    setTimeout(function () {
      console.log("response is processed sucessfully");
      resolve(response);
    }, 2000);
  });
}

function sendResponseToDatabase(response) {
  console.log(response + " is sending ... ");
  setTimeout(function () {
    console.log("response is sent successfully");
  }, 1000);
}

// makeRequest("google")
//   .then(response => {
//     return processResponse(response);
//   })
//   .then(response => {
//     return sendResponseToDatabase(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
async function doWork() {
  try {
    const response = await makeRequest("google");
    await processResponse(response);

    sendResponseToDatabase(response);
  } catch (err) {
    console.log(err);
  }


}




