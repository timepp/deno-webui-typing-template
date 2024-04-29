import {api} from '../api.js'

async function main() {
    const app = document.createElement('div');
    const windows = await api.getWindows()
    for (const w of windows) {
        const div = document.createElement('div');
        div.innerHTML = `<b>${w.title}</b> (${w.className})`;
        app.appendChild(div);
    }
    document.body.appendChild(app);
}

document.addEventListener('DOMContentLoaded', function() {
    // FIXME: it looks like the websocket cannot be opened immediately
    setTimeout(main, 1000)
}, false);

