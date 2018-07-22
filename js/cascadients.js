let gradients = [
  {
    gradient: '.gradient-1',
    color1: '#2575fc',
    color2: '#6a11cb'
  },
  {
    gradient: '.gradient-2',
    color1: '#667eea',
    color2: '#764ba2'
  },
  {
    gradient: '.gradient-3',
    color1: '#6e45e2',
    color2: '#581799'
  },
  {
    gradient: '.gradient-4',
    color1: '#e5b2ca',
    color2: '#7028e4'
  },
  {
    gradient: '.gradient-5',
    color1: '#b224ef',
    color2: '#7579ff'
  },
  {
    gradient: '.gradient-6',
    color1: '#E5D9F2',
    color2: '#CDC1FF'
  },
  {
    gradient: '.gradient-7',
    color1: '#8E2DE2',
    color2: '#4A00E0'
  },
  {
    gradient: '.gradient-8',
    color1: '#5F72BE',
    color2: '#9921E8'
  },
  {
    gradient: '.gradient-9',
    color1: '#A594F9',
    color2: '#6247AA'
  },
  {
    gradient: '.gradient-10',
    color1: '#F8CEEC',
    color2: '#A88BEB'
  },
  {
    gradient: '.gradient-11',
    color1: '#21d4fd',
    color2: '#b721ff'
  },
  {
    gradient: '.gradient-12',
    color1: '#cc4499',
    color2: '#663dff'
  },
  {
    gradient: '.gradient-13',
    color1: '#84fab0',
    color2: '#8fd3f4'
  },
  {
    gradient: '.gradient-14',
    color1: '#90F7EC',
    color2: '#32CCBC'
  },
  {
    gradient: '.gradient-15',
    color1: '#FFFB7D',
    color2: '#85FFBD'
  }
]

gradients.forEach(obj => {
  const gradientClass = obj.gradient;
  const allGradients = document.querySelector(gradientClass);

  const gradientValue = 'linear-gradient(' + obj.color1 + ', ' + obj.color2 + ')';
  allGradients.setAttribute('data-clipboard-text', 'background: ' + gradientValue);
  const children = allGradients.childNodes[1];

  children.style.background = gradientValue;
  children.style.boxShadow = "0px 10px 24px -2px " + hexToRgbA(obj.color2);
});

// Convert rgb to hex
function hexToRgbA(hex){
  let c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c = hex.substring(1).split('');
  if(c.length== 3){
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = '0x'+c.join('');
  return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.6)';
  }
  throw new Error('Bad Hex');
}

const containerBtn = document.querySelectorAll('.code');

containerBtn.forEach(container => {
  container.addEventListener("click", () => {
    const childContainer = container.children[0];
    childContainer.classList.add("copied");

    setTimeout(() => {
      childContainer.classList.remove("copied");
    }, 800);
  });
});

const clipboard = new ClipboardJS('.code');

clipboard.on('success', (e) => {
  console.info('Gradient CSS:', e.text);
});
clipboard.on('error', (e) => {
    console.log(e);
});

const colorSelect = document.querySelectorAll('.color-select');

colorSelect.forEach((color) => {
  color.addEventListener('click' , (e) => {
    const red = color.classList.contains('red');
    const blueGradient = document.querySelector('#blue');
  });
});