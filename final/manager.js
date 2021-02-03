var items = [
  [
    {
      name: "Element Name",
      text: "Hydrogen",
    },
    {
      name: "Element Symbol",
      text: "H",
    },
    {
      name: "Atomic Number",
      text: "1",
    },
    {
      name: "Element Uses",
      text: "blimps, fertilizer, rocket fuel",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Helium",
    },
    {
      name: "Element Symbol",
      text: "He",
    },
    {
      name: "Atomic Number",
      text: "2",
    },
    {
      name: "Element Uses",
      text: "balloons, blimps, scuba divers",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Carbon",
    },
    {
      name: "Element Symbol",
      text: "C",
    },
    {
      name: "Atomic Number",
      text: "6",
    },
    {
      name: "Element Uses",
      text: "pencils, coal, diamonds",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Nitrogen",
    },
    {
      name: "Element Symbol",
      text: "N",
    },
    {
      name: "Atomic Number",
      text: "7",
    },
    {
      name: "Element Uses",
      text: "78% of air, liquid coolant",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Oxygen",
    },
    {
      name: "Element Symbol",
      text: "O",
    },
    {
      name: "Atomic Number",
      text: "8",
    },
    {
      name: "Element Uses",
      text: "cells need it, fire, steel",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Sodium",
    },
    {
      name: "Element Symbol",
      text: "Na",
    },
    {
      name: "Atomic Number",
      text: "11",
    },
    {
      name: "Element Uses",
      text: "street lights, batteries, soda",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Aluminum",
    },
    {
      name: "Element Symbol",
      text: "Al",
    },
    {
      name: "Atomic Number",
      text: "13",
    },
    {
      name: "Element Uses",
      text: "doorknobs, foil, cable",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Silicon",
    },
    {
      name: "Element Symbol",
      text: "Si",
    },
    {
      name: "Atomic Number",
      text: "14",
    },
    {
      name: "Element Uses",
      text: "solar cells, tools, microchips",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Sulfur",
    },
    {
      name: "Element Symbol",
      text: "S",
    },
    {
      name: "Atomic Number",
      text: "16",
    },
    {
      name: "Element Uses",
      text: "matches, fireworks, batteries",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Chlorine",
    },
    {
      name: "Element Symbol",
      text: "Cl",
    },
    {
      name: "Atomic Number",
      text: "17",
    },
    {
      name: "Element Uses",
      text: "water purification, bleach, hydrochloric acid",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Potassium",
    },
    {
      name: "Element Symbol",
      text: "K",
    },
    {
      name: "Atomic Number",
      text: "19",
    },
    {
      name: "Element Uses",
      text: "fertilizer",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Calcium",
    },
    {
      name: "Element Symbol",
      text: "Ca",
    },
    {
      name: "Atomic Number",
      text: "20",
    },
    {
      name: "Element Uses",
      text: "batteries, plaster of Paris",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Iron",
    },
    {
      name: "Element Symbol",
      text: "Fe",
    },
    {
      name: "Atomic Number",
      text: "26",
    },
    {
      name: "Element Uses",
      text: "bikes, cars, nails",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Nickel",
    },
    {
      name: "Element Symbol",
      text: "Ni",
    },
    {
      name: "Atomic Number",
      text: "28",
    },
    {
      name: "Element Uses",
      text: "coins, silverware, white gold",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Copper",
    },
    {
      name: "Element Symbol",
      text: "Cu",
    },
    {
      name: "Atomic Number",
      text: "29",
    },
    {
      name: "Element Uses",
      text: "cable, wire, water pipes",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Zinc",
    },
    {
      name: "Element Symbol",
      text: "Zn",
    },
    {
      name: "Atomic Number",
      text: "30",
    },
    {
      name: "Element Uses",
      text: "gutters, batteries",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Silver",
    },
    {
      name: "Element Symbol",
      text: "Ag",
    },
    {
      name: "Atomic Number",
      text: "47",
    },
    {
      name: "Element Uses",
      text: "mirrors, batteries, silverware",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Tin",
    },
    {
      name: "Element Symbol",
      text: "Sn",
    },
    {
      name: "Atomic Number",
      text: "50",
    },
    {
      name: "Element Uses",
      text: "coins, organ pipes, enamel",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Mercury",
    },
    {
      name: "Element Symbol",
      text: "Hg",
    },
    {
      name: "Atomic Number",
      text: "80",
    },
    {
      name: "Element Uses",
      text: "barometers, thermostats, street lights",
    },
  ],
  [
    {
      name: "Element Name",
      text: "Gold",
    },
    {
      name: "Element Symbol",
      text: "Au",
    },
    {
      name: "Atomic Number",
      text: "79",
    },
    {
      name: "Element Uses",
      text: "jewelry, dental crowns",
    },
  ],
];

