export const createTable = (collection: (string | number)[][]) => {
  return `
<table>
${collection.map(
  (row) => `
        <tr>
            ${row.map(
              (cell) => `
                <td>
                    ${cell}
                </td>
            `
            )}
        </tr>
    `
).join('')}
</table>
    `;
};
