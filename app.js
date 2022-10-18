  const anchor = document.getElementById('anchor');
  const rect = anchor.getBoundingClientRect();
  const anchorX = rect.left + rect.width / 2;
  const anchorY = rect.top + rect.height / 2;
  const eye = document.getElementById('eye');
  let mouseX = 0;
  let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY,);
    eye.style.transform = `rotate(${90+ angleDeg}deg)`;
})

function angle  (centerX, centerY, mouseX, mouseY) {
    const radianAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const deg = radianAngle * 180 / Math.PI;
    return deg;
}
