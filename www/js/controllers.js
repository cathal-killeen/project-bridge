angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeCtrl', function($scope, $stateParams, Posts) {
    $scope.categories = Posts.getCategoryNames();
    $scope.posts = Posts.getPostsByCategory();

})
.controller('DiscoverCtrl', function($scope, $stateParams, Posts, $location, $state) {
    var posts = Posts.all();
    posts.forEach(function(post) {
        post.selected = post.content.EN;
    });

    $scope.posts = posts;

    $scope.expandPost = function(id){
        $state.go("tab.discover-detail", {'postId': id});
    }
})
.controller('CreateCtrl', function($scope, $stateParams) {
})
.controller('SettingsCtrl', function($scope, $stateParams) {
})
.controller('PostDetailCtrl', function($scope, $stateParams, Posts, $ionicPopover) {
    var post = Posts.get($stateParams.postId);
    $scope.content = post.content.EN;
    $scope.post = post;
    $scope.selected = 'EN';

    $scope.langs = Posts.languages($stateParams.postId);

    console.log($scope.langs);

    $scope.setLang = function(newLang) {
        $scope.selected = newLang;
        $scope.closePopover();
        $scope.content = post.content[$scope.selected];
    }

    $ionicPopover.fromTemplateUrl('templates/language-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });
});
