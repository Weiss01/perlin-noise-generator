# perlin-noise-generator
just messing around with p5.js to randomly generate a endless moving terrain.

totally go check it out at: https://weiss01.github.io/perlin-noise-generator/

Enlarged the canvas which made the browser lag more and lowered the framerates (but it looks alot cooler) :(

p.s initially written the code in the p5 editor and it worked like a charm. Yet when I pasted the code in my atom editor and tested it out, the canvas was blank.
scratching my head for some time found out that the WEBGL property of the createCanvas function wasnt working and eventually found out that the p5.js version i was using
was a newer version compared to the one in the online editor. Downgraded to a previous version of p5.js and it finally worked, don't know if this is a bug or there is a newer
way of doing createShape. I'm probably just stupid :smolbrain:.

# libraries used
- p5.js by Processing Foundation https://p5js.org/
