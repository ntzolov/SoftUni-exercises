exports.generateSelectMenuOptions = (input) => {
  let options = [
    '<option value="crypto-wallet">Crypto Wallet</option>',
    '<option value="credit-card">Credit Card</option>',
    '<option value="debit-card">Debit Card</option>',
    '<option value="paypal">PayPal</option>',
  ];

  for (let i = 0; i < options.length; i++) {
    if (options[i].includes(input)) {
      options[i] = options[i].replace(`"${input}"`, `"${input}" selected`);
    }
  }

  const modifiedOptions = options.join('\n');

  return modifiedOptions;
};
