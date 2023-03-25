function extractFile(string) {
  let file = string.split('\\').pop();
  let fileName = file.slice(0).split('.')
  fileName.pop()

  if (fileName.length > 1) {
    fileName = fileName.join('.')
  }

  let ext = file.slice(0).split('.').pop();
  
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${ext}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bat.pptx')