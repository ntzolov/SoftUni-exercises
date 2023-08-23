function generateCubeOptions(difficultyLevel) {
  let options = [
    '<option value="1">1 - Very Easy</option>',
    '<option value="2">2 - Easy</option>',
    '<option value="3">3 - Medium (Standard 3x3)</option>',
    '<option value="4">4 - Intermediate</option>',
    '<option value="5">5 - Expert</option>',
    '<option value="6">6 - Hardcore</option>',
  ];

  for (let i = 0; i <= 5; i++) {
    if (i + 1 === difficultyLevel) {
      options[i] = options[i].replace(`value="${difficultyLevel}"`, `value="${difficultyLevel}" selected`);
    }
  }

  const modifiedOptions = options.join('\n');

  return modifiedOptions;
}

module.exports = {
  generateCubeOptions,
};
