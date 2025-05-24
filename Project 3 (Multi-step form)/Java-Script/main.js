// Variables {

let planeOne = document.querySelector(".arcade-plan");
let planeTwo = document.querySelector(".advanced-plan");
let planeThree = document.querySelector(".pro-plan");
let switchBtn = document.querySelector(".switch");
let allPlansText = document.querySelectorAll(".plan .text");
let allPlans = document.querySelectorAll(".plan");
let phoneNumberLabel = document.querySelector("label[for='phone-number']");
let usernameLabel = document.querySelector("label[for='user-name']");
let emailLabel = document.querySelector("label[for='email']");
let crrentStage = document.querySelectorAll(".all-steps div");
let features = document.querySelectorAll(".step-three label");
let phoneNumber = document.getElementById("phone-number");
let nextStep = document.querySelectorAll("#next-step");
let prevStep = document.querySelectorAll("#prev-step");
let stageThree = document.querySelector(".step-three");
let stageFour = document.querySelector(".step-four");
let stageFive = document.querySelector(".step-five");
let userName = document.getElementById("user-name");
let stageOne = document.querySelector(".step-one");
let stageTwo = document.querySelector(".step-two");
let allSteps = document.querySelectorAll(".step");
let email = document.getElementById("email");
let duration = "Month";
let du = "mo";
let selectedPlan;
let planPrice;
let stage = 1;
let coast;
let num;
let uN;
let eM;
let pN;

// Re{

let userNameRe = /^[A-Z][a-z]{3,7}$/;
let emailRe = /^[a-z]\w*@[a-z]+\.[a-z]+$/i;
let phoneNumberRe = /^\+[0-9]{12,12}$/;
let extractNumRe = /[0-9]/g;

// }

// }

// Selecting stage {

function switching() {
  switch (stage) {
    case 1:
      allSteps.forEach((e) => {
        if (e.hasAttribute("active")) {
          e.removeAttribute("active");
        }
      });
      stageOne.setAttribute("active", "");
      crrentStage.forEach((e) => {
        if (e.hasAttribute("curr")) {
          e.removeAttribute("curr");
        }
      });
      crrentStage[0].setAttribute("curr", "");
      break;
    case 2:
      allSteps.forEach((e) => {
        if (e.hasAttribute("active")) {
          e.removeAttribute("active");
        }
      });
      stageTwo.setAttribute("active", "");
      crrentStage.forEach((e) => {
        if (e.hasAttribute("curr")) {
          e.removeAttribute("curr");
        }
      });
      crrentStage[1].setAttribute("curr", "");
      break;
    case 3:
      allSteps.forEach((e) => {
        if (e.hasAttribute("active")) {
          e.removeAttribute("active");
        }
      });
      stageThree.setAttribute("active", "");
      crrentStage.forEach((e) => {
        if (e.hasAttribute("curr")) {
          e.removeAttribute("curr");
        }
      });
      crrentStage[2].setAttribute("curr", "");
      break;
    case 4:
      allSteps.forEach((e) => {
        if (e.hasAttribute("active")) {
          e.removeAttribute("active");
        }
      });
      stageFour.setAttribute("active", "");
      crrentStage.forEach((e) => {
        if (e.hasAttribute("curr")) {
          e.removeAttribute("curr");
        }
      });
      crrentStage[3].setAttribute("curr", "");
      break;
    case 5:
      allSteps.forEach((e) => {
        if (e.hasAttribute("active")) {
          e.removeAttribute("active");
        }
      });
      stageFive.setAttribute("active", "");
      break;
  }
}

// }

// Buttons {

nextStep.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (stage < 5) {
      e.preventDefault();

      if (stage === 1) {
        if (uN && eM && pN) {
          stage++;
        } else {
          userNameCheck();
          emailCheck();
          phoneNumberCheck();
        }
      } else if (stage === 2) {
        if (document.querySelector(".plans [selected-p]")) {
          if (document.querySelector(".step-two span[inv-p]")) {
            document.querySelector(".step-two span[inv-p]").remove();
          }
          stage++;
        } else {
          if (!document.querySelector(".step-two span[inv-p]")) {
            let span = document.createElement("span");
            span.setAttribute("inv-p", "");
            span.innerHTML = "Please choose one plan";
            document.querySelector(".step-two").append(span);
          }
        }
      } else if (stage > 2) {
        stage++;
      }
    } else {
      e.preventDefault();
    }
    switching();
  });
});

prevStep.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (stage > 1) {
      e.preventDefault();
      stage--;
    } else {
      e.preventDefault();
    }
    switching();
  });
});

// }

// Step 1 {

