exports.generateSelectMenuOptions = (input) => {
  let options = [
    '<option value="PC">PC</option>',
    '<option value="Nintendo">Nintendo</option>',
    '<option value="PS4">PS4</option>',
    '<option value="PS5">PS5</option>',
    '<option value="XBOX">XBOX</option>',
  ];

  for (let i = 0; i < options.length; i++) {
    if (options[i].includes(input)) {
      options[i] = options[i].replace(`"${input}"`, `"${input}" selected`);
    }
  }

  const modifiedOptions = options.join('\n');

  return modifiedOptions;
};
