(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-30c953d8"],
  {
    "0ca2": function (t, e, c) {
      "use strict";
      c("606d");
    },
    "606d": function (t, e, c) {},
    8173: function (t, e, c) {
      "use strict";
      c.r(e);
      var n = c("5530"),
        i =
          (c("b0c0"),
          c("a4d3"),
          c("e01a"),
          c("7db0"),
          c("d81d"),
          c("4d90"),
          c("caad"),
          c("2532"),
          c("7a23")),
        a = Object(i["R"])("data-v-21de5438");
      Object(i["w"])("data-v-21de5438");
      var s = { class: "px-5 py-4" },
        r = { class: "pb-5 d-flex" },
        l = { class: "flex-grow-1" },
        o = { class: "d-flex align-items-center" },
        u = Object(i["i"])(
          "div",
          { class: "MusicListTag rounded flex-center me-2" },
          "歌单",
          -1
        ),
        d = {
          class: "fs-3 fw-bold canSelect text-ellipsis",
          style: { "max-width": "400px" },
        },
        b = { class: "d-flex align-items-center mt-2" },
        p = { class: "me-3 cursor-pointer" },
        O = { class: "text-muted" },
        j = { class: "mt-3" },
        f = { class: "mt-3 mb-1" },
        m = Object(i["i"])("span", null, "标签：", -1),
        y = { class: "cursor-pointer" },
        v = { key: 0, class: "text-muted px-1" },
        h = { key: 0, class: "text-black-50" },
        k = { class: "mb-1" },
        w = { class: "me-3" },
        g = Object(i["h"])("歌曲："),
        x = { class: "text-black-50" },
        L = Object(i["h"])("播放："),
        I = { class: "text-black-50" },
        D = { class: "d-flex align-items-start flex-grow-1" },
        M = Object(i["i"])(
          "div",
          { class: "d-flex align-items-start" },
          " 简介： ",
          -1
        ),
        R = { class: "text-muted me-3" },
        C = { class: "me-3" };
      Object(i["u"])();
      var E = a(function (t, e, c, E, A, B) {
          var U,
            S,
            Y,
            q,
            J,
            T,
            W,
            z = Object(i["B"])("EditOutlinedIcon"),
            N = Object(i["B"])("PlayAllListBtn"),
            P = Object(i["B"])("DownArrowIcon"),
            _ = Object(i["B"])("HorizontalNav"),
            H = Object(i["B"])("LikedIcon"),
            $ = Object(i["B"])("HaveLikedIcon"),
            F = Object(i["B"])("DownloadMusicIcon"),
            Q = Object(i["B"])("MusicList"),
            Z = Object(i["B"])("CommonToast");
          return (
            Object(i["t"])(),
            Object(i["f"])(
              i["a"],
              null,
              [
                Object(i["i"])("div", s, [
                  Object(i["i"])("div", r, [
                    Object(i["i"])(
                      "img",
                      {
                        src: t.playListDetail.coverImgUrl,
                        width: "190",
                        height: "190",
                        class: "rounded-5 me-5 coverImg",
                        alt: "",
                      },
                      null,
                      8,
                      ["src"]
                    ),
                    Object(i["i"])("div", l, [
                      Object(i["i"])("div", o, [
                        u,
                        Object(i["i"])(
                          "div",
                          d,
                          Object(i["E"])(t.playListDetail.name),
                          1
                        ),
                        (null === (U = t.playListDetail) ||
                        void 0 === U ||
                        null === (S = U.creator) ||
                        void 0 === S
                          ? void 0
                          : S.userId) == t.userInfo.userId
                          ? (Object(i["t"])(),
                            Object(i["f"])(
                              z,
                              {
                                key: 0,
                                onClick:
                                  e[1] ||
                                  (e[1] = function (e) {
                                    return t.$router.push({
                                      path: "/container/updateMusicList",
                                      query: { id: t.playListDetail.id },
                                    });
                                  }),
                                onMouseover:
                                  e[2] ||
                                  (e[2] = function (e) {
                                    return (t.EditOutlinedIconActive = !0);
                                  }),
                                onMouseout:
                                  e[3] ||
                                  (e[3] = function (e) {
                                    return (t.EditOutlinedIconActive = !1);
                                  }),
                                color: t.EditOutlinedIconActive
                                  ? "#333"
                                  : "#9a9a9a",
                                class: "ms-3",
                                width: "18",
                                height: "18",
                              },
                              null,
                              8,
                              ["color"]
                            ))
                          : Object(i["g"])("", !0),
                      ]),
                      Object(i["i"])("div", b, [
                        Object(i["i"])(
                          "img",
                          {
                            width: "35",
                            class: "rounded-pill me-3 cursor-pointer",
                            src:
                              null === (Y = t.playListDetail.creator) ||
                              void 0 === Y
                                ? void 0
                                : Y.avatarUrl,
                            alt: "",
                          },
                          null,
                          8,
                          ["src"]
                        ),
                        Object(i["i"])(
                          "a",
                          p,
                          Object(i["E"])(
                            null === (q = t.playListDetail.creator) ||
                              void 0 === q
                              ? void 0
                              : q.nickname
                          ),
                          1
                        ),
                        Object(i["i"])(
                          "span",
                          O,
                          Object(i["E"])(
                            t.YYYYMMDD(t.playListDetail.createTime)
                          ) + "创建",
                          1
                        ),
                      ]),
                      Object(i["i"])("div", j, [
                        Object(i["i"])(
                          N,
                          { musicList: t.playListDetail.tracks },
                          null,
                          8,
                          ["musicList"]
                        ),
                      ]),
                      Object(i["i"])("div", f, [
                        m,
                        (Object(i["t"])(!0),
                        Object(i["f"])(
                          i["a"],
                          null,
                          Object(i["z"])(
                            t.playListDetail.tags,
                            function (e, c) {
                              return (
                                Object(i["t"])(),
                                Object(i["f"])(
                                  "span",
                                  { class: "colorA", key: c },
                                  [
                                    Object(i["i"])(
                                      "span",
                                      y,
                                      Object(i["E"])(e),
                                      1
                                    ),
                                    c != t.playListDetail.tags.length - 1
                                      ? (Object(i["t"])(),
                                        Object(i["f"])("span", v, "/"))
                                      : Object(i["g"])("", !0),
                                  ]
                                )
                              );
                            }
                          ),
                          128
                        )),
                        t.playListDetail.tags.length
                          ? Object(i["g"])("", !0)
                          : (Object(i["t"])(), Object(i["f"])("span", h, "无")),
                      ]),
                      Object(i["i"])("div", k, [
                        Object(i["i"])("span", w, [
                          g,
                          Object(i["i"])(
                            "span",
                            x,
                            Object(i["E"])(t.playListDetail.trackCount),
                            1
                          ),
                        ]),
                        Object(i["i"])("span", null, [
                          L,
                          Object(i["i"])(
                            "span",
                            I,
                            Object(i["E"])(
                              t.playCount(t.playListDetail.playCount)
                            ),
                            1
                          ),
                        ]),
                      ]),
                      Object(i["i"])(
                        "div",
                        Object(i["n"])(
                          { class: "d-flex justify-content-between" },
                          Object(n["a"])(
                            {},
                            t.playListDetail.description
                              ? { title: t.playListDetail.description }
                              : {}
                          )
                        ),
                        [
                          Object(i["i"])("span", D, [
                            M,
                            t.playListDetail.description ||
                            (null === (J = t.playListDetail) ||
                            void 0 === J ||
                            null === (T = J.creator) ||
                            void 0 === T
                              ? void 0
                              : T.userId) != t.userInfo.userId
                              ? (Object(i["t"])(),
                                Object(i["f"])(
                                  "div",
                                  {
                                    key: 1,
                                    ref: "descRef",
                                    class: [
                                      "canSelect text-black-50",
                                      {
                                        "text-ellipsis": !t.iconIsUp,
                                        "flex-grow-1": t.iconIsUp,
                                      },
                                    ],
                                    style: [
                                      { "word-break": "break-all" },
                                      { width: t.iconIsUp ? "0" : "400px" },
                                    ],
                                  },
                                  Object(i["E"])(
                                    t.playListDetail.description || "无"
                                  ),
                                  7
                                ))
                              : (Object(i["t"])(),
                                Object(i["f"])(
                                  "div",
                                  {
                                    key: 0,
                                    class: "colorA cursor-pointer",
                                    onClick:
                                      e[4] ||
                                      (e[4] = function (e) {
                                        return t.$router.push({
                                          path: "/container/updateMusicList",
                                          query: {
                                            id: t.playListDetail.id,
                                            desc: "true",
                                          },
                                        });
                                      }),
                                  },
                                  " 添加简介 "
                                )),
                          ]),
                          t.showDownArrowIcon
                            ? (Object(i["t"])(),
                              Object(i["f"])(
                                P,
                                {
                                  key: 0,
                                  onClick:
                                    e[5] ||
                                    (e[5] = function (e) {
                                      return (t.iconIsUp = !t.iconIsUp);
                                    }),
                                  class: { "rotate-180": t.iconIsUp },
                                  width: "14",
                                  height: "14",
                                  color: "#6c757d",
                                },
                                null,
                                8,
                                ["class"]
                              ))
                            : Object(i["g"])("", !0),
                        ],
                        16
                      ),
                    ]),
                  ]),
                  Object(i["i"])(
                    _,
                    {
                      navs: t.navs,
                      "onUpdate:navs":
                        e[6] ||
                        (e[6] = function (e) {
                          return (t.navs = e);
                        }),
                      class: "pb-2",
                    },
                    null,
                    8,
                    ["navs"]
                  ),
                  0 ===
                  t.navs.find(function (t) {
                    return t.active;
                  }).key
                    ? (Object(i["t"])(),
                      Object(i["f"])(
                        Q,
                        {
                          key: 0,
                          columns: t.columns,
                          dataSource:
                            null === (W = t.playListDetail.tracks) ||
                            void 0 === W
                              ? void 0
                              : W.map(function (t, e) {
                                  return Object(n["a"])(
                                    Object(n["a"])({}, t),
                                    {},
                                    { index: e }
                                  );
                                }),
                        },
                        {
                          toolBar: a(function (e) {
                            var c = e.id,
                              n = e.index,
                              a = e.name;
                            return [
                              Object(i["i"])(
                                "span",
                                R,
                                Object(i["E"])(String(n + 1).padStart(2, "0")),
                                1
                              ),
                              Object(i["i"])("span", C, [
                                t.likedMusicList.includes(c)
                                  ? (Object(i["t"])(),
                                    Object(i["f"])(
                                      $,
                                      {
                                        key: 1,
                                        class: "cursor-pointer",
                                        onClick: function (e) {
                                          return t.collectMusic(!1, c);
                                        },
                                        width: "15",
                                        height: "15",
                                      },
                                      null,
                                      8,
                                      ["onClick"]
                                    ))
                                  : (Object(i["t"])(),
                                    Object(i["f"])(
                                      H,
                                      {
                                        key: 0,
                                        class: "cursor-pointer",
                                        onClick: function (e) {
                                          return t.collectMusic(!0, c);
                                        },
                                        width: "15",
                                        height: "15",
                                      },
                                      null,
                                      8,
                                      ["onClick"]
                                    )),
                              ]),
                              Object(i["i"])(
                                F,
                                {
                                  onClick: function (e) {
                                    return t.handleDownloadMusic({
                                      id: c,
                                      name: a,
                                    });
                                  },
                                  class: "cursor-pointer",
                                  width: "15",
                                  height: "15",
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["columns", "dataSource"]
                      ))
                    : Object(i["g"])("", !0),
                ]),
                Object(i["i"])(Z, { ref: "toastRef" }, null, 512),
              ],
              64
            )
          );
        }),
        A = c("2909"),
        B = c("1da1"),
        U = (c("96cf"), c("a15b"), c("99af"), c("159b"), c("668f")),
        S = c("6c02"),
        Y = c("d4c0"),
        q = c("5502"),
        J = c("54ba"),
        T = c("3c08"),
        W = c("6e21"),
        z = c("61cd"),
        N = Object(i["j"])({
          components: { ArrowRightIcon: z["default"] },
          setup: function () {
            var t = Object(S["c"])(),
              e = Object(q["b"])(),
              c = Object(i["x"])({
                columns: [
                  {
                    title: "",
                    span: 1,
                    dataIndex: "toolBar",
                    slots: { customRender: "toolBar" },
                  },
                  { title: "音乐标题", span: 3, dataIndex: "name" },
                  {
                    title: "歌手",
                    span: 3,
                    dataIndex: "ar",
                    render: function (t) {
                      return t
                        .map(function (t) {
                          return t.name;
                        })
                        .join("、");
                    },
                  },
                  {
                    title: "专辑",
                    span: 2,
                    dataIndex: "al",
                    render: function (t) {
                      return t.name;
                    },
                  },
                  {
                    title: "时长",
                    span: 1,
                    dataIndex: "dt",
                    render: function (t) {
                      return Object(Y["g"])(t);
                    },
                  },
                ],
                playListDetail: {
                  coverImgUrl:
                    "https://p1.music.126.net/jWE3OEZUlwdz0ARvyQ9wWw==/109951165474121408.jpg",
                  tags: [],
                },
                navs: [
                  { title: "歌曲列表", active: !0, key: 0 },
                  {
                    title: Object(i["d"])(function () {
                      return "评论(".concat(
                        c.playListDetail.commentCount || 0,
                        ")"
                      );
                    }),
                    key: 1,
                  },
                  { title: "收藏者", key: 2 },
                ],
                likedMusicList: Object(i["d"])(function () {
                  return e.state.likedMusicList;
                }),
                toastRef: Object(i["y"])(null),
                EditOutlinedIconActive: !1,
                userInfo: Object(i["d"])(function () {
                  return e.state.userInfo;
                }),
                iconIsUp: !1,
                descRef: Object(i["y"])(null),
                showDownArrowIcon: !1,
              }),
              a = (function () {
                var a = Object(B["a"])(
                  regeneratorRuntime.mark(function a(s) {
                    return regeneratorRuntime.wrap(function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              Object(U["c"])({ id: s, t: Date.now() }).then(
                                (function () {
                                  var a = Object(B["a"])(
                                    regeneratorRuntime.mark(function a(s) {
                                      return regeneratorRuntime.wrap(function (
                                        a
                                      ) {
                                        while (1)
                                          switch ((a.prev = a.next)) {
                                            case 0:
                                              if (200 !== s.code) {
                                                a.next = 20;
                                                break;
                                              }
                                              return (
                                                (a.t0 = n["a"]),
                                                (a.t1 = Object(n["a"])(
                                                  {},
                                                  s.playlist
                                                )),
                                                (a.t2 = {}),
                                                (a.next = 6),
                                                Object(Y["b"])(
                                                  s.playlist.tracks
                                                )
                                              );
                                            case 6:
                                              if (
                                                ((a.t3 = a.sent),
                                                (a.t4 = { tracks: a.t3 }),
                                                (c.playListDetail = (0, a.t0)(
                                                  a.t1,
                                                  a.t2,
                                                  a.t4
                                                )),
                                                Object(i["o"])(function () {
                                                  c.showDownArrowIcon =
                                                    c.descRef.scrollWidth >
                                                    c.descRef.offsetWidth;
                                                }),
                                                "true" != t.query.immediate)
                                              ) {
                                                a.next = 16;
                                                break;
                                              }
                                              if (s.playlist.tracks.length) {
                                                a.next = 13;
                                                break;
                                              }
                                              return a.abrupt(
                                                "return",
                                                c.toastRef.warn(
                                                  "歌单暂无歌曲，请去添加一些吧~"
                                                )
                                              );
                                            case 13:
                                              e.commit(
                                                "changeCurrentMusicDetail",
                                                s.playlist.tracks[0]
                                              ),
                                                e.commit(
                                                  "changeCurrentPlayList",
                                                  [].concat(
                                                    Object(A["a"])(
                                                      JSON.parse(
                                                        JSON.stringify(
                                                          s.playlist.tracks
                                                        )
                                                      )
                                                    ),
                                                    Object(A["a"])(
                                                      e.state.currentPlayList
                                                    )
                                                  )
                                                ),
                                                e.dispatch(
                                                  "getCurrentMusicUrlInfo",
                                                  {
                                                    id: s.playlist.tracks[0].id,
                                                  }
                                                );
                                            case 16:
                                              if ("true" != t.query.download) {
                                                a.next = 20;
                                                break;
                                              }
                                              if (s.playlist.tracks.length) {
                                                a.next = 19;
                                                break;
                                              }
                                              return a.abrupt(
                                                "return",
                                                c.toastRef.warn(
                                                  "歌单暂无歌曲，请添加一些再来下载吧~"
                                                )
                                              );
                                            case 19:
                                              s.playlist.tracks.forEach(
                                                function (t, e) {
                                                  setTimeout(function () {
                                                    r({
                                                      id: t.id,
                                                      name: t.name,
                                                    });
                                                  }, 60 * e);
                                                }
                                              );
                                            case 20:
                                            case "end":
                                              return a.stop();
                                          }
                                      },
                                      a);
                                    })
                                  );
                                  return function (t) {
                                    return a.apply(this, arguments);
                                  };
                                })()
                              ),
                              (a.next = 3),
                              e.dispatch("getLikedMusicList")
                            );
                          case 3:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                );
                return function (t) {
                  return a.apply(this, arguments);
                };
              })(),
              s = function (t, n) {
                Object(J["g"])({ id: n, like: t }).then(
                  (function () {
                    var n = Object(B["a"])(
                      regeneratorRuntime.mark(function n(i) {
                        return regeneratorRuntime.wrap(function (n) {
                          while (1)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (200 !== i.code) {
                                  n.next = 4;
                                  break;
                                }
                                return (
                                  (n.next = 3), e.dispatch("getLikedMusicList")
                                );
                              case 3:
                                c.toastRef.success(
                                  t ? "已添加到我喜欢的音乐" : "取消喜欢成功"
                                );
                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              };
            Object(i["L"])(
              function () {
                return t.query;
              },
              function (t) {
                a(t.id);
              },
              { immediate: !0 }
            );
            var r = function (t) {
              var e = t.id,
                n = t.name;
              Object(W["c"])({ id: e }).then(function (t) {
                if (200 === t.code) {
                  var e = t.data;
                  e && e.length
                    ? Object(T["b"])(e[0].url, n)
                        .then(function () {
                          c.toastRef.success("已添加至下载");
                        })
                        .catch(function () {
                          c.toastRef.warn("下载失败");
                        })
                    : c.toastRef.warn("获取音乐链接失败");
                }
              });
            };
            return Object(n["a"])(
              Object(n["a"])({}, Object(i["F"])(c)),
              {},
              {
                YYYYMMDD: Y["a"],
                collectMusic: s,
                handleDownloadMusic: r,
                playCount: Y["f"],
              }
            );
          },
        }),
        P = (c("0ca2"), c("6b0d")),
        _ = c.n(P);
      const H = _()(N, [
        ["render", E],
        ["__scopeId", "data-v-21de5438"],
      ]);
      e["default"] = H;
    },
  },
]);
//# sourceMappingURL=chunk-30c953d8.e7db32eb.js.map
