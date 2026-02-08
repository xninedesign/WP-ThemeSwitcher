document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggles = document.querySelectorAll('.ts-toggle');
    if (!toggles.length) return;

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    let theme = getCookie('ts_theme') || 'bright';
    body.setAttribute('data-colortheme', theme);
    toggles.forEach(t => t.checked = theme === 'dark');

    toggles.forEach(t => {
        t.addEventListener('change', () => {
            theme = t.checked ? 'dark' : 'bright';
            body.setAttribute('data-colortheme', theme);
            toggles.forEach(x => x.checked = t.checked);

            const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `ts_theme=${theme}; expires=${expires}; path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
        });
    });
});