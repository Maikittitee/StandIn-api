import * as doc from './model.js';


console.log(await doc.siam_paragon.save());
console.log(await doc.ct_music_addr.save());
console.log(await doc.promenade.save());

console.log(await doc.music_collection.save());
console.log(await doc.ct_music.save());
console.log(await doc.cin_guitar.save());

console.log(await doc.crafter.save());
console.log(await doc.cort.save());
console.log(await doc.ibanez.save());
console.log(await doc.taylor.save());

console.log(await doc.tmc035.save());
console.log(await doc.flow_oc.save());
console.log(await doc.guitar_mod1.save());
console.log(await doc.guitar_mod2.save());
console.log(await doc.guitar_mod3.save());

console.log(await doc.old_guitar.save());
console.log(await doc.great_one.save());

console.log(await doc.guitar_order.save());
console.log(await doc.queue_order.save());


process.exit(0);