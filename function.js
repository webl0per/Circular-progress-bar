/*                                 <Webloper/>
        Youtube : https://www.youtube.com/channel/UCDKMHO1qpGzejK76XxL_2AA
        Instagram : https://www.instagram.com/webl0per/
        Twitter : https://twitter.com/webl0per
        Github : https://github.com/webl0per?tab=repositories
        CodePen : https://codepen.io/webloper 
        Website : https://webloper.ml
*/
function CircleBar(e) {
  $(e)
    .circleProgress({ fill: { color: "#00EAFF" } })
    .on("circle-animation-progress", function(_event, _progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(parseInt(100 * stepValue)) + "%");
    });
}
CircleBar(".round");