var knownItems = [];
var unknkownItems = [];
var activeCard = [];
var activeCardId = 0;

function renderCard() {
  var card = document.getElementById("card");
  card.innerHTML = "";
  var header = document.createElement("p");
  header.innerHTML = activeCard[activeCardId]["name"];
  header.className = "header";
  var content = document.createElement("h1");
  content.innerHTML = activeCard[activeCardId]["text"];
  content.className = "content";
  card.appendChild(header);
  card.appendChild(content);
}
function renderKnown() {
  var known = document.getElementById("known");
  if (known.childNodes.length > 1) {
    known.removeChild(known.lastChild);
  }
  var outlayer = document.createElement("div");
  outlayer.className = "outlayer";
  known.appendChild(outlayer);
  var text = document.createElement("p");
  if (knownItems.length > 0) {
    text.innerHTML = knownItems[knownItems.length - 1]["text"];
  }
  outlayer.appendChild(text);
  var counter = document.getElementById("knownAmount");
  counter.innerHTML = "(" + knownItems.length + ")";
}
function renderUnknown() {
  var known = document.getElementById("unknown");
  if (known.childNodes.length > 1) {
    known.removeChild(known.lastChild);
  }
  var outlayer = document.createElement("div");
  outlayer.className = "outlayer";
  known.appendChild(outlayer);
  var text = document.createElement("p");
  if (unknkownItems.length > 0) {
    text.innerHTML = unknkownItems[unknkownItems.length - 1]["text"];
  }
  outlayer.appendChild(text);
  var counter = document.getElementById("unknownAmount");
  counter.innerHTML = "(" + unknkownItems.length + ")";
}
function renderRemaining() {
  var known = document.getElementById("remaining");
  if (known.childNodes.length > 1) {
    known.removeChild(known.lastChild);
  }
  var outlayer = document.createElement("div");
  outlayer.className = "outlayer";
  known.appendChild(outlayer);
  var text = document.createElement("p");
  if (items.length > 0) {
    text.innerHTML = items[0][0]["text"];
  }
  outlayer.appendChild(text);
  var counter = document.getElementById("remainingAmount");
  counter.innerHTML = "(" + items.length + ")";
}
function cardIndex() {
  activeCardId++;
  if (activeCardId == 4) {
    activeCardId = 0;
  }
  renderCard();
}
function pickCard() {
  if (items.length > 0) {
    activeCard = items[0];
    items.splice(0, 1);
  }
  renderCard();
  renderKnown();
  renderUnknown();
  renderRemaining();
}

function KnewItem() {
  if (activeCard[0]) {
    knownItems.push(activeCard[0]);
    activeCard = [];
    pickCard();
  }
}
function DidntKnew() {
  if (activeCard[0]) {
    unknkownItems.push(activeCard[0]);
    activeCard = [];
    pickCard();
  }
}
function shuffle() {
  if (activeCard[0]) {
    items.push(activeCard);
  }
  pickCard();
}

pickCard();
