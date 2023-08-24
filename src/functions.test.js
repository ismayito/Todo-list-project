/**
 * @jest-environment jsdom
 */

import add from './modules/add.js'
import clear from './modules/clear.js'
import displayList from './modules/displayList.js'

describe ('testing add and remove functions', () => {

    test ('testing add fucntion', () => {
        displayList();
        const list = document.querySelectorAll('.displayList > .list-div');
        expect(list).toHaveLength(1);

    });

});