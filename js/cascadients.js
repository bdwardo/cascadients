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

gradients.map(obj => {
  let gradientClass = obj.gradient;
  let allGradients = document.querySelector(gradientClass);
  let gradientValue = 'linear-gradient(' + obj.color1 + ', ' + obj.color2 + ')';
  allGradients.setAttribute('data-clipboard-text', 'background: ' + gradientValue);
  let children = allGradients.childNodes[1];

  // change gradient styles for each container
  children.style.background = gradientValue;
  children.style.boxShadow = "0px 10px 24px -2px " + hexToRgbA(obj.color2);
});

// convert hex to rgba 
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.6)';
    }
    throw new Error('Bad Hex');
}

let containerBtn = document.querySelectorAll('.code');

containerBtn.forEach(e => {
  e.addEventListener("click", () => {
    let childContainer = e.children[0];
    childContainer.classList.add("copied");

    setTimeout(function() {
      childContainer.classList.remove("copied");
    }, 1000);
  });
});

let clipboard = new ClipboardJS('.code');

clipboard.on('success', function(e) {
  console.info('Text:', e.text);
});
clipboard.on('error', function(e) {
    console.log(e);
});


let colorSelect = document.querySelectorAll('.color-select');


colorSelect.forEach(function(e) {
  e.addEventListener('click' , function() {
      let red = e.classList.contains('red');
      let blueGradient = document.querySelector('#blue');
  });
});