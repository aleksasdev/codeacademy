import Table from './table.js';
import Element from './element.js';

new Element({outputContainer:document.querySelector("body"),type:"h1",text:"Task 3"}).render();

const table = new Table({
   outputContainer:document.querySelector("body"),
   columns: 2,
   rows: 3,
   attributes: {class: "task3-table"}
});
table.addEntryHead({text: 'Head'});
table.addEntryHead({text: 'Head2'});
table.addEntryBody({text: 'Body1'});
table.addEntryBody({text: 'Body2'});
table.addEntryBody({text: 'Body3444'});
table.addEntryBody({text: 'Body3445555555554'});
table.render();

