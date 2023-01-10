
let formatText = (text) => {
  return text.replace(/"/g,'″').replace(/'/g,'’').replace(/\.\.\./g,'…').replace(/\n/g,'\n\n');
}
let manifest = {
  name: 'Guild Ball',
  revision: '0.1.3',
  wip: false,
  game: 'Guild Ball',
  genre: 'fantasy',
  publisher: 'Steamforged Games',
  url: 'https://steamforged.com/blogs/resources',
  notes: 'This manifest is provided for the purposes of testing *Rosterizer* and is not intended for distribution.',
  manifest: ManifestData = {
    assetTaxonomy: {
      Players: {
        stats: {
          Reach: {
            statType: "numeric",
            value: null,
            group: "post",
            groupOrder: 2,
            statOrder: 1,
            format:'{v}″',
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          HP: {
            statType: "term",
            value: null,
            group: "post",
            groupOrder: 2,
            statOrder: 3,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          TAC: {
            statType: "numeric",
            value: null,
            statOrder: 2,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          ARM: {
            statType: "numeric",
            value: null,
            statOrder: 6,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          MOV: {
            statType: "term",
            statOrder: 1,
            visibility: "always",
            dynamic: false,
            tracked: false,
            value: null
          },
          KICK: {
            statType: "term",
            statOrder: 3,
            visibility: "always",
            dynamic: false,
            tracked: false,
            value: null
          },
          DEF: {
            statType: "numeric",
            format: "{v}+",
            value: null,
            statOrder: 5,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          INF: {
            statType: "term",
            statOrder: 7,
            visibility: "always",
            dynamic: false,
            tracked: false,
            value: null
          },
          recovery: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          hp: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          inf: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          infMax: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          jog: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          kickDice: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          kickDist: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          sprint: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          },
          base: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            dynamic: false,
            tracked: false
          }
        },
        keywords:{
          Keywords: [],
          Guild: [],
          Nationality: [],
          Race: [],
          Gender: [],
          'Play Position': [],
          'Team Position': [],
          Base: []
        },
        aspects: {
          "Lock Qty": true,
          Unique: true,
          'Group Traits': true,
        }
      },
      Captain: {
        templateClass: "Players"
      },
      Mascot: {
        templateClass: "Players"
      },
      'Character Plays': {
        stats: {
          CST:{
            statType: 'term',
            value: null,
            statOrder: 1,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          RNG:{
            statType: 'rank',
            ranks:{
              "1":{order:0},
              "2":{order:1},
              "3":{order:2},
              "4":{order:3},
              "6":{order:4},
              "8":{order:5},
              "10":{order:6},
              "S":{order:7},
              "P":{order:8},
            },
            value: null,
            statOrder: 2,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          ZON:{
            statType: 'rank',
            ranks:{
              "-": {order:0},
              "2″ pulse": {order:1},
              "3″ pulse": {order:2},
              "4″ pulse": {order:3},
              "6″ pulse": {order:4},
              "4″ aura": {order:5},
              "6″ aura": {order:6},
            },
            value: null,
            statOrder: 3,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          SUS:{
            statType: 'rank',
            ranks:{
              "𝘹":{order:0},
              "✓":{order:1},
            },
            value: null,
            statOrder: 4,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
          OPT:{
            statType: 'rank',
            ranks:{
              "𝘹":{order:0},
              "✓":{order:1},
            },
            value: null,
            statOrder: 5,
            visibility: "always",
            dynamic: false,
            tracked: false
          },
        }
      },
      'Character Traits': {},
      'Heroic Plays': {},
      'Legendary Plays': {},
    },
    assetCatalog: {
      "Roster§Team": {
        stats: {
          "Major Guild": {
            statType: "rank",
            label: "Guild",
            ranks: {"-": {order: 0}},
            visibility: "normal",
            dynamic: true,
            tracked: false,
            value: '-',
          },
          "Minor Guild": {
            statType: "rank",
            label: "Guild",
            ranks: {"-": {order: 0}},
            visibility: "normal",
            dynamic: true,
            tracked: false,
            value: '-',
          },
          League: {
            statType: "rank",
            value: 'Major',
            ranks: {"Minor": {order: 0},"Major": {order: 1}},
            statOrder: -1,
            visibility: "normal",
            dynamic: true,
            tracked: false
          },
          Captain: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            tracked: true,
            max: 1
          },
          Mascot: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            tracked: true,
            max: 1
          },
          Players: {
            statType: "numeric",
            value: 0,
            visibility: "hidden",
            tracked: true,
            max: 6
          },
        },
        aspects: {
          "Group Includes": true
        },
        rules: {
          majorGuild: {
            evals: [
              {
                paths: [["{self}","stats","League","value"]],
                value: "Major",
                operator: "AND",
                not: false,
                actionable: true
              }
            ],
            failState: "pass",
            evaluate: "AND",
            actions: [
              {
                paths: [["{self}","stats","Minor Guild","value"]],
                actionType: "set",
                value: "-",
                iterations: 1
              },
              {
                paths: [["{self}","stats","Minor Guild","visibility"]],
                actionType: "set",
                value: "hidden",
                iterations: 1
              }
            ]
          },
          minorGuild: {
            evals: [
              {
                paths: [["{self}","stats","League","value"]],
                value: "Minor",
                operator: "AND",
                not: false,
                actionable: true
              }
            ],
            failState: "pass",
            evaluate: "AND",
            actions: [
              {
                paths: [["{self}","stats","Major Guild","value"]],
                actionType: "set",
                value: "-",
                iterations: 1
              },
              {
                paths: [["{self}","stats","Major Guild","visibility"]],
                actionType: "set",
                value: "hidden",
                iterations: 1
              }
            ]
          }
        }
      }
    }
  }
};
window.data.Guilds.forEach((guild,i,a) => {
  if(guild.minor){
    let newOrder = Object.keys(manifest.manifest.assetCatalog["Roster§Team"].stats["Minor Guild"].ranks).length;
    manifest.manifest.assetCatalog["Roster§Team"].stats["Minor Guild"].ranks[guild.name] = {order: newOrder};
  }else{
    let newOrder = Object.keys(manifest.manifest.assetCatalog["Roster§Team"].stats["Major Guild"].ranks).length;
    manifest.manifest.assetCatalog["Roster§Team"].stats["Major Guild"].ranks[guild.name] = {order: newOrder};
  }
  delete a[i].minor;
  let guildRule = {
    evals: [
      {
        paths: [["{self}","stats",["Major Guild","Minor Guild"],"value"]],
        value: guild.name,
        operator: "OR",
        not: false,
        actionable: true
      }
    ],
    failState: "pass",
    evaluate: "AND",
    actions: []
  }
  let classOrder = ['Captain','Mascot','Players']
  let guildRoster = window.data.Models.filter(model => guild.roster.includes(model.id));
  guildRoster.forEach((player,i,a) => {
    let className = 'Players';
    let itemName = player.id.replace(/^s(.*)/,'$1 (seasoned)').replace(/^v(.*)/,'$1 (veteran)');
    if(player.captain) className = 'Captain';
    delete a[i].captain;
    
    if(player.mascot) className = 'Mascot';
    delete a[i].mascot;
    
    a[i].itemKey = className + '§' + itemName;
    a[i].color = guild.color;
  });
  guildRoster = guildRoster.sort((a,b) => {
    return classOrder.indexOf(a.itemKey.split('§')[0]) - classOrder.indexOf(b.itemKey.split('§')[0])
  });
  guildRoster.forEach((player,i,a) => {
    if(!player.benched){
      guildRule.actions.push({
        paths: [["{self}","allowed","items"]],
        actionType: "add",
        value: player.itemKey,
        iterations: 1
      });
    }
  });
  manifest.manifest.assetCatalog["Roster§Team"].rules[guild.name.toLowerCase() + 'Guild'] = guildRule;
  delete a[i]
});
window.data.Models.forEach((model,i,a) => {
  let itemName = model.id.replace(/^s(.*)/,'$1 (seasoned)').replace(/^v(.*)/,'$1 (veteran)');
  let modelItem = {
    stats: {
      HP: {
        value: model.hp + (model.recovery ? ` (${model.recovery})` : '')
      },
      Reach:{
        value: `${model.reach ? 2 : 1}`
      },
      MOV: {
        value: `${model.jog}″/${model.sprint}″`
      },
      TAC: {
        value: model.tac
      },
      KICK: {
        value: `${model.kickdice}/${model.kickdist}″`
      },
      DEF: {
        value: model.def
      },
      ARM: {
        value: model.arm
      },
      INF: {
        value: `${model.inf}/${model.infmax}`
      },
      hp: {
        value: model.hp
      },
      recovery: {
        value: model.recovery
      },
      inf: {
        value: model.inf
      },
      infMax: {
        value: model.infmax
      },
      jog: {
        value: model.jog
      },
      sprint: {
        value: model.sprint
      },
      kickDice: {
        value: model.kickdice
      },
      kickDist: {
        value: model.kickdist
      },
      base: {
        value: model.base
      }
    },
    keywords: {
      Keywords: [],
      Guild: [],
      Nationality: [],
      Race: [],
      Gender: [],
      'Play Position': [],
      'Team Position': [],
      Base: [`${model.base} mm`],
    }
  };
  delete a[i].hp;
  delete a[i].reach;
  delete a[i].recovery;
  delete a[i].inf;
  delete a[i].infmax;
  delete a[i].jog;
  delete a[i].sprint;
  delete a[i].kickdice;
  delete a[i].kickdist;
  delete a[i].tac;
  delete a[i].def;
  delete a[i].arm;
  delete a[i].base;

  modelItem.stats.name = {
    statType: 'term',
    visibility: 'hidden',
    value: model.name,
  }
  delete a[i].name;

  if(model.seasoned || model.veteran){
    modelItem.rules = {
      rename: {
        actions:[
          {
            paths: [["{self}","designation"]],
            actionType: "set",
            value: ["{self}","stats","name","value"],
            iterations: 1
          }
        ]
      }
    }
  }
  delete a[i].seasoned;
  delete a[i].veteran;

  if(model.gbcp) modelItem.keywords.Keywords.push('Community');
  delete a[i].gbcp;

  let types = model.types.split(/\n/);
  if(types[1]) modelItem.keywords['Play Position'] = types[1].split(/,[\040]*/).filter(keyword => keyword);
  if(types[2]) modelItem.keywords['Team Position'] = types[2].split(/,[\040]*/).filter(keyword => keyword);
  let characteristics = types[0].split(/,[\040]*/).filter(keyword => keyword);
  delete a[i].types;

  if(characteristics[0]) modelItem.keywords.Nationality.push(characteristics[0]);
  if(characteristics[1]) modelItem.keywords.Race.push(characteristics[1]);
  if(characteristics[2]) modelItem.keywords.Gender.push(characteristics[2]);
  if(model.guild1) modelItem.keywords.Guild.push(model.guild1);
  delete a[i].guild1;

  if(model.guild2) modelItem.keywords.Guild.push(model.guild2);
  delete a[i].guild2;

  if(model.character_plays){
    let characterPlays = model.character_plays.map(play => 'Character Plays§' + formatText(play));
    modelItem.assets = modelItem.assets || {};
    modelItem.assets.traits = modelItem.assets.traits || [];
    modelItem.assets.traits = [...modelItem.assets.traits,...characterPlays];
  }
  delete a[i].character_plays;

  if(model.character_traits){
    let characterTraits = model.character_traits.map(trait => {
      let traitName = trait.replace(/(.*)\s\[.*$/,'$1');
      let traitActive = window.data['Character Traits'].filter(character_trait => character_trait.name === traitName)[0].active;
      let traitKey = 'Character Traits§' + (traitActive ? '⌾ ' : '') + formatText(traitName);
      if(!trait.includes(' [')) return traitKey
      else{
        let traitValue = formatText(trait.replace(/.*\[(.*)\]$/,'$1'));
        let traitItem = {
          item: traitKey,
          stats:{
            trait: {
              statType: 'term',
              value: traitValue,
              label: ' '
            }
          }
        }
        return traitItem
      }
    });
    modelItem.assets = modelItem.assets || {};
    modelItem.assets.traits = modelItem.assets.traits || [];
    modelItem.assets.traits = [...modelItem.assets.traits,...characterTraits];
  }
  delete a[i].character_traits;

  if(model.heroic){
    let heroic = model.heroic.split('\n');
    let heroicName = formatText(heroic[0].replace(/(.*)\s\[.*$/,'$1'))
    let heroicItem = 'Heroic Plays§' + heroicName;
    manifest.manifest.assetCatalog[heroicItem] = {text: formatText(heroic[1])};
    if(model.heroic.split('\n')[0].includes(' [')){
      let heroicValue = formatText(model.heroic.split('\n')[0].replace(/.*\[(.*)\]$/,'$1'));
      manifest.manifest.assetCatalog[heroicItem].stats = {
        heroic: {
          statType: 'term',
          value: heroicValue,
          label: ' '
        }
      }
    }
    modelItem.assets = modelItem.assets || {};
    modelItem.assets.traits = modelItem.assets.traits || [];
    modelItem.assets.traits.push(heroicItem);
  }
  delete a[i].heroic;

  if(model.legendary){
    let legendary = model.legendary.split('\n');
    let legendaryName = formatText(legendary[0].replace(/(.*)\s\[.*$/,'$1'))
    let legendaryItem = 'Legendary Plays§' + legendaryName;
    manifest.manifest.assetCatalog[legendaryItem] = {text: formatText(legendary[1])};
    if(model.legendary.split('\n')[0].includes(' [')){
      let legendaryValue = formatText(model.legendary.split('\n')[0].replace(/.*\[(.*)\]$/,'$1'));
      manifest.manifest.assetCatalog[legendaryItem].stats = {
        legendary: {
          statType: 'term',
          value: legendaryValue,
          label: ' '
        }
      }
    }
    modelItem.assets = modelItem.assets || {};
    modelItem.assets.traits = modelItem.assets.traits || [];
    modelItem.assets.traits.push(legendaryItem);
  }
  delete a[i].legendary;

  let playbook = `<table>`
  model.playbook.forEach(row => {
    playbook += '<tr>'
    row.forEach(cell => {
      let momentous = cell?.includes(';M');
      let cellText = cell?.replace(';M','').replace('CP2','●●').replace('CP','●') || null;
      playbook += `<td style="${cell ? 'border-radius:50%;border: 2px solid black;' : 'background: transparent;border-color: transparent'}${momentous ? 'background-color:' + model.color + ';' : ''}${cell && !momentous ? 'background-color:#ddd;color:#222' : ''}">${cellText || '&nbsp;'}</td>`;
    });
    playbook += '</tr>';
  });
  playbook += '</table>';
  modelItem.text = playbook;
  delete a[i].playbook;
  delete a[i].color;

  if(model.dehcneb || model.benched){
    modelItem.stats.Swap = {
      visibility: 'always',
      statType: 'rank',
      dynamic: true,
      group: "post",
      groupOrder: 2,
      statOrder: 2,
      ranks: {
        0: {
          order: 0,
          icons: [
            "card-exchange"
          ]
        },
        1: {
          order: 1,
          icons: [
            "card-discard"
          ]
        }
      },
      value: 0,
    }
  }
  if(model.benched){
    modelItem.rules = modelItem.rules || {};
    modelItem.rules.swapped = {
      failState: "pass",
      evaluate: "AND",
      actions: [
        {
          paths: [
            [
              "{parent}",
              "allowed",
              "items"
            ]
          ],
          actionType: "add",
          value: model.itemKey,
          iterations: 1
        }
      ]
    }

  }
  if(model.dehcneb){
    let targetKey = window.data.Models.filter(Model => Model.id === model.dehcneb)[0].itemKey;
    modelItem.rules = modelItem.rules || {};
    modelItem.rules.swapper = {
      evals: [
        {
          paths: [
            [
              "{self}",
              "stats",
              "Swap",
              "value"
            ]
          ],
          value: "1",
          operator: "AND",
          not: false,
          actionable: true
        }
      ],
      failState: "pass",
      evaluate: "AND",
      order: 1,
      actions: [
        {
          paths: [
            [
              "{self}",
              "item"
            ]
          ],
          actionType: "set",
          value: targetKey,
          iterations: 1
        }
      ]
    }
  }
  delete a[i].benched;
  delete a[i].dehcneb;

  manifest.manifest.assetCatalog[a[i].itemKey] = modelItem;
  delete a[i].itemKey
});
window.data['Character Traits'].forEach((characterTrait,i,a) => {
  let traitName = (characterTrait.active ? '⌾ ' : '') + formatText(characterTrait.name)
  manifest.manifest.assetCatalog['Character Traits§' + traitName] = {
    text: formatText(characterTrait.text),
  }
  delete a[i]
});
window.data['Character Plays'].forEach((characterPlay,i,a) => {
  let text
  let zone
  if(characterPlay.text.match(/(^[0-9]" (pulse|aura))\. .*$/i)){
    zone = characterPlay.text.replace(/(^[0-9]" (pulse|aura))\. .*$/i,'$1');
    re = new RegExp(`${zone}\. (.*)$`);
    text = characterPlay.text.replace(re,'$1');
  }else{
    text = characterPlay.text
  }
  manifest.manifest.assetCatalog['Character Plays§' + formatText(characterPlay.name)] = {
    text: formatText(text),
    stats:{
      CST:{
        value: (characterPlay.CST + '').replace(',','/').replace('CP2','●●').replace('CP','●'),
      },
      RNG:{
        value: characterPlay.RNG,
      },
      ZON:{
        value: formatText(zone || '-'),
      },
      SUS:{
        value: characterPlay.SUS ? "✓" : "𝘹",
      },
      OPT:{
        value: characterPlay.OPT ? "✓" : "𝘹",
      },
    }
  }
  delete a[i]
});
// console.log(window.data);
let set = new Set()
console.log(manifest)