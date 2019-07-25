#! /usr/bin/env node

console.log('This script populates some categories, items, and item instances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var async = require('async')
var Category = require('./models/category');
var Item = require('./models/item');
var ItemInstance = require('./models/iteminstance');

let categories = [];
let items = [];
let iteminstances = [];

function categoryCreate(name, description, cb) {
  categorydetail = {name:name}
  if(description!=false) categorydetail.description = description;
  let category = new Category(categorydetail)

  category.save(function (err) {
    if (err) {
      cb(err, null)
      return;
    }
    console.log('New Category: ' + category);
    categories.push(category);
    cb(null, category)
  });
}

function itemCreate(name, description, category, cb) {
  itemdetail = {
    name: name,
    quantity: 0
  }
  itemdetail.category = category ? category : miscellaneous;
  if(description!=false) itemdetail.description = description;
  let item = new Item(itemdetail)

  category.save(function (err) {
    if (err) {
      cb(err, null)
      return;
    }
    console.log('New Item: ' + item);
    items.push(item);
    cb(null, item);
  });
}

function itemInstanceCreate(item, cb) {

  itemInstanceDetail = {item:item}

  let itemInstance = new ItemInstance(itemInstanceDetail);

  itemInstance.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Item Instance: ' + itemInstance);
    iteminstances.push(itemInstance);
    cb(null, itemInstance);
  });

}

function createCategories(cb) {
    async.series([
        function(callback) {
          categoryCreate('Weapons', false, callback);
        },
        function(callback) {
          categoryCreate('Armor', false, callback);
        },
        function(callback) {
          categoryCreate('Potions', false, callback);
        },
        function(callback) {
          categoryCreate('Food', false, callback);
        },
        function(callback) {
          categoryCreate('Relics', false, callback);
        },
        function(callback) {
          categoryCreate('Miscellaneous', false, callback)
        },
      ],
        // optional callback
    cb);
}

function createItems(cb) {
    async.series([
        function(callback) {
          itemCreate('Extinction Swiftblade', 
            "A long, thick, barbed blade made of mithril is held by a grip wrapped in expensive, onyx smooth leather.\
            With a single, sharp edge this weapon is ideal for both cleaving enemies as well as blocking their attacks.\
            \
            The blade has a barbed, curved cross-guard, offering plenty of protection to the owner's hands and thus his or her life. The cross-guard has a decorative eye on each side, marking the house it belongs to.\
            A fairly large pommel is decorated with precious gems, no expense is spared for this gorgeous weapon.\
            \
            The blade itself is engraved. Ancient symbols are engraved on the blade, but the blade will surely be decorated in battle.\
            This weapon is used by the royal guard. An exceptional weapon for exceptional fighters."
        , categories[0], callback);
        },
        function(callback) {
          itemCreate('Judgement Shortsword',
          "A small, narrow, jagged blade made of silver is held by a grip wrapped in high quality, brown pig leather.\
          Because its sharp on both its edges this weapon makes for the best choice for those looking for power and versatility.\
          \
          The blade is bare. No decorations or engraved patterns, the blade needs no decorations, it only needs to be strong and sharp.\
          This weapon is used by the royal guard. An exceptional weapon for exceptional fighters."
        , categories[0], callback);
        },
        function(callback) {
          itemCreate('Roaring Cleaver', false, categories[0], callback);
        },
        function(callback) {
          itemCreate('Death\'s Deflection', "This durable round shield, made from adamantite, offers great protection, especially against stabbing attacks and arrows and bolts. \
            A true work of mastery, as this shield was forged by fury dragonkin in an arcane workshop. \
            \
            The shield's edges are emblazoned with broad metal lining and have been decorated with intricate metal patterns. \
            Its center is garnished with symmetrical paintwork and emblems of victory. \
            \
            It's clear this shield has seen better, peaceful times. Scores and scratches made by who knows what leave trophies \
            of defeating death, but one this is for sure: there's no stopping now."
        , categories[1], callback);
        },
        function(callback) {
          itemCreate('Elixir of Intellect', "Brewed with:\
            - 4 tablespoons of Blood Shiso\
            - 1 dash of Orange Weed\
            - 3 bits of Drake Savory\
            - 1 batch of Wild Borage\
            - 1 batch of Water Quassia\
            \
            Brainchild of The Quarterblood Prince, the Elixer of Intellect, whenst brewed masterfully, \
            will grant the consumer mental faculties within the relm of the divine. \
            Consume at your own risk -- you may have never heard of The Quarterblood Prince before, \
            yet surely you have heard of the savage and lonesome Halfmad Prince? Whilst the potion wears off \
            gained knowledge will never be forgotten. Godly knowledge best stay with the Gods.....\
            \
            but don't hesitate to buy a flask if you have the gold"
            , categories[2], callback);
        },
        function(callback) {
          itemCreate('Oven-Baked Ice Rat', 
            "Desperate times call for desperate measures."
            ,categories[3], callback)
        },
        function(callback) {
          itemCreate('The Heavenly Prospect Amulet', false, categories[4], callback)
        },
      ],
        // optional callback
    cb);
}

function createItemInstances(cb) {
      async.series([
        function(callback) {
          itemInstanceCreate(items[0], callback);
        },
        function(callback) {
          itemInstanceCreate(items[0], callback);
        },
        function(callback) {
          itemInstanceCreate(items[1], callback);
        },
        function(callback) {
          itemInstanceCreate(items[3], callback);
        },
        function(callback) {
          itemInstanceCreate(items[3], callback);
        },
        function(callback) {
          itemInstanceCreate(items[3], callback)
        },
      ],
        // optional callback
    cb);
}






async.series([
    createCategories,
    createItems,
    createItemInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('ITEMInstances: '+iteminstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




