import $ from "jquery";
import "./app2.css";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  console.log($li);
  const index = $li.index();
  console.log(index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

//进入页面的时候默认出现tab-bar 1被点击的状态
$tabBar.children().eq(0).trigger("click");
