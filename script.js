function easy (){
  document.getElementById('circle').style.animationDuration = '60s';

  document.getElementById('circle').className = 'crcl';
}

function medium (){
  document.getElementById('circle').style.animationDuration = '20s';

  document.getElementById('circle').className = 'crcl';
}

function hard (){
  document.getElementById('circle').style.animationDuration = '10s';

  document.getElementById('circle').className = 'crcl';
}

let cnt = 0;

function count (){
  cnt = parseInt(1) + parseInt(cnt);
  var src = document.getElementById('score');
  src.innerHTML = cnt;
}

function restart (){
  window.location.reload();
}