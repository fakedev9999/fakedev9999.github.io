/* Content stays in files/home.md; only its presentation is organized here. */
async function loadProfile() {
  const main = document.querySelector('main');
  try {
    const response = await fetch('files/home.md', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Profile unavailable');
    const template = document.createElement('template');
    template.innerHTML = marked.parse(await response.text());
    const intro = document.createElement('section');
    intro.className = 'intro';
    intro.setAttribute('aria-label', 'Introduction');
    const nav = document.createElement('nav');
    nav.className = 'index-nav';
    nav.setAttribute('aria-label', 'Profile sections');
    const fragment = document.createDocumentFragment();
    fragment.append(intro, nav);
    let body = intro;
    let index = 0;
    for (const node of [...template.content.children]) {
      if (node.tagName === 'H2') {
        index += 1;
        const section = document.createElement('section');
        section.className = 'profile-section';
        const slug = node.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
        node.id = slug;
        section.setAttribute('aria-labelledby', slug);
        const number = document.createElement('span');
        number.className = 'section-number';
        number.textContent = String(index).padStart(2, '0');
        number.setAttribute('aria-hidden', 'true');
        const label = document.createElement('div');
        label.className = 'section-label';
        label.append(number, node);
        body = document.createElement('div');
        body.className = 'section-body';
        section.append(label, body);
        fragment.append(section);
        const link = document.createElement('a');
        link.href = '#' + slug;
        link.textContent = node.textContent;
        nav.append(link);
      } else {
        if (node.tagName === 'P' && node.textContent.startsWith('last edited:')) node.className = 'last-edited';
        body.append(node);
      }
    }
    main.replaceChildren(fragment);
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  } catch {
    main.innerHTML = '<p role="alert">The profile could not be loaded. <a href="./">Try again</a> or <a href="files/home.md">read the original profile</a>.</p>';
  } finally {
    main.setAttribute('aria-busy', 'false');
  }
}
loadProfile();
