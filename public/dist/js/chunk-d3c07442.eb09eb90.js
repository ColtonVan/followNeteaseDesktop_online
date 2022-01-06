(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-d3c07442"],
  {
    "17b3": function (e, t, c) {
      "use strict";
      c.r(t);
      c("caad"), c("2532"), c("d81d"), c("b0c0");
      var i = c("7a23"),
        n = Object(i["R"])("data-v-732714dc");
      Object(i["w"])("data-v-732714dc");
      var o = { class: "videoDetail row flex-center" },
        r = {
          class:
            "h-100 pb-5 layoutWidth overflow-scroll hideScrollBar d-flex justify-content-between",
        },
        l = { class: "leftArea pe-5" },
        a = Object(i["i"])("span", { class: "ms-3 fs-4" }, "视频详情", -1),
        s = { class: "mt-3 d-flex align-items-center justify-content-between" },
        d = { class: "d-flex align-items-center" },
        u = { class: "text-muted canSelect" },
        b = { class: "fs-4 fw-bold mt-4" },
        f = { class: "mt-3 text-muted opacity-50" },
        p = { class: "me-5" },
        j = { key: 0 },
        v = { class: "d-flex mt-4 flex-wrap" },
        O = { class: "mt-6 d-flex justify-content-start mt-4" },
        m = {
          class:
            "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
        },
        x = { class: "rightArea flex-grow-1 flex-shrink-0" },
        h = Object(i["i"])("div", { class: "fs-4 py-3" }, "相关推荐", -1),
        w = {
          class:
            "position-absolute top-0 end-0 pe-1 pt-1 d-flex align-items-center",
        },
        y = { class: "ms-1" },
        k = { class: "position-absolute bottom-0 end-0 pe-1 pb-1" },
        g = {
          class: "ms-3 recVideoInfo d-flex flex-column justify-content-center",
        },
        C = { class: "mb-2 fs-5" },
        D = { class: "text-muted opacity-75 text-ellipsis" },
        V = Object(i["i"])(
          "div",
          { class: "text-center fs-5" },
          "确定不再收藏该视频？",
          -1
        );
      Object(i["u"])();
      var I = n(function (e, t, c, I, M, B) {
          var E,
            T,
            U,
            R,
            L = Object(i["B"])("arrow-left-icon"),
            Y = Object(i["B"])("PraiseIcon"),
            F = Object(i["B"])("CollectBoxIcon"),
            P = Object(i["B"])("ShareIcon"),
            A = Object(i["B"])("hollow-play-icon"),
            S = Object(i["B"])("CommonModal"),
            _ = Object(i["B"])("CommonToast");
          return (
            Object(i["t"])(),
            Object(i["f"])(
              i["a"],
              null,
              [
                Object(i["i"])("div", o, [
                  Object(i["i"])("div", r, [
                    Object(i["i"])("div", l, [
                      Object(i["i"])(
                        "div",
                        {
                          class:
                            "d-flex align-items-center py-3 cursor-pointer",
                          onClick:
                            t[1] ||
                            (t[1] = function (t) {
                              return e.$router.back();
                            }),
                        },
                        [
                          Object(i["i"])(L, {
                            color: "#000000",
                            width: "18px",
                            height: "18px",
                          }),
                          a,
                        ]
                      ),
                      Object(i["i"])(
                        "video",
                        {
                          controls: "",
                          poster: e.videoDetail.coverUrl,
                          src:
                            e.videoUrls && e.videoUrls.length
                              ? e.videoUrls[0].url
                              : "",
                        },
                        null,
                        8,
                        ["poster", "src"]
                      ),
                      Object(i["i"])("div", s, [
                        Object(i["i"])("div", d, [
                          Object(i["i"])(
                            "div",
                            {
                              style: {
                                backgroundImage: 'url("'.concat(
                                  e.videoDetail.avatarUrl,
                                  '")'
                                ),
                              },
                              class: "videoAvatar rounded-pill me-3",
                            },
                            null,
                            4
                          ),
                          Object(i["i"])(
                            "div",
                            u,
                            Object(i["E"])(
                              null === (E = e.videoDetail) ||
                                void 0 === E ||
                                null === (T = E.creator) ||
                                void 0 === T
                                ? void 0
                                : T.nickname
                            ),
                            1
                          ),
                        ]),
                        e.userFollows
                          .map(function (e) {
                            return e.userId;
                          })
                          .includes(
                            null === (U = e.videoDetail) ||
                              void 0 === U ||
                              null === (R = U.creator) ||
                              void 0 === R
                              ? void 0
                              : R.userId
                          )
                          ? (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 0,
                                class:
                                  "haveFocus text-muted cursor-pointer text-dark px-4 py-2 rounded-pill flex-center",
                                onClick:
                                  t[2] ||
                                  (t[2] = function (t) {
                                    return e.followUser(!1);
                                  }),
                              },
                              " √已关注 "
                            ))
                          : (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 1,
                                class:
                                  "focus cursor-pointer text-dark px-4 py-2 rounded-pill flex-center",
                                onClick:
                                  t[3] ||
                                  (t[3] = function (t) {
                                    return e.followUser(!0);
                                  }),
                              },
                              " + 关注 "
                            )),
                      ]),
                      Object(i["i"])(
                        "div",
                        b,
                        Object(i["E"])(e.videoDetail.title),
                        1
                      ),
                      Object(i["i"])("div", f, [
                        Object(i["i"])(
                          "span",
                          p,
                          "发布：" +
                            Object(i["E"])(
                              e.YYYYMMDD(e.videoDetail.publishTime)
                            ),
                          1
                        ),
                        e.videoDetail.playCount
                          ? (Object(i["t"])(),
                            Object(i["f"])(
                              "span",
                              j,
                              "播放：" +
                                Object(i["E"])(
                                  e.playCount(e.videoDetail.playCount)
                                ) +
                                "次",
                              1
                            ))
                          : Object(i["g"])("", !0),
                      ]),
                      Object(i["i"])("div", v, [
                        (Object(i["t"])(!0),
                        Object(i["f"])(
                          i["a"],
                          null,
                          Object(i["z"])(
                            e.videoDetail.videoGroup,
                            function (e) {
                              return (
                                Object(i["t"])(),
                                Object(i["f"])(
                                  "div",
                                  {
                                    class: "groupTag rounded-pill px-3",
                                    key: e.id,
                                  },
                                  Object(i["E"])(e.name),
                                  1
                                )
                              );
                            }
                          ),
                          128
                        )),
                      ]),
                      Object(i["i"])("div", O, [
                        e.videoDetailInfo.liked
                          ? (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 0,
                                onClick:
                                  t[4] ||
                                  (t[4] = function (t) {
                                    return e.likeMV(!1);
                                  }),
                                class:
                                  "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
                              },
                              [
                                Object(i["i"])(Y, {
                                  width: "14px",
                                  height: "14px",
                                  class: "me-2 translate-y--10",
                                  color: "red",
                                }),
                                Object(i["h"])(
                                  "已赞(" +
                                    Object(i["E"])(
                                      e.playCount(e.videoDetail.praisedCount)
                                    ) +
                                    ") ",
                                  1
                                ),
                              ]
                            ))
                          : (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 1,
                                onClick:
                                  t[5] ||
                                  (t[5] = function (t) {
                                    return e.likeMV(!0);
                                  }),
                                class:
                                  "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
                              },
                              [
                                Object(i["i"])(Y, {
                                  width: "14px",
                                  height: "14px",
                                  class: "me-2 translate-y--10",
                                }),
                                Object(i["h"])(
                                  "赞(" +
                                    Object(i["E"])(
                                      e.playCount(e.videoDetail.praisedCount)
                                    ) +
                                    ") ",
                                  1
                                ),
                              ]
                            )),
                        e.collectedMVList
                          .map(function (e) {
                            return e.vid;
                          })
                          .includes(e.videoDetail.vid)
                          ? (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 2,
                                onClick:
                                  t[6] ||
                                  (t[6] = function (t) {
                                    return e.collectMV(!1);
                                  }),
                                class:
                                  "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
                              },
                              [
                                Object(i["i"])(F, {
                                  color: "red",
                                  width: "16px",
                                  height: "16px",
                                  class: "me-2",
                                }),
                                Object(i["h"])(
                                  "已收藏(" +
                                    Object(i["E"])(
                                      e.playCount(e.videoDetail.subscribeCount)
                                    ) +
                                    ") ",
                                  1
                                ),
                              ]
                            ))
                          : (Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: 3,
                                onClick:
                                  t[7] ||
                                  (t[7] = function (t) {
                                    return e.collectMV(!0);
                                  }),
                                class:
                                  "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
                              },
                              [
                                Object(i["i"])(F, {
                                  width: "16px",
                                  height: "16px",
                                  class: "me-2",
                                }),
                                Object(i["h"])(
                                  "收藏(" +
                                    Object(i["E"])(
                                      e.playCount(e.videoDetail.subscribeCount)
                                    ) +
                                    ") ",
                                  1
                                ),
                              ]
                            )),
                        Object(i["i"])("div", m, [
                          Object(i["i"])(P, {
                            width: "16px",
                            height: "16px",
                            class: "me-2",
                          }),
                          Object(i["h"])(
                            "分享(" +
                              Object(i["E"])(
                                e.playCount(e.videoDetail.shareCount)
                              ) +
                              ") ",
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    Object(i["i"])("div", x, [
                      h,
                      (Object(i["t"])(!0),
                      Object(i["f"])(
                        i["a"],
                        null,
                        Object(i["z"])(e.recommendVideoList, function (t, c) {
                          var n, o;
                          return (
                            Object(i["t"])(),
                            Object(i["f"])(
                              "div",
                              {
                                key: c,
                                class:
                                  "recVideoItem overflow-hidden rounded-3 mb-3 d-flex cursor-pointer",
                              },
                              [
                                Object(i["i"])(
                                  "div",
                                  {
                                    class:
                                      "recVideoCover bg-base text-white position-relative overflow-hidden rounded-3",
                                    style: {
                                      backgroundImage: "url(".concat(
                                        t.data.coverUrl,
                                        ")"
                                      ),
                                    },
                                  },
                                  [
                                    Object(i["i"])("div", w, [
                                      Object(i["i"])(A, {
                                        width: "11px",
                                        height: "11px",
                                        class: "translate-y--20",
                                      }),
                                      Object(i["i"])(
                                        "span",
                                        y,
                                        Object(i["E"])(
                                          e.playCount(t.data.praisedCount)
                                        ),
                                        1
                                      ),
                                    ]),
                                    Object(i["i"])(
                                      "div",
                                      k,
                                      Object(i["E"])(
                                        e.playTime(t.data.playTime)
                                      ),
                                      1
                                    ),
                                  ],
                                  4
                                ),
                                Object(i["i"])("div", g, [
                                  Object(i["i"])(
                                    "div",
                                    C,
                                    Object(i["E"])(t.data.title),
                                    1
                                  ),
                                  Object(i["i"])(
                                    "div",
                                    D,
                                    "by " +
                                      Object(i["E"])(
                                        null === (n = t.data) ||
                                          void 0 === n ||
                                          null === (o = n.creator) ||
                                          void 0 === o
                                          ? void 0
                                          : o.nickname
                                      ),
                                    1
                                  ),
                                ]),
                              ]
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ]),
                  Object(i["i"])(
                    S,
                    {
                      visible: e.modalVisible,
                      "onUpdate:visible":
                        t[8] ||
                        (t[8] = function (t) {
                          return (e.modalVisible = t);
                        }),
                      onConfirm: e.okCollection,
                    },
                    {
                      default: n(function () {
                        return [V];
                      }),
                      _: 1,
                    },
                    8,
                    ["visible", "onConfirm"]
                  ),
                ]),
                Object(i["i"])(_, { ref: "commonToast" }, null, 512),
              ],
              64
            )
          );
        }),
        M = c("5530"),
        B = c("1da1"),
        E = (c("96cf"), c("d3b7"), c("6c02")),
        T = c("c5e7"),
        U = c("17b9"),
        R = c("f727"),
        L = c("d4c0"),
        Y = Object(i["j"])({
          setup: function () {
            var e = Object(E["c"])(),
              t = Object(i["x"])({
                videoId: e.query.videoId,
                videoDetail: {},
                videoUrls: [],
                commonToast: null,
                userFollows: [],
                likedMVList: [],
                modalVisible: !1,
                collectedMVList: [],
                videoDetailInfo: {},
                recommendVideoList: [],
              }),
              c = function () {
                return new Promise(function (e, c) {
                  Object(T["h"])({ id: t.videoId }).then(
                    (function () {
                      var c = Object(B["a"])(
                        regeneratorRuntime.mark(function c(i) {
                          return regeneratorRuntime.wrap(function (c) {
                            while (1)
                              switch ((c.prev = c.next)) {
                                case 0:
                                  if (200 !== i.code) {
                                    c.next = 5;
                                    break;
                                  }
                                  return (
                                    (t.videoDetail = i.data),
                                    (c.next = 4),
                                    b(i.data.vid)
                                  );
                                case 4:
                                  e(null);
                                case 5:
                                case "end":
                                  return c.stop();
                              }
                          }, c);
                        })
                      );
                      return function (e) {
                        return c.apply(this, arguments);
                      };
                    })()
                  );
                });
              };
            c();
            var n = function () {
              Object(T["j"])({ id: t.videoId }).then(function (e) {
                200 === e.code && (t.videoUrls = e.urls);
              });
            };
            n();
            var o = function () {
              return new Promise(function (e, c) {
                Object(U["h"])().then(function (c) {
                  200 === c.code && ((t.userFollows = c.follow), e(null));
                });
              });
            };
            o();
            var r = function (e) {
                Object(R["a"])({
                  t: e ? 1 : 0,
                  id: t.videoDetail.creator.userId,
                }).then(
                  (function () {
                    var c = Object(B["a"])(
                      regeneratorRuntime.mark(function c(i) {
                        return regeneratorRuntime.wrap(function (c) {
                          while (1)
                            switch ((c.prev = c.next)) {
                              case 0:
                                if (200 !== i.code) {
                                  c.next = 4;
                                  break;
                                }
                                return (c.next = 3), o();
                              case 3:
                                t.commonToast.success(
                                  e ? "已关注" : "已取消关注"
                                );
                              case 4:
                              case "end":
                                return c.stop();
                            }
                        }, c);
                      })
                    );
                    return function (e) {
                      return c.apply(this, arguments);
                    };
                  })()
                );
              },
              l = function () {
                return new Promise(function (e, c) {
                  Object(T["f"])().then(function (c) {
                    200 === c.code && ((t.likedMVList = c.data.feeds), e(null));
                  });
                });
              };
            l();
            var a = function (e) {
                Object(T["k"])({ id: t.videoDetail.vid, t: e ? 1 : 0 }).then(
                  (function () {
                    var i = Object(B["a"])(
                      regeneratorRuntime.mark(function i(n) {
                        return regeneratorRuntime.wrap(function (i) {
                          while (1)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (200 !== n.code) {
                                  i.next = 8;
                                  break;
                                }
                                return (i.next = 3), l();
                              case 3:
                                return (i.next = 5), c();
                              case 5:
                                t.commonToast.success(e ? "已赞" : "已取消赞"),
                                  (i.next = 9);
                                break;
                              case 8:
                                t.commonToast.warn(n.msg);
                              case 9:
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
              },
              s = function () {
                Object(T["c"])().then(function (e) {
                  200 === e.code && (t.collectedMVList = e.data);
                });
              };
            s();
            var d = function () {
              Object(T["g"])().then(function (e) {
                200 === e.code && (t.recommendVideoList = e.datas);
              });
            };
            d();
            var u = function (e) {
                e || (t.modalVisible = !1),
                  Object(T["a"])({ t: e ? 1 : 0, id: t.videoDetail.vid }).then(
                    (function () {
                      var i = Object(B["a"])(
                        regeneratorRuntime.mark(function i(n) {
                          return regeneratorRuntime.wrap(function (i) {
                            while (1)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  if (200 !== n.code) {
                                    i.next = 6;
                                    break;
                                  }
                                  return (i.next = 3), s();
                                case 3:
                                  return (i.next = 5), c();
                                case 5:
                                  t.commonToast.success(
                                    e ? "已收藏" : "已取消收藏"
                                  );
                                case 6:
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
              },
              b = function (e) {
                return new Promise(function (c, i) {
                  Object(T["i"])({ vid: e }).then(function (e) {
                    200 === e.code && ((t.videoDetailInfo = e), c(null));
                  });
                });
              };
            return Object(M["a"])(
              Object(M["a"])({}, Object(i["F"])(t)),
              {},
              {
                followUser: r,
                playCount: L["f"],
                YYYYMMDD: L["a"],
                playTime: L["g"],
                likeMV: a,
                collectMV: u,
              }
            );
          },
        }),
        F = (c("e3bc"), c("6b0d")),
        P = c.n(F);
      const A = P()(Y, [
        ["render", I],
        ["__scopeId", "data-v-732714dc"],
      ]);
      t["default"] = A;
    },
    6981: function (e, t, c) {},
    e3bc: function (e, t, c) {
      "use strict";
      c("6981");
    },
  },
]);
//# sourceMappingURL=chunk-d3c07442.eb09eb90.js.map
