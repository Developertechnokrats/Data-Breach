/*===========================================sign area==============================*/
const canvas = document.getElementById("signature-pad");
	  const ctx = canvas.getContext("2d");
	  let drawing = false;

	  canvas.addEventListener("mousedown", () => drawing = true);
	  canvas.addEventListener("mouseup", () => drawing = false);
	  canvas.addEventListener("mouseout", () => drawing = false);
	  canvas.addEventListener("mousemove", draw);

	  function draw(e) {
	    if (!drawing) return;
	    ctx.lineWidth = 2;
	    ctx.lineCap = "round";
	    ctx.strokeStyle = "#000";
	    ctx.lineTo(e.offsetX, e.offsetY);
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.moveTo(e.offsetX, e.offsetY);
	  }

	  document.getElementById("clear-button").addEventListener("click", () => {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.beginPath();
	  });
/*===========================================sign area==============================*/