function userNameCheck() {
  uN = false;

  if (userName.value.length === 0) {
    if (userName.hasAttribute("inv")) {
      userName.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    }
    if (!userName.hasAttribute("empty")) {
      let creatSpan = document.createElement("span");
      userName.setAttribute("empty", "");
      creatSpan.setAttribute("empty", "");
      creatSpan.innerHTML = "This field is required";
      usernameLabel.append(creatSpan);
    }
  } else if (!userNameRe.test(userName.value)) {
    if (userName.hasAttribute("empty")) {
      userName.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }
    if (!userName.hasAttribute("inv")) {
      let creatSpan = document.createElement("span");
      userName.setAttribute("inv", "");
      creatSpan.setAttribute("inv", "");
      creatSpan.innerHTML = "Invalid user-name";
      usernameLabel.appendChild(creatSpan);
    }
  } else if (userNameRe.test(userName.value)) {
    if (userName.hasAttribute("inv")) {
      userName.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    } else if (userName.hasAttribute("empty")) {
      userName.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }
    uN = true;
  }
}

function emailCheck() {
  eM = false;

  if (email.value.length === 0) {
    if (email.hasAttribute("inv")) {
      email.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    }

    if (!email.hasAttribute("empty")) {
      let creatSpan = document.createElement("span");
      email.setAttribute("empty", "");
      creatSpan.setAttribute("empty", "");
      creatSpan.innerHTML = "This field is required";
      emailLabel.append(creatSpan);
    }
  } else if (!emailRe.test(email.value)) {
    if (email.hasAttribute("empty")) {
      email.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }

    if (!email.hasAttribute("inv")) {
      let creatSpan = document.createElement("span");
      email.setAttribute("inv", "");
      creatSpan.setAttribute("inv", "");
      creatSpan.innerHTML = "Invalid email";
      emailLabel.appendChild(creatSpan);
    }
  } else if (emailRe.test(email.value)) {
    if (email.hasAttribute("inv")) {
      email.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    } else if (email.hasAttribute("empty")) {
      email.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }
    eM = true;
  }
}

function phoneNumberCheck() {
  pN = false;

  if (phoneNumber.value.length === 0) {
    if (phoneNumber.hasAttribute("inv")) {
      phoneNumber.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    }

    if (!phoneNumber.hasAttribute("empty")) {
      let creatSpan = document.createElement("span");
      phoneNumber.setAttribute("empty", "");
      creatSpan.setAttribute("empty", "");
      creatSpan.innerHTML = "This field is required";
      phoneNumberLabel.append(creatSpan);
    }
  } else if (!phoneNumberRe.test(phoneNumber.value)) {
    if (phoneNumber.hasAttribute("empty")) {
      phoneNumber.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }

    if (!phoneNumber.hasAttribute("inv")) {
      let creatSpan = document.createElement("span");
      phoneNumber.setAttribute("inv", "");
      creatSpan.setAttribute("inv", "");
      creatSpan.innerHTML = "Invalid phone number";
      phoneNumberLabel.appendChild(creatSpan);
    }
  } else if (phoneNumberRe.test(phoneNumber.value)) {
    if (phoneNumber.hasAttribute("inv")) {
      phoneNumber.removeAttribute("inv");
      document.querySelector("span[inv]").remove();
    } else if (phoneNumber.hasAttribute("empty")) {
      phoneNumber.removeAttribute("empty");
      document.querySelector("span[empty]").remove();
    }
    pN = true;
  }
}

userName.onblur = () => {
  userNameCheck();
};
email.onblur = () => {
  emailCheck();
};
phoneNumber.onblur = () => {
  phoneNumberCheck();
};

// }

// Step 2 {

function choosePlaneOne() {
  if (
    !planeTwo.hasAttribute("selected-p") &&
    !planeThree.hasAttribute("selected-p")
  ) {
    planeOne.setAttribute("selected-p", "");
  } else {
    if (planeTwo.hasAttribute("selected-p")) {
      planeTwo.removeAttribute("selected-p");
    } else {
      planeThree.removeAttribute("selected-p");
    }
    planeOne.setAttribute("selected-p", "");
  }
}

function choosePlaneTwo() {
  if (
    !planeOne.hasAttribute("selected-p") &&
    !planeThree.hasAttribute("selected-p")
  ) {
    planeTwo.setAttribute("selected-p", "");
  } else {
    if (planeOne.hasAttribute("selected-p")) {
      planeOne.removeAttribute("selected-p");
    } else {
      planeThree.removeAttribute("selected-p");
    }
    planeTwo.setAttribute("selected-p", "");
  }
}

function choosePlaneThree() {
  if (
    !planeOne.hasAttribute("selected-p") &&
    !planeTwo.hasAttribute("selected-p")
  ) {
    planeThree.setAttribute("selected-p", "");
  } else {
    if (planeOne.hasAttribute("selected-p")) {
      planeOne.removeAttribute("selected-p");
    } else {
      planeTwo.removeAttribute("selected-p");
    }
    planeThree.setAttribute("selected-p", "");
  }
}

function onAndOff() {
  var switched;

  if (!switchBtn.hasAttribute("on")) {
    switched = true;
    switchBtn.setAttribute("on", "");
    allPlansText.forEach((e) => {
      let bonus = document.createElement("span");
      bonus.setAttribute("bonus", "");
      bonus.innerHTML = "2 Months free";
      e.append(bonus);
    });
  } else {
    switched = false;
    switchBtn.removeAttribute("on");
    allPlans.forEach(() => {
      document.querySelector("span[bonus]").remove();
    });
  }

  switched ? (duration = "Yearly") : (duration = "Monthly");
  switched ? (du = "yr") : (du = "mo");

  function editPlans() {
    if (switched) {
      allPlans.forEach((e) => {
        let p = e.querySelector("p");
        num = p.innerHTML.match(extractNumRe).join("");
        num = +num * 10;
        p.innerHTML = `$${num}/yr`;
      });

      features.forEach((e) => {
        let stepThreeSpan = e.querySelector("span");
        num = stepThreeSpan.innerHTML.match(extractNumRe);
        num = +num * 10;
        stepThreeSpan.innerHTML = `$${+num}/yr`;
      });
    } else {
      allPlans.forEach((e) => {
        let p = e.querySelector("p");
        num = p.innerHTML.match(extractNumRe).join("");
        num = +num / 10;
        p.innerHTML = `$${num}/mo`;
      });

      features.forEach((e) => {
        let stepThreeSpan = e.querySelector("span");
        num = stepThreeSpan.innerHTML.match(extractNumRe).join("");
        num = +num / 10;
        stepThreeSpan.innerHTML = `$${num}/mo`;
      });
    }
  }
  editPlans();
}

planeOne.onclick = () => (
  planeOne.hasAttribute("selected-p")
    ? planeOne.removeAttribute("selected-p")
    : choosePlaneOne(),
  selectedP()
);
planeTwo.onclick = () => (
  planeTwo.hasAttribute("selected-p")
    ? planeTwo.removeAttribute("selected-p")
    : choosePlaneTwo(),
  selectedP()
);
planeThree.onclick = () => (
  planeThree.hasAttribute("selected-p")
    ? planeThree.removeAttribute("selected-p")
    : choosePlaneThree(),
  selectedP()
);
switchBtn.onclick = () => {
  onAndOff();
  selectedP();
};

// }

// Step 3 {

features.forEach((e) => {
  e.onclick = () => {
    e.toggleAttribute("choosed");
    selectedFeature();
  };
});

// }

// Step 4 {

function selectedP() {
  let change;

  if (document.querySelector(".plans [selected-p] p")) {
    if (stageFour.querySelector("div.total span")) {
      stageFour.querySelector("div.plan-price").remove();
    }

    planPrice = document
      .querySelector(".plans [selected-p] p")
      .innerHTML.match(extractNumRe)
      .join("");
    selectedPlan = document.querySelector(".plans [selected-p] h3").innerHTML;

    let div = document.createElement("div");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    let creatChange = document.createElement("span");

    div.setAttribute("class", "plan-price");
    span2.setAttribute("class", "price");
    creatChange.setAttribute("class", "change");

    span.innerHTML = `${selectedPlan} (${duration})`;
    span2.innerHTML = `$${planPrice}/${du}`;
    creatChange.innerHTML = "Change";

    div.append(span);
    div.append(span2);

    stageFour.querySelector(".total").prepend(div);
    stageFour.querySelector(".total span").append(creatChange);

    change = stageFour.querySelector("span.change");
    change.onclick = () => {
      stage = 2;
      document.querySelector("[selected-p]").removeAttribute("selected-p");
      switching();
    };
  }
}

function selectedFeature() {
  if (document.querySelectorAll(".feature-container span")) {
    document.querySelectorAll(".feature-container span").forEach((e) => {
      e.remove();
    });
  }

  function createElement(tagName, attr, content, attrVal = "") {
    let element = document.createElement(tagName);
    element.setAttribute(attr, attrVal);
    element.innerHTML = content;
    return element;
  }

  let arr = [];
  let arrPlan = [];
  let arrPrice = [];

  features.forEach((e) => {
    if (e.hasAttribute("choosed")) {
      arrPlan.push(e.querySelector("h3").innerHTML);
      arrPrice.push(e.querySelector("span").innerHTML);
    }
  });

  let arr2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr2.push(arr[i]);
    }
  }

  let div = createElement("div", "class", "", "feature-container");

  for (let i = 0; i < arrPlan.length; i++) {
    let span = createElement("span", "class", arrPlan[i], "feature");
    let span2 = createElement(
      "span",
      "class",
      arrPrice[i],
      "feature-price price"
    );

    div.append(span);
    div.append(span2);
  }

  stageFour.querySelector(".total").append(div);
  totalCoast();
}

function totalCoast() {
  coast = 0;

  if (document.querySelector("span.total span")) {
    document.querySelector("span.total span").remove();
  }

  stageFour.querySelectorAll("span.price").forEach((e) => {
    coast += parseInt(e.innerHTML.match(extractNumRe).join(""));
  });

  let totalPrice = document.createElement("span");
  totalPrice.setAttribute("class", "final-price");
  totalPrice.innerHTML = `+$${coast}/${du}`;
  stageFour.querySelector("span.total").append(totalPrice);
}

// }
