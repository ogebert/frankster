import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    /* change to ul, li */
    const ul = document.createElement('ul');
    [...block.children].forEach((row) => {
        const li = document.createElement('li');
        li.innerHTML = row.innerHTML;
        [...li.children].forEach((div) => {
            const h2 = div.querySelector('h2');
            const picture = div.querySelector('picture');
            li.innerHTML = '__' + (div.querySelector('h2') ? div.querySelector('h2').innerHTML : 'b');
            //h2.className = 'revuhero-headline';
            //picture.className = 'revuhero-picture';
            //if (div.children.length === 1 && div.querySelector('picture')) div.className = 'revuhero-image';
            //else div.className = 'revuhero-body';
        });
        ul.append(li);
    });
    ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    block.textContent = '';
    block.append(ul);
}
