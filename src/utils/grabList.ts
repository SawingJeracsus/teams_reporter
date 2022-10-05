export function grabList() {
  const elements = document.querySelectorAll(
    ".ts-message [data-tid=threadBodyDisplayName]"
  );

  const vipPersons = ["Поліщук Андрій Олегович"];

  return Array.from(elements)
    .map((element) => element.innerHTML.trim().replaceAll("\n", ""))
    .concat(vipPersons);
}
