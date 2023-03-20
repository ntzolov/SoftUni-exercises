function browserHistory(obj, arr) {
  for (let line of arr) {
    if (line === 'Clear History and Cache') {
      obj['Open Tabs'] = [];
      obj['Recently Closed'] = [];
      obj['Browser Logs'] = [];
    }
    let [command, website] = line.split(' ');
    if (command === 'Open') {
      open(website);
    } else if (command === 'Close') {
      close(website);
    }
  }

  console.log(obj['Browser Name']);
  console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
  console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
  console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);


  function open(website) {
    if (!obj['Open Tabs'].includes(website)) {
      obj['Open Tabs'].push(website);
      obj['Browser Logs'].push(`Open ${website}`);
    }
  }

  function close(website) {
    if (obj['Open Tabs'].includes(website)) {
      let index = obj['Open Tabs'].indexOf(website);
      let itemToMove = obj['Open Tabs'].splice(index, 1);
      obj['Recently Closed'].push(website);
      obj['Browser Logs'].push(`Close ${website}`);
    }
  }
}

browserHistory(
  {
    'Browser Name': 'Mozilla Firefox',
    'Open Tabs': ['YouTube'],
    'Recently Closed': ['Gmail', 'Dropbox'],
    'Browser Logs': [
      'Open Gmail',
      'Close Gmail',
      'Open Dropbox',
      'Open YouTube',
      'Close Dropbox',
    ],
  },
  ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);
