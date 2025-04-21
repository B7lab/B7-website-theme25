// Main Menu

document.addEventListener('DOMContentLoaded', function () {
    // Greifen des Burger-Icons und des Menüs
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    // Event-Listener für das Burger-Menü hinzufügen
    burgerMenu.addEventListener('click', function () {
        // Menü umschalten (ein/aus)
        menu.classList.toggle('open');
    });
});




// Logo-Physik-Canvas

$(document).ready(function () {
    // Initialisierung des Canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matter.js-Engine initialisieren
    const { Engine, Render, World, Bodies, Body, Events } = Matter;
    const engine = Engine.create();
    const world = engine.world;

    // Maussteuerung hinzufügen
   // Maussteuerung hinzufügen
   const mouse = { x: 0, y: 0 };
   canvas.addEventListener('mousemove', (e) => {
       mouse.x = e.clientX;
       mouse.y = e.clientY;
   });

   // Logo-Daten
   const logos = [
       { src: 'wp-content/themes/www/assets/logo/logo2.png' },
       { src: 'wp-content/themes/www/assets/logo/logo3.png' },
       { src: 'wp-content/themes/www/assets/logo/logo4.png' },
       { src: 'wp-content/themes/www/assets/logo/logo5.png' },
   ];

   const logoBodies = [];
   const images = [];

   // Bilder laden und Matter.js-Körper erstellen
   logos.forEach((logo, index) => {
       const img = new Image();
       img.src = logo.src;
       images.push(img);

       img.onload = () => {
           const width = 50;
           const height = 50;
           const x = 100 + index * 100;
           const y = 100;

           // Körper in Matter.js erstellen
           const body = Bodies.rectangle(x, y, width, height, {
               restitution: 0.9, // "Sprungkraft"
               friction: 0.1,   // Reibung
               render: {
                   sprite: {
                       texture: logo.src,
                       xScale: width / img.width,
                       yScale: height / img.height
                   }
               }
           });

           World.add(world, body);
           logoBodies.push(body);
       };
   });

   // Wände für das Canvas hinzufügen
   const walls = [
       Bodies.rectangle(canvas.width / 2, 0, canvas.width, 20, { isStatic: true }), // obere Wand
       Bodies.rectangle(canvas.width / 2, canvas.height, canvas.width, 20, { isStatic: true }), // untere Wand
       Bodies.rectangle(0, canvas.height / 2, 20, canvas.height, { isStatic: true }), // linke Wand
       Bodies.rectangle(canvas.width, canvas.height / 2, 20, canvas.height, { isStatic: true }) // rechte Wand
   ];

   World.add(world, walls);

   // Mausinteraktion
   Events.on(engine, 'beforeUpdate', () => {
       logoBodies.forEach((body) => {
           const dx = mouse.x - body.position.x;
           const dy = mouse.y - body.position.y;
           const distance = Math.sqrt(dx * dx + dy * dy);

           // Debug-Ausgabe der Mausposition und Distanz
           console.log(`Mouse position: (${mouse.x}, ${mouse.y}), Logo position: (${body.position.x}, ${body.position.y}), Distance: ${distance}`);

           if (distance < 100) {  // Wenn der Mauszeiger nah genug an einem Logo ist (100px)
               const impulseMagnitude = 0.1;  // Größe des Impulses
               const angle = Math.atan2(dy, dx);
               const impulse = {
                   x: Math.cos(angle) * impulseMagnitude * 2, // Verstärkter Impuls
                   y: Math.sin(angle) * impulseMagnitude * 2
               };

               // Stelle sicher, dass der Impuls in die richtige Richtung angewendet wird
               Body.applyForce(body, body.position, impulse);
           }
       });
   });

   // Animationsschleife
   function animationLoop() {
       Engine.update(engine, 1000 / 60); // Engine-Update mit 60 FPS

       // Canvas leeren
       ctx.clearRect(0, 0, canvas.width, canvas.height);

       // Logos zeichnen
       logoBodies.forEach((body, index) => {
           const img = images[index];
           if (img) {
               const x = body.position.x - 25;
               const y = body.position.y - 25;
               const angle = body.angle;

               ctx.save();
               ctx.translate(body.position.x, body.position.y);
               ctx.rotate(angle);
               ctx.drawImage(img, -25, -25, 50, 50);
               ctx.restore();
           }
       });

       requestAnimationFrame(animationLoop);
   }

   animationLoop();
});