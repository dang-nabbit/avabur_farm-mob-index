// ==UserScript==
// @name         Relics of Avabur - Farm mob index
// @namespace    https://github.com/dang-nabbit
// @version      0.1
// @description  Display the farm mob number in mob list for farm mobs.
// @author       dang
// @match        *avabur.com/game
// @include      *avabur.com/game
// @homepage    https://github.com/dang-nabbit/avabur_farm-mob-index
// @icon        https://www.google.com/s2/favicons?domain=https://avabur.com
// @downloadURL https://github.com/dang-nabbit/avabur_farm-mob-index/raw/master/avabur_farm-mob-index.user.js
// @grant none
// ==/UserScript==
let mobListObserver = new MutationObserver(function(ml) {
    for (var m of ml) {
        if (
            m.type === 'childList'
            && m.target.id === 'enemyList'
            && m.addedNodes
            && m.addedNodes[0]
            && m.addedNodes[0].tagName === 'OPTION'
        ) {
        // let enemies = $('#enemyList option');
        // enemies.each(
            // function(index, enemy){
                let enemy = m.addedNodes[0];
                if (Number(enemy.value) > 625) {
                    enemy.innerHTML += ' (' + enemy.value + ')'
                }
        //     }
        // );
        }
    }
});

mobListObserver.observe(
    document.getElementById('areaContent'),
    {
        childList: true,
        subtree: true
    }
);
