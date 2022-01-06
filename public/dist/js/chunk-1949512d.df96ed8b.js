(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1949512d"],
  {
    "533e": function (e, t, n) {
      "use strict";
      n.r(t);
      n("d81d");
      var c = n("7a23"),
        i = Object(c["R"])("data-v-2ec3e4b0");
      Object(c["w"])("data-v-2ec3e4b0");
      var o = { class: "px-5 py-4" },
        a = { class: "dailyRec ps-3 h-100 overflow-scroll hideScrollBar" },
        l = { class: "m-5 d-flex" },
        r = { class: "position-relative calendarBox" },
        s = {
          class:
            "dateText fw-bold position-absolute start-50 fs-1 translate-middle",
        },
        d = Object(c["i"])(
          "div",
          { class: "ms-5 d-flex flex-column justify-content-center" },
          [
            Object(c["i"])("div", { class: "fs-1" }, "每日歌曲推荐"),
            Object(c["i"])(
              "div",
              { class: "text-muted" },
              "根据你的音乐口味生成，每天6:00更新"
            ),
          ],
          -1
        ),
        u = { class: "d-flex mb-4 ms-5" },
        b = Object(c["i"])("span", { class: "ms-2" }, "收藏全部", -1),
        j = { class: "border-top mb-5" },
        f = { class: "d-flex justify-content-center" },
        O = { class: "d-flex justify-content-center" };
      Object(c["u"])();
      var m = i(function (e, t, n, m, v, g) {
          var p = Object(c["B"])("CalendarIcon"),
            h = Object(c["B"])("PlayAllListBtn"),
            w = Object(c["B"])("CollectListIcon"),
            y = Object(c["B"])("MusicList"),
            k = Object(c["B"])("CommonModal"),
            x = Object(c["B"])("CommonToast"),
            S = Object(c["B"])("CollectionListModal");
          return (
            Object(c["t"])(),
            Object(c["f"])(
              c["a"],
              null,
              [
                Object(c["i"])("div", o, [
                  Object(c["i"])("div", a, [
                    Object(c["i"])("div", l, [
                      Object(c["i"])("div", r, [
                        Object(c["i"])(
                          p,
                          { width: "90", height: "90", color: e.calendarColor },
                          null,
                          8,
                          ["color"]
                        ),
                        Object(c["i"])(
                          "div",
                          s,
                          Object(c["E"])(new e.window.Date().getDate()),
                          1
                        ),
                      ]),
                      d,
                    ]),
                    Object(c["i"])("div", u, [
                      Object(c["i"])(h, { musicList: e.dailySongs }, null, 8, [
                        "musicList",
                      ]),
                      Object(c["i"])(
                        "div",
                        {
                          onClick:
                            t[1] ||
                            (t[1] = function (t) {
                              return (e.colVisible = !0);
                            }),
                          class:
                            "collectList ms-3 rounded-pill px-5 border d-flex align-items-center cursor-pointer hover-btn",
                        },
                        [Object(c["i"])(w, { width: "20", height: "20" }), b]
                      ),
                    ]),
                    Object(c["i"])("div", j, [
                      Object(c["i"])(
                        y,
                        { columns: e.columns, dataSource: e.dailySongs },
                        null,
                        8,
                        ["columns", "dataSource"]
                      ),
                    ]),
                  ]),
                ]),
                Object(c["i"])(
                  k,
                  {
                    visible: e.downloadModalVisible,
                    "onUpdate:visible":
                      t[4] ||
                      (t[4] = function (t) {
                        return (e.downloadModalVisible = t);
                      }),
                  },
                  {
                    default: i(function () {
                      return [
                        Object(c["i"])("div", f, [
                          (Object(c["t"])(!0),
                          Object(c["f"])(
                            c["a"],
                            null,
                            Object(c["z"])(e.songsUrlObjArr, function (t, n) {
                              return (
                                Object(c["t"])(),
                                Object(c["f"])(
                                  "div",
                                  {
                                    key: n,
                                    class:
                                      "d-flex align-items-center cursor-pointer",
                                  },
                                  [
                                    Object(c["O"])(
                                      Object(c["i"])(
                                        "input",
                                        {
                                          type: "radio",
                                          name: t.level,
                                          id: t.level,
                                          "onUpdate:modelValue": function (e) {
                                            return (t.checked = e);
                                          },
                                          checked: t.checked,
                                        },
                                        null,
                                        8,
                                        [
                                          "name",
                                          "id",
                                          "onUpdate:modelValue",
                                          "checked",
                                        ]
                                      ),
                                      [[c["I"], t.checked]]
                                    ),
                                    Object(c["i"])(
                                      "label",
                                      { class: "ms-3", for: t.level },
                                      Object(c["E"])(e.musicQuality(t.level)),
                                      9,
                                      ["for"]
                                    ),
                                  ]
                                )
                              );
                            }),
                            128
                          )),
                        ]),
                      ];
                    }),
                    buttons: i(function () {
                      return [
                        Object(c["i"])("div", O, [
                          Object(c["i"])(
                            "div",
                            {
                              onClick:
                                t[2] ||
                                (t[2] = function () {
                                  return (
                                    e.confirmDownload &&
                                    e.confirmDownload.apply(e, arguments)
                                  );
                                }),
                              class:
                                "okBtn cursor-pointer d-flex justify-content-center align-items-center",
                            },
                            " 确定 "
                          ),
                          Object(c["i"])(
                            "div",
                            {
                              onClick:
                                t[3] ||
                                (t[3] = function (t) {
                                  return (e.downloadModalVisible = !1);
                                }),
                              class:
                                "okBtn cancelBtn ms-4 rounded-pill text-muted border cursor-pointer d-flex justify-content-center align-items-center",
                            },
                            " 取消 "
                          ),
                        ]),
                      ];
                    }),
                    _: 1,
                  },
                  8,
                  ["visible"]
                ),
                Object(c["i"])(x, { ref: "commonToast" }, null, 512),
                Object(c["i"])(
                  S,
                  {
                    tracks: e.dailySongs.map(function (e) {
                      return e.id;
                    }),
                    visible: e.colVisible,
                    "onUpdate:visible":
                      t[5] ||
                      (t[5] = function (t) {
                        return (e.colVisible = t);
                      }),
                    defaultListName: e.defaultListName,
                  },
                  null,
                  8,
                  ["tracks", "visible", "defaultListName"]
                ),
              ],
              64
            )
          );
        }),
        v = n("3835"),
        g = n("5530"),
        p = n("2909"),
        h = n("1da1"),
        w =
          (n("96cf"),
          n("a15b"),
          n("b0c0"),
          n("99af"),
          n("4d90"),
          n("d3b7"),
          n("7db0"),
          n("3ca3"),
          n("ddb0"),
          n("54ba")),
        y = n("17b9"),
        k = n("d4c0"),
        x = n("5502"),
        S = n("3c08"),
        L = n("6c02"),
        M = Object(c["j"])({
          setup: function () {
            var e = Object(x["b"])(),
              t = Object(L["c"])(),
              n = Object(c["x"])({
                dailySongs: [],
                downloadModalVisible: !1,
                songsUrlObjArr: [],
                currentMusicObj: {},
                likeList: [],
                commonToast: Object(c["y"])(null),
                colVisible: !1,
                columns: [
                  { title: "音乐标题", dataIndex: "name" },
                  {
                    title: "歌手",
                    dataIndex: "ar",
                    render: function (e) {
                      return e
                        .map(function (e) {
                          return e.name;
                        })
                        .join("、");
                    },
                  },
                  {
                    title: "专辑",
                    dataIndex: "al",
                    render: function (e) {
                      return e.name;
                    },
                  },
                  {
                    title: "时长",
                    dataIndex: "dt",
                    render: function (e) {
                      return Object(k["g"])(e);
                    },
                  },
                ],
                defaultListName: "每日歌曲推荐("
                  .concat(new Date().getFullYear(), ".")
                  .concat(
                    String(new Date().getMonth() + 1).padStart(2, "0"),
                    "."
                  )
                  .concat(String(new Date().getDate()).padStart(2, "0"), ")"),
              });
            Object(c["L"])(
              function () {
                return n.songsUrlObjArr;
              },
              function (e) {
                console.log(e);
              }
            );
            var i = function () {
                return new Promise(function (c, i) {
                  Object(w["e"])({ t: Date.now() }).then(
                    (function () {
                      var i = Object(h["a"])(
                        regeneratorRuntime.mark(function i(o) {
                          var a, l, r;
                          return regeneratorRuntime.wrap(function (i) {
                            while (1)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  if (200 !== o.code) {
                                    i.next = 7;
                                    break;
                                  }
                                  return (
                                    (i.next = 3),
                                    Object(k["b"])(o.data.dailySongs)
                                  );
                                case 3:
                                  (n.dailySongs = i.sent),
                                    (r = t.query.immediate),
                                    r &&
                                      null !== o &&
                                      void 0 !== o &&
                                      null !== (a = o.data) &&
                                      void 0 !== a &&
                                      null !== (l = a.dailySongs) &&
                                      void 0 !== l &&
                                      l.length &&
                                      (e.commit(
                                        "changeCurrentMusicDetail",
                                        o.data.dailySongs[0]
                                      ),
                                      e.commit(
                                        "changeCurrentPlayList",
                                        [].concat(
                                          Object(p["a"])(
                                            JSON.parse(
                                              JSON.stringify(o.data.dailySongs)
                                            )
                                          ),
                                          Object(p["a"])(
                                            e.state.currentPlayList
                                          )
                                        )
                                      ),
                                      e.dispatch("getCurrentMusicUrlInfo", {
                                        id: o.data.dailySongs[0].id,
                                      })),
                                    c(o);
                                case 7:
                                case "end":
                                  return i.stop();
                              }
                          }, i);
                        })
                      );
                      return function (e) {
                        return i.apply(this, arguments);
                      };
                    })()
                  );
                });
              },
              o = function () {
                return new Promise(function (e, t) {
                  Object(y["e"])().then(function (t) {
                    200 === t.code && ((n.likeList = t.ids), e(t));
                  });
                });
              },
              a = function () {
                i(), o();
              };
            a();
            var l = Object(c["d"])(function () {
                return "primaryTheme" === e.getters.getTheme
                  ? "#ec4141"
                  : "darkTheme" === e.getters.getTheme
                  ? "#212529"
                  : "#50c475";
              }),
              r = function (e) {
                (n.currentMusicObj = e),
                  Object(w["f"])(e.id).then(function (e) {
                    200 === e.code &&
                      (1 === e.data.length
                        ? (n.songsUrlObjArr = e.data.map(function (e) {
                            return Object(g["a"])(
                              Object(g["a"])({}, e),
                              {},
                              { checked: !0 }
                            );
                          }))
                        : (n.songsUrlObjArr = e.data.map(function (e) {
                            return Object(g["a"])(
                              Object(g["a"])({}, e),
                              {},
                              { checked: !1 }
                            );
                          })),
                      (n.downloadModalVisible = !0));
                  });
              },
              s = function () {
                console.log(n.songsUrlObjArr);
                var e = n.songsUrlObjArr.find(function (e) {
                  return e.checked;
                });
                e && Object(S["b"])(e.url, n.currentMusicObj.name);
              },
              d = function (e, t) {
                Object(w["g"])({ id: e.id, like: t }).then(function (e) {
                  200 === e.code &&
                    Promise.all([i(), o()]).then(function (e) {
                      var c = Object(v["a"])(e, 2),
                        i = c[0],
                        o = c[1];
                      200 === i.code &&
                        200 === o.code &&
                        n.commonToast.success(
                          t ? "已添加到我喜欢的音乐" : "取消喜欢成功"
                        );
                    });
                });
              };
            return Object(g["a"])(
              Object(g["a"])({}, Object(c["F"])(n)),
              {},
              {
                playTime: k["g"],
                calendarColor: l,
                window: window,
                tryDownloadMusic: r,
                musicQuality: k["e"],
                confirmDownload: s,
                collectMusic: d,
              }
            );
          },
        }),
        B = (n("619f"), n("6b0d")),
        C = n.n(B);
      const D = C()(M, [
        ["render", m],
        ["__scopeId", "data-v-2ec3e4b0"],
      ]);
      t["default"] = D;
    },
    "619f": function (e, t, n) {
      "use strict";
      n("8994");
    },
    8994: function (e, t, n) {},
  },
]);
//# sourceMappingURL=chunk-1949512d.df96ed8b.js.map
