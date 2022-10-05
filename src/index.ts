import { createTable } from "./utils/createTable";
import { getCurrentTab } from "./utils/getCurrentTab";
import { grabList } from "./utils/grabList";

const root = document.querySelector("#root");
const copyButton = document.querySelector("#copy-report");

copyButton?.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;

  target.classList.add("active");

  const elements = document.querySelectorAll("td");
  const names = Array.from(elements).map((el) => el.innerHTML.trim());

  navigator.clipboard.writeText(names.join("\n"));

  setTimeout(() => {
    target.classList.remove("active");
  }, 1_000);
});

const display = (results: string) => {
  if (!root) {
    return;
  }

  root.innerHTML = results;
};

getCurrentTab().then(async (currentTab) => {
  const tabId = currentTab?.id;

  if (!tabId) {
    return;
  }

  try {
    chrome.scripting.executeScript(
      {
        target: { tabId },
        func: grabList,
      },
      (result) => {
        const names = Array.from(new Set(result[0].result)).sort();

        console.warn(JSON.stringify(names));

        display(createTable(names.map((name) => [name])));
      }
    );
  } catch (err: any) {
    display(err.message + "aaaa");
  }
});
