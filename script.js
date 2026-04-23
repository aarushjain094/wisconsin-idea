const checklist = [
  {
    category: "Student Life",
    items: [
      "Pulled an all-nighter at College Library",
      "Made some shit up during discussion and didn't pay the price",
      "Pretended to be sober in front of a professor",
      "Got hit on by a TA / professor",
      "Saw a situationship unfolding on the 80",
      "Overpaid for something at the bookstore and acted like it was necessary",
      "Had a snowball fight on Bascom Hill",
      "Drank a beer with a professor",
      "Convinced a non-Badger to eat cheese curds",
      "Panic-bought caffeine before an exam",
      "Committed floorcest",
      "Featured on a TV at a bar",
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
      "Attended a hockey game where the Badgers lost despite them being outrageously successful, in general",
      "Rushed the court at the Kohl Center",
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
      "Took a tipsy walk down State Street that somehow lasted an hour",
      "Kayaked / canoed / sailed on Lake Mendota",
      "Ended a night at the Terrace and told yourself you were sobering up",
      "Didn't realize how they pour at Mondays and paid the price",
      "Had a drink all 7 days of one week",
      "Flirted with someone just for a cig",
      "Drank jungle juice you could not decipher and kissed someone after",
      "Rode the bull at Red Rock",
      "Paid over $25 for a LineLeap",
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
      "Treated Mediterranean Cafe like a guaranteed recovery plan",
      "Ordered food because your apartment kitchen was spiritually unavailable",
      "Convinced yourself Ian's was great food at 2 a.m.",
      "Waited 30 minutes for an aggressively mid Cheba sandwich because everyone, including you, was high",
      "Ate Paul's Pel'meni twice in a week",
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
      "Completed the Lake Monona bike loop",
      "Sat by Lake Mendota and got nothing done",
      "Had a walk of shame while it was freezing outside",
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
      "Ended up in a random shop on State Street and stayed longer than expected",
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
const introStorageKey = "wisconsin-idea-intro-seen";
const introOverlay = document.getElementById("introOverlay");
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
const retakeButton = document.getElementById("retakeButton");
const shareScoreButton = document.getElementById("shareScoreButton");
const shareStatus = document.getElementById("shareStatus");

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

function playIntro() {
  if (!introOverlay) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    introOverlay.remove();
    return;
  }
  if (sessionStorage.getItem(introStorageKey) === "true") {
    introOverlay.remove();
    return;
  }

  document.body.classList.add("intro-active");

  window.setTimeout(() => {
    introOverlay.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
    sessionStorage.setItem(introStorageKey, "true");
  }, 1100);
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify([...savedState]));
}

function resetChecklist() {
  savedState.clear();
  saveState();
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
}

function getScoreSummary(score) {
  if (score <= 15) return "The university probably should have bought insurance for you. Thankfully, you're not Mnookin's problem anymore (not that she really cared).";
  if (score <= 30) return "You did it right and probably irresponsibly.";
  if (score <= 50) return "You had a good run. Knock some more out before you hang up your cleats";
  if (score <= 70) return "Impressive; strong Madison mileage";
  if (score <= 90) return "You were out and about, but there's still some work to do";
  return "Did you attend parties with Canvas open?";
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
  if (shareStatus) {
    shareStatus.textContent = "";
  }

  if (show) {
    modalCard.focus();
    return;
  }

  revealScoreButton.focus();
}

function buildChecklist() {
  const fragment = document.createDocumentFragment();
  let itemNumber = 1;

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

      const number = document.createElement("span");
      number.className = "item-number";
      number.textContent = `${itemNumber}.`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${group.category}-${index}`.replace(/[^a-z0-9-]/gi, "-");
      checkbox.checked = savedState.has(item);

      const label = document.createElement("label");
      label.setAttribute("for", checkbox.id);
      label.textContent = item;

      row.addEventListener("click", (event) => {
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLLabelElement) {
          return;
        }

        checkbox.click();
      });

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          savedState.add(item);
        } else {
          savedState.delete(item);
        }

        saveState();
        updateProgress();
      });

      row.append(number, checkbox, label);
      itemsWrapper.appendChild(row);
      itemNumber += 1;
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
  resetChecklist();
});

retakeButton.addEventListener("click", () => {
  resetChecklist();
  toggleModal(false);
});

shareScoreButton.addEventListener("click", async () => {
  const shareText = `I got a ${finalScore.textContent} on The Wisconsin Experience. ${window.location.href}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "The Wisconsin Experience",
        text: `I got a ${finalScore.textContent} on The Wisconsin Experience.`,
        url: window.location.href,
      });
      shareStatus.textContent = "Shared.";
      return;
    }

    await navigator.clipboard.writeText(shareText);
    shareStatus.textContent = "Score copied to clipboard.";
  } catch {
    shareStatus.textContent = "Couldn't share right now.";
  }
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

playIntro();
buildChecklist();
