angular.module('starter.services', [])

.factory('Posts', function() {
    var posts = [{
        id: 0,
        EN: {
            title: "Sample Post",
            description: "On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should if waited common person little oh. Improved civility graceful sex few smallest screened settling. Likely active her warmly has. "
        },
        DE: {
            title: "Probe Post",
            description: "Auf ihm wiederholt unterschieden sich in erforderlich wanderte . Dann Mädchen ordentlich warum wusste noch Rose Ort. Außerdem Eigenschaft wir er Güte oh größte sein auffallend Lachen. In mir, dass er mit der Sammlung brüskieren Prinzipien Wohnungen. Hat Besucher Gesetz Angriffe behaupten, Sie sind selbst begeistert gemalt rufen. Contented Teilnahme an Kleinheit es oh ihr nicht bereit . Gedreht zugunsten Mann zwei, sondern Liebhaber. Suffer sollte, wenn gemeinsame Person wenig gewartet oh. Verbesserte Zivilität anmutigen Sex paar kleinste gescreent Einschwingzeit . Wahrscheinlich aktiv ihr hat warm."
        },
        AR: {
            title: "آخر عينة",
            description: "على ذلك اختلفت المتكررة تجولت المطلوبة . ثم أنيق فتاة لماذا لم يعرف بقعة ردة. وعلاوة على ذلك الممتلكات التي كان اللطف أعظم أن تكون ملفتة للنظر يا الضحك . في لي انه في جمع تحدي مشاعر الشقق المبادئ. لديه هجمات القانون الزوار تدعي أنت تدعو تلقاء متحمس رسمها. قانع صغر حضوره يا أيها راغبة . تحولت صالح رجلين لكن عشاق . تعاني ينبغي إذا انتظر الشخص العادي قليلا اه. تحسين الكياسة الجنس رشيقة قليلة أصغر تسوية فحص . نشط المرجح لها ديه بحرارة."
        }
    }];

    return {
        all: function() {
            return posts;
        },
        get: function(postId) {
            for (var i = 0; i < posts.length; i++) {
              if (posts[i].id === parseInt(postId)) {
                return posts[i];
              }
            }
            return null;
        }
    }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
