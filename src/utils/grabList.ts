export function grabList() {
  const elements = document.querySelectorAll(
    ".ts-message [data-tid=threadBodyDisplayName]"
  );

  // You can add some person who should be in each report
  const vipPersons: string[] = [];

  return Array.from(elements)
    .map((element) => element.innerHTML.trim().replaceAll("\n", ""))
    .concat(vipPersons);
}
