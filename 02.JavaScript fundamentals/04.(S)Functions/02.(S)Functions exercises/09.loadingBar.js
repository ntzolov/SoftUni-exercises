function loadingBar(num) {
  switch (num) {
    case 0:
      console.log('0% [..........]');
      console.log('Still loading...');
      break;
    case 10:
      console.log('10% [%.........]');
      console.log('Still loading...');
      break;
    case 20:
      console.log('20% [%%........]');
      console.log('Still loading...');
      break;
    case 30:
      console.log('30% [%%%.......]');
      console.log('Still loading...');
      break;
    case 40:
      console.log('40% [%%%%......]');
      console.log('Still loading...');
      break;
    case 50:
      console.log('50% [%%%%%.....]');
      console.log('Still loading...');
      break;
    case 60:
      console.log('60% [%%%%%%....]');
      console.log('Still loading...');
      break;
    case 70:
      console.log('70% [%%%%%%%...]');
      console.log('Still loading...');
      break;
    case 80:
      console.log('80% [%%%%%%%%..]');
      console.log('Still loading...');
      break;
    case 90:
      console.log('90% [%%%%%%%%%.]');
      console.log('Still loading...');
      break;
    case 100:
      console.log('100% Complete!');

      break;
  }
}

loadingBar(30);
