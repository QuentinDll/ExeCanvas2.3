var bread = document.getElementById('bread');
var bread = bread.getContext('2d');

// box
bread.beginPath();
bread.moveTo(0, 0);
bread.lineTo(400, 0);
bread.lineTo(400, 400);
bread.lineTo(0, 400);
bread.stroke();

// head
bread.beginPath();
bread.arc(200, 75, 60, 0, 2*Math.PI);
bread.lineWidth = '2';
bread.fillStyle = '#976F0F';
bread.fill();

// eye left
bread.beginPath();
bread.arc(175, 65, 10, 0, 2*Math.PI);
bread.lineWidth = '2';
bread.fillStyle = '#FFF';
bread.fill();

// eye right
bread.beginPath();
bread.arc(225, 65, 10, 0, 2*Math.PI);
bread.lineWidth = '2';
bread.fillStyle = '#FFF';
bread.fill();

// eye brow left
bread.beginPath();
bread.moveTo(165, 45);
bread.quadraticCurveTo(175, 40, 185, 45);
bread.lineWidth = '2';
bread.strokeStyle = '#FFF';
bread.stroke();

// eye brow right
bread.beginPath();
bread.moveTo(215, 45);
bread.quadraticCurveTo(225, 40, 235, 45);
bread.lineWidth = '2';
bread.strokeStyle = '#FFF';
bread.stroke();

// mouth up
bread.beginPath();
bread.moveTo(165, 80);
bread.quadraticCurveTo(200, 100, 235, 80)
bread.lineWidth = '2';
bread.strokeStyle = '#DF2004';
bread.stroke();

// mouth down
bread.beginPath();
bread.moveTo(165, 80);
bread.quadraticCurveTo(200, 120, 235, 80)
bread.lineWidth = '2';
bread.strokeStyle = '#DF2004';
bread.stroke();

// arms
bread.beginPath();
bread.moveTo(50, 140);
bread.lineTo(350, 140);
bread.lineWidth = '40';
bread.strokeStyle = '#976F0F';
bread.stroke();

// hand left
bread.beginPath();
bread.moveTo(50, 120);
bread.quadraticCurveTo(0, 140, 50, 160)
bread.lineWidth = '2';
bread.fillStyle = '#976F0F';
bread.fill();

// hand right
bread.beginPath();
bread.moveTo(350, 120);
bread.quadraticCurveTo(400, 140, 350, 160)
bread.lineWidth = '2';
bread.fillStyle = '#976F0F';
bread.fill();

// body left
bread.beginPath();
bread.moveTo(165, 160);
bread.lineTo(165, 360);
bread.lineWidth = '35';
bread.strokeStyle =  '#976F0F';
bread.stroke();

// body middle
bread.beginPath();
bread.moveTo(197, 160);
bread.lineTo(197, 290);
bread.lineWidth = '32';
bread.strokeStyle =  '#976F0F';
bread.stroke();

// body right
bread.beginPath();
bread.moveTo(230, 160);
bread.lineTo(230, 360);
bread.lineWidth = '35';
bread.strokeStyle =  '#976F0F';
bread.stroke();

// foot left
bread.beginPath();
bread.moveTo(148, 360);
bread.quadraticCurveTo(162, 370, 182, 360);
bread.lineWidth = '2';
bread.fillStyle = '#976F0F';
bread.fill();

// foot right
bread.beginPath();
bread.moveTo(213, 360);
bread.quadraticCurveTo(232, 370, 247, 360);
bread.lineWidth = '2';
bread.fillStyle = '#976F0F';
bread.fill();

// eye left
bread.beginPath();
bread.arc(200, 180, 10, 0, 2*Math.PI);
bread.lineWidth = '2';
bread.fillStyle = 'purple';
bread.fill();
// eye left
bread.beginPath();
bread.arc(200, 220, 10, 0, 2*Math.PI);
bread.lineWidth = '2';
bread.fillStyle = 'purple';
bread.fill();
//
