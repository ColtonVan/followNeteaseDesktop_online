(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0c7305"],
  {
    "500d": function (t, e, i) {
      "use strict";
      i.r(e);
      var c = i("7a23"),
        n = { class: "h-100 w-100 d-flex flex-column px-5 py-4" },
        a = {
          id: "discoverMusicList",
          class: "flex-grow-1 overflow-scroll hideScrollBar position-relative",
        },
        s = { class: "container" },
        l = { class: "row d-flex flex-column align-items-center" },
        o = { class: "col-xxl-10 containerCol" };
      function r(t, e, i, r, d, b) {
        var v = Object(c["B"])("HorizontalNav"),
          u = Object(c["B"])("router-view"),
          j = Object(c["B"])("CustomScrollBar");
        return (
          Object(c["t"])(),
          Object(c["f"])("div", n, [
            Object(c["i"])(
              v,
              {
                navs: t.navs,
                "onUpdate:navs":
                  e[1] ||
                  (e[1] = function (e) {
                    return (t.navs = e);
                  }),
              },
              null,
              8,
              ["navs"]
            ),
            Object(c["i"])("div", a, [
              Object(c["i"])("div", s, [
                Object(c["i"])("div", l, [
                  Object(c["i"])("div", o, [Object(c["i"])(u)]),
                ]),
              ]),
              t.isLoading
                ? Object(c["g"])("", !0)
                : (Object(c["t"])(),
                  Object(c["f"])(j, { key: 0, listId: "discoverMusicList" })),
            ]),
          ])
        );
      }
      var d = i("5530"),
        b = i("0613"),
        v = Object(c["j"])({
          setup: function () {
            var t = Object(c["x"])({
              navs: [
                { title: "个性推荐", active: !0, path: "personalizedRec" },
                { title: "歌单", path: "" },
                { title: "主播电台", path: "" },
                { title: "排行榜", path: "rankingList" },
                { title: "歌手", path: "" },
                { title: "最新音乐", path: "" },
              ],
              isLoading: Object(c["d"])(function () {
                return b["a"].state.isLoading;
              }),
            });
            return Object(d["a"])({}, Object(c["F"])(t));
          },
        }),
        u = i("6b0d"),
        j = i.n(u);
      const O = j()(v, [["render", r]]);
      e["default"] = O;
    },
  },
]);
//# sourceMappingURL=chunk-2d0c7305.6e256da7.js.map
