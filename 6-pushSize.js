function pushNoSize() {
  const products = grailed22.getSheetValues(
    2,
    1,
    grailed22.getLastRow(),
    grailed22.getLastColumn()
  );

  const noSizes = products.filter((row) => {
    if (row[8]) {
      row[8].includes("no Size");
    } else if (row[9]) {
      row[9].includes("no Size");
    } else {
      row;
    }
  });

  console.log(noSizes);
}
