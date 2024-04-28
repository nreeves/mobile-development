async function typewriter(text, elementId, waitAfter, collapse_after=true) {
    var n = 0,
        isTag = false
    addText = "";
    const el = document.getElementById(elementId);

    const wait = () => new Promise(r => setTimeout(r, waitAfter));
    const nowait = () => new Promise(r => r());

    const render = () => el.innerHTML = (text.slice(0, n + 1) + addText);

    const cursor = document.createElement('span');
    cursor.id = "blink";

    el.style.setProperty("margin-right", "-10px");
    el.style.setProperty("--cursor-visibility", "visible");
    while (n < text.length) {
        if (text.charAt(n + 1) === "<") isTag = true;
        if (text.charAt(n + 1) === ">") isTag = false;

        if (isTag) {
            n++;
            continue;
        }

        requestAnimationFrame(render);

        if (waitAfter === 0) {
            await nowait();
        } else {
            await wait();
        }

        n++;
    }
    if (collapse_after) {
        el.style.setProperty("--cursor-visibility", "collapse");
    }
}

function parseDelay(d) {
    const parsed = parseInt(d, 10);
    if (isNaN(parsed)) return 0;
    return parsed;
}

const ps1Delay = parseDelay("15"),
    stdoutDelay = parseDelay("15"),
    commandDelay = parseDelay("15");
const typeeffetct = async () => {
    await typewriter("\u003cstrong\u003e\u003cspan id=\u0027user\u0027\u003e@nreeves.em\u003c\/span\u003e\u003cspan id=\u0027terminal\u0027\u003e:\u003c\/span\u003e\u003cspan id=\u0027dir\u0027\u003e~\/\u003c\/span\u003e\u003c\/strong\u003e\u003cspan id=\u0027terminal\u0027\u003e$\u003c\/span\u003e", "ps1_01", ps1Delay); 
    await typewriter("\u003cspan id=\u0027terminal\u0027\u003ecd About\u003c\/span\u003e", "cd", commandDelay);
    await typewriter("\u003cstrong\u003e\u003cspan id=\u0027user\u0027\u003e@nreeves.em\u003c\/span\u003e\u003cspan id=\u0027terminal\u0027\u003e:\u003c\/span\u003e\u003cspan id=\u0027dir\u0027\u003e~\/About\u003c\/span\u003e\u003c\/strong\u003e\u003cspan id=\u0027terminal\u0027\u003e$ more About.txt\u003c\/span\u003e", "ps1_02", ps1Delay); 
   
    await typewriter("\u003cspan id=\u0027terminal\u0027\u003e\u003cbr\u003e\       My name is Nathan,\u003cbr\u003e\n          \u003cbr\u003e\n\u003cbr\u003e\n  I'm a Software Engineer\u003c\/\u003e \u003c\/p\u003e\n\u003c\/span\u003e", "std_out_01", stdoutDelay);
    await typewriter("\u003cstrong\u003e\u003cspan id=\u0027user\u0027\u003e@nreeves.em\u003c\/span\u003e\u003cspan id=\u0027terminal\u0027\u003e:\u003c\/span\u003e\u003cspan id=\u0027dir\u0027\u003e~\/About\u003c\/span\u003e\u003c\/strong\u003e\u003cspan id=\u0027terminal\u0027\u003e$\u003c\/span\u003e", "ps1_03", ps1Delay); 
    await typewriter("\u003cspan id=\u0027terminal\u0027\u003els .\/Links\/\u003c\/span\u003e", "ls", commandDelay);
    await typewriter("\u003cspan id=\u0027terminal\u0027\u003e\u003cspan id=\u0027terminal\u0027\u003e\u003cspan id=\u0027terminal\u0027\u003e\u003cstrong\u003e\u003cspan id=\u0027dir\u0027\u003e.\/Links\/\u003c\/span\u003e\u003c\/strong\u003e\u003cbr\u003e├── \u003ca href=\u0027http:\/\www.instagram.com/nreeves.em\u0027\u003eInstagram\u003c\/a\u003e\u003c\/span\u003e\u003cbr\u003e├── \u003ca href=\u0027https://github.com/nreeves\u0027\u003eGithub\u003c\/a\u003e\u003c\/span\u003e\u003cbr\u003e└── \u003ca href=\u0027www.linkedin.com/in/reevesnate\u0027\u003eLinkedIn\u003c\/a\u003e\u003c\/span\u003e", "std_out_02", stdoutDelay);
    await typewriter("\u003cstrong\u003e\u003cspan id=\u0027user\u0027\u003e@nreeves.em\u003c\/span\u003e\u003cspan id=\u0027terminal\u0027\u003e:\u003c\/span\u003e\u003cspan id=\u0027dir\u0027\u003e~\/Links\u003c\/span\u003e\u003c\/strong\u003e\u003cspan id=\u0027terminal\u0027\u003e$\u003c\/span\u003e ", "ps1_04", ps1Delay, false);
    return;
}

typeeffetct()