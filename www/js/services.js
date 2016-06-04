angular.module('starter.services', [])

.factory('Posts', function() {
    var posts = [{
        id: 2,
        content: {
            EN: {
                title: "Sailing Lessons",
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
        },
        offered_by: "Berlin Sailing Club",
        location: "Berlin",
        category: "Activities"
    },
    {
        id: 3,
        content: {
            EN: {
                title: "Professional Translation for Refugee Documents",
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
        },
        offered_by: "Afghan Translation Service",
        location: "Berlin",
        category: "Services"
    },
    {
        id: 4,
        content: {
            EN: {
                title: "Learn to Code",
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
        },
        offered_by: "CoderDojo",
        location: "Berlin",
        category: "Skills"

    },
    {
        id: 5,
        content: {
            EN: {
                title: "Trip to the Zoo",
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
        },
        offered_by: "Tierpark Berlin",
        location: "Berlin",
        category: "Activities"
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
        },
        languages: function(postId){
            var post = this.get(postId);
            return Object.keys(post.content);
        },
        categoryPosts: function(category){
            var res = [];
            for (var i = 0; i < posts.length; i++) {
              if (posts[i].category === category) {
                res.push(posts[i]);
              }
            }
            return res;
        },
        getCategoryNames: function(){
            categories = {};
            posts.forEach(function(post){
                categories[post.category] = 1;
            });
            return Object.keys(categories);
        },
        getPostsByCategory: function(){
            var categories = {};
            var names = this.getCategoryNames();
            for (var i = 0; i < names.length; i++) {
                categories[names[i]] = this.categoryPosts(names[i]);
            }
            return categories;
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
