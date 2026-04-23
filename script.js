const checklist = [
  {
    category: "Student Life",
    items: [
      "Pulled an all-nighter at College Library",
      "Made some shit up during discussion and didn't pay the price",
      "Pretended to be sober in front of a professor",
      "Got hit on by a TA / professor",
      "Saw a situationship unfolding on the 80",
      "Complained about the 80 and still relied on it",
      "Overpaid for something at the bookstore and acted like it was necessary",
      "Went to office hours only when things were already catastrophic",
      "Fought for your life to stay awake in lecture",
      "Panic-bought caffeine before an exam",
      "Committed floorcest",
      "Rode an electric scooter across town",
      "Beefed with a roommate physically or by straight-up stealing their shit",
      "Wished Van Vleck would get taken out by a tornado",
      "Shouted at Duo Mobile like it was a real person",
      "Blew up the College Library bathroom in the wee hours of the night",
      "Dropped a 20% or lower on an exam",
    ],
  },
  {
    category: "Jump Around",
    items: [
      "Rushed the field at Camp Randall",
      "Jumped Around when the Badgers were down 30",
      'Screamed "slut" at a hockey game',
      "Rushed the Kohl Center",
      "Snapped a pic with a star basketball / football player",
      "Played an IM sport",
      "Froze through a tailgate that should've been canceled",
      "Bought a Bear hoodie from the Wisconsin Design Team",
      'Stayed for "Build Me Up Buttercup"',
      'Sang "Varsity" with more confidence than accuracy',
      "Cared deeply about Badger volleyball for one random night",
      "Learned the hockey student section is its own ecosystem",
      "Watched a game at Bratio like you were on the coaching staff",
    ],
  },
  {
    category: "Let's Go Out!",
    items: [
      "Danced on a random balcony on Mifflin",
      "Ended up at Lily's",
      "Made it to a frat tent party",
      "Went out on a Thursday and paid for it Friday",
      'Said "just one drink" and got home embarrassingly late',
      "Lost your friends for 20 minutes and found them like nothing happened",
      "Ordered late-night food in an outfit that made no sense",
      "Woke up somewhere and needed a full minute to process where you were",
      "Tried to act normal around someone who saw you at your worst the night before",
      "Didn't realize how they pour at Mondays and paid the price",
      "Had a drink all 7 days of one week",
      "Flirted with someone just for a cig",
      "Drank jungle juice you could not decipher and kissed someone after",
      "Rode the bull at High Noon",
      "Paid over $35 for a LineLeap",
      "Played the Das Boot game at Essen Haus",
      "Listened to an awful DJ at KK",
      "Stayed for last call at Brat's Bottomless",
      "Danced the night away at Chaser's",
      "Attended a house show",
    ],
  },
  {
    category: "Hungry, Hungry, Hippo",
    items: [
      'Burned your tongue at The Globe because you can "handle spice"',
      "Waited more than 20 minutes for Ginger Root and stayed anyway",
      "Bought Stella's Hot and Cheesy Bread at the Farmers' Market",
      "Split a pitcher of Spotted Cow at the Union",
      "Waited in line for Babcock because it was 52 degrees and that felt right",
      "Defended your favorite Madison restaurant like it was family",
      "Built an entire Saturday around the Farmers' Market",
      "Ordered food because your apartment kitchen was spiritually unavailable",
      "Convinced yourself Ian's was great food at 2 a.m.",
      "Waited 30 minutes for an aggressively mid Cheba sandwich because everyone, including you, was high",
      "Ate Paul's Pelmeni twice in a week",
      "Paid extra for the cilantro rice at Estacion Inka",
    ],
  },
  {
    category: "The Outside",
    items: [
      "Ice skated on the frozen lake because you're Alysia Liu",
      "Made s'mores at Picnic Point",
      "Explored the Arboretum",
      "Jumped in the lake",
      "Spent the first warm day outside instead of in class",
      "Slipped on ice in public and pretended it didn't happen",
      "Under-dressed during fake spring and paid the price",
      "Sat by Lake Mendota and got nothing done",
      "Took a winter walk that hurt your face immediately",
      "Caught a Terrace sunset and understood the hype",
      "Had a lake day that started wholesome and ended a little feral",
      "Experienced one perfect fall day that made Madison feel unbeatable",
      "Sledded down Bascom Hill",
      "Had one summer night in Madison that made graduating feel deeply inconvenient",
    ],
  },
  {
    category: "Madison-core",
    items: [
      "Went to a concert at The Sylvee",
      "Strolled through Olbrich Botanical Gardens",
      "Walked through the Chazen on a date",
      "Visited MMoCA",
      "Took a State Capitol tour",
      "Saw a show at the Overture",
      "Went to Comedy on State",
      "Shook the otters' hands at Henry Vilas Zoo",
      "Spent enough time on State Street to run into everyone you know",
      "Circled the Farmers' Market and got trapped in the crowd",
      "Had an in-depth conversation with Tunnel Bob",
      "Climbed at Bakke",
      "Did the Capitol to State Street to Terrace pipeline in one day",
      "Waited 90 minutes to get up to the UU rooftop",
      "Went to a WUD Union show",
      "Spent an entire afternoon at the Terrace and called it a productive day",
    ],
  },
  {
    category: "Senior-Year Feels",
    items: [
      'Had a "last first day" moment that hit harder than expected',
      'Started saying "we have to do this before graduation" every weekend',
      "Hit up the Lucky's / Regent Street bars as a senior just to reminisce",
      "Got weirdly emotional about having only a few football Saturdays left",
      "Realized how many of your favorite routines are about to end",
      "Created a life bucket list to cope with the fact that senior year is ending",
      `Looked around during a totally normal Madison moment and thought, "I'm going to miss this"`,
      "Had one final moment where it fully hit you that this place mattered",
    ],
  },
];

