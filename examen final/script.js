(function() {
    const humoLateral = document.createElement('div');
    humoLateral.style.position = 'fixed';
    humoLateral.style.top = '0';
    humoLateral.style.bottom = '0';
    humoLateral.style.width = '10px';
    humoLateral.style.zIndex = '-1'; 
    humoLateral.style.pointerEvents = 'none';
  
    const canvas = document.createElement('canvas');
    humoLateral.appendChild(canvas);
    document.body.appendChild(humoLateral);
  
    const ctx = canvas.getContext('2d');
    canvas.width = 10; 
    canvas.height = window.innerHeight;
  
    function dibujarHumo() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
      ctx.beginPath();
      ctx.arc(5, Math.random() * canvas.height, 5, 0, Math.PI * 2);
      ctx.fill();
  
      requestAnimationFrame(dibujarHumo);
    }
  
    dibujarHumo();
  })();
  