const storageKey = "wisconsin-idea-checklist";
const checklistRoot = document.getElementById("checklistRoot");
const checkedCount = document.getElementById("checkedCount");
const checkedSummary = document.getElementById("checkedSummary");
const totalItemsLabel = document.getElementById("totalItemsLabel");
const progressFill = document.getElementById("progressFill");
const revealScoreButton = document.getElementById("revealScoreButton");
const resetButton = document.getElementById("resetButton");
const scoreModal = document.getElementById("scoreModal");
const modalCard = scoreModal.querySelector(".modal-card");
const closeModalButton = document.getElementById("closeModalButton");
const finalScore = document.getElementById("finalScore");
const scoreSummary = document.getElementById("scoreSummary");

const allItems = checklist.flatMap((group) => group.items);
const categoryLookup = new Map(checklist.map((group) => [group.category, group]));
const savedState = loadState();

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(parsed) ? new Set(parsed) : new Set();
  } catch {
    return new Set();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify([...savedState]));
}

function getScoreSummary(score) {
  if (score <= 15) return "Frankly, you are Wisconsin's problem now.";
  if (score <= 35) return "You did senior year correctly and probably irresponsibly.";
  if (score <= 55) return "Respectable. Strong Madison mileage.";
  if (score <= 75) return "You were there, but there is still work to do.";
  return "This reads like you stayed home with Canvas open.";
}

function updateProgress() {
  const completed = savedState.size;
  const total = allItems.length;
  checkedCount.textContent = String(completed);
  checkedSummary.textContent = `${completed} of ${total} items checked`;
  totalItemsLabel.textContent = String(total);
  progressFill.style.width = `${(completed / total) * 100}%`;

  document.querySelectorAll("[data-category-card]").forEach((card) => {
    const key = card.getAttribute("data-category-card");
    const group = categoryLookup.get(key);
    if (!group) return;

    const count = group.items.filter((item) => savedState.has(item)).length;
    card.querySelector("[data-category-count]").textContent = `${count} / ${group.items.length}`;
  });
}

function toggleModal(show) {
  scoreModal.classList.toggle("hidden", !show);
  scoreModal.setAttribute("aria-hidden", String(!show));

  if (show) {
    modalCard.focus();
    return;
  }

  revealScoreButton.focus();
}

function buildChecklist() {
  const fragment = document.createDocumentFragment();

  checklist.forEach((group) => {
    const categoryCard = document.createElement("article");
    categoryCard.className = "category-card";
    categoryCard.setAttribute("data-category-card", group.category);

    const header = document.createElement("div");
    header.className = "category-header";

    const title = document.createElement("h3");
    title.textContent = group.category;

    const countPill = document.createElement("div");
    countPill.className = "category-count";
    countPill.setAttribute("data-category-count", "");
    countPill.textContent = `0 / ${group.items.length}`;

    header.append(title, countPill);

    const itemsWrapper = document.createElement("div");
    itemsWrapper.className = "items";

    group.items.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${group.category}-${index}`.replace(/[^a-z0-9-]/gi, "-");
      checkbox.checked = savedState.has(item);

      const label = document.createElement("label");
      label.setAttribute("for", checkbox.id);
      label.textContent = item;

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          savedState.add(item);
        } else {
          savedState.delete(item);
        }

        saveState();
        updateProgress();
      });

      row.append(checkbox, label);
      itemsWrapper.appendChild(row);
    });

    categoryCard.append(header, itemsWrapper);
    fragment.appendChild(categoryCard);
  });

  checklistRoot.appendChild(fragment);
  updateProgress();
}

revealScoreButton.addEventListener("click", () => {
  const score = allItems.length - savedState.size;
  finalScore.textContent = String(score);
  scoreSummary.textContent = `${savedState.size} out of ${allItems.length} checked. ${getScoreSummary(
    score,
  )}`;
  toggleModal(true);
});

resetButton.addEventListener("click", () => {
  if (!savedState.size) return;
  if (!window.confirm("Reset every checked item?")) return;

  savedState.clear();
  saveState();
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
});

closeModalButton.addEventListener("click", () => toggleModal(false));

scoreModal.addEventListener("click", (event) => {
  if (event.target === scoreModal) {
    toggleModal(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModal(false);
  }
});

buildChecklist();
