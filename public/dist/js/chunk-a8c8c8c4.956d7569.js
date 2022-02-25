(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-a8c8c8c4"],
	{
		8173: function (t, e, c) {
			"use strict";
			c.r(e);
			var n = c("5530"),
				i = (c("b0c0"), c("a4d3"), c("e01a"), c("7db0"), c("d81d"), c("4d90"), c("caad"), c("2532"), c("7a23")),
				a = Object(i["R"])("data-v-15cb12a5");
			Object(i["w"])("data-v-15cb12a5");
			var s = { class: "px-5 py-4" },
				r = { class: "pb-5 d-flex" },
				l = { class: "flex-grow-1" },
				o = { class: "d-flex align-items-center" },
				u = Object(i["i"])("div", { class: "MusicListTag rounded flex-center me-3" }, "歌单", -1),
				d = { class: "fs-3 fw-bold canSelect text-ellipsis", style: { "max-width": "400px" } },
				b = { class: "d-flex align-items-center mt-2" },
				O = { class: "me-2 cursor-pointer" },
				j = { class: "text-muted" },
				p = { class: "mt-3" },
				f = { class: "mt-3 mb-1" },
				v = Object(i["i"])("span", null, "标签：", -1),
				m = { key: 0, class: "text-muted px-1" },
				h = { key: 0, class: "text-black-50" },
				k = { class: "mb-1" },
				y = { class: "me-3" },
				g = Object(i["h"])("歌曲："),
				w = { class: "text-black-50" },
				x = Object(i["h"])("播放："),
				I = { class: "text-black-50" },
				L = { class: "d-flex align-items-start flex-grow-1" },
				D = Object(i["i"])("div", { class: "d-flex align-items-start" }, "简介：", -1),
				M = Object(i["i"])("div", { class: "boderLine w-100 border-top ms-2 mb-4" }, null, -1),
				C = { class: "text-muted me-3" },
				E = { class: "me-3" },
				A = { key: 1, class: "d-flex flex-wrap w-100" },
				B = { class: "position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center" },
				U = { class: "ms-4 cursor-pointer text-ellipsis subscriberNickname" };
			Object(i["u"])();
			var R = a(function (t, e, c, R, S, Y) {
					var N,
						q,
						z,
						J,
						P,
						T,
						W,
						$,
						_ = Object(i["B"])("EditOutlinedIcon"),
						F = Object(i["B"])("PlayAllListBtn"),
						H = Object(i["B"])("DownArrowIcon"),
						Q = Object(i["B"])("HorizontalNav"),
						Z = Object(i["B"])("LikedIcon"),
						G = Object(i["B"])("HaveLikedIcon"),
						K = Object(i["B"])("DownloadMusicIcon"),
						V = Object(i["B"])("MusicList"),
						X = Object(i["B"])("customImg"),
						tt = Object(i["B"])("FemaleIcon"),
						et = Object(i["B"])("MaleIcon");
					return (
						Object(i["t"])(),
						Object(i["f"])("div", s, [
							Object(i["i"])("div", r, [
								Object(i["i"])(
									"img",
									{ src: t.playListDetail.coverImgUrl, width: "210", height: "210", class: "rounded-5 me-5 coverImg", alt: "" },
									null,
									8,
									["src"]
								),
								Object(i["i"])("div", l, [
									Object(i["i"])("div", o, [
										u,
										Object(i["i"])("div", d, Object(i["E"])(t.playListDetail.name), 1),
										(null === (N = t.playListDetail) || void 0 === N || null === (q = N.creator) || void 0 === q
											? void 0
											: q.userId) == t.userInfo.userId
											? (Object(i["t"])(),
											  Object(i["f"])(
													_,
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
														color: t.EditOutlinedIconActive ? "#333" : "#9a9a9a",
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
												class: "rounded-pill me-2 cursor-pointer",
												src: null === (z = t.playListDetail.creator) || void 0 === z ? void 0 : z.avatarUrl,
												alt: "",
											},
											null,
											8,
											["src"]
										),
										Object(i["i"])(
											"a",
											O,
											Object(i["E"])(null === (J = t.playListDetail.creator) || void 0 === J ? void 0 : J.nickname),
											1
										),
										Object(i["i"])("span", j, Object(i["E"])(t.YYYYMMDD(t.playListDetail.createTime)) + "创建", 1),
									]),
									Object(i["i"])("div", p, [Object(i["i"])(F, { musicList: t.playListDetail.tracks }, null, 8, ["musicList"])]),
									Object(i["i"])("div", f, [
										v,
										(Object(i["t"])(!0),
										Object(i["f"])(
											i["a"],
											null,
											Object(i["z"])(t.playListDetail.tags, function (e, c) {
												return (
													Object(i["t"])(),
													Object(i["f"])("span", { class: "colorA", key: c }, [
														Object(i["i"])(
															"span",
															{
																onClick: function (c) {
																	return t.$router.push({ name: "songList", query: { cat: e, hideTop: !0 } });
																},
																class: "cursor-pointer",
															},
															Object(i["E"])(e),
															9,
															["onClick"]
														),
														c != t.playListDetail.tags.length - 1
															? (Object(i["t"])(), Object(i["f"])("span", m, "/"))
															: Object(i["g"])("", !0),
													])
												);
											}),
											128
										)),
										t.playListDetail.tags.length ? Object(i["g"])("", !0) : (Object(i["t"])(), Object(i["f"])("span", h, "无")),
									]),
									Object(i["i"])("div", k, [
										Object(i["i"])("span", y, [g, Object(i["i"])("span", w, Object(i["E"])(t.playListDetail.trackCount), 1)]),
										Object(i["i"])("span", null, [
											x,
											Object(i["i"])("span", I, Object(i["E"])(t.playCount(t.playListDetail.playCount)), 1),
										]),
									]),
									Object(i["i"])(
										"div",
										Object(i["n"])(
											{ class: "d-flex justify-content-between" },
											Object(n["a"])({}, t.playListDetail.description ? { title: t.playListDetail.description } : {})
										),
										[
											Object(i["i"])("span", L, [
												D,
												t.playListDetail.description ||
												(null === (P = t.playListDetail) || void 0 === P || null === (T = P.creator) || void 0 === T
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
																	{ "text-ellipsis": !t.iconIsUp, "flex-grow-1": t.iconIsUp },
																],
																style: [{ "word-break": "break-all" }, { width: t.iconIsUp ? "0" : "400px" }],
															},
															Object(i["E"])(t.playListDetail.description || "无"),
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
																			query: { id: t.playListDetail.id, desc: "true" },
																		});
																	}),
															},
															" 添加简介 "
													  )),
											]),
											t.showDownArrowIcon
												? (Object(i["t"])(),
												  Object(i["f"])(
														H,
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
								Q,
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
							M,
							0 === t.currentActiveNavIndex
								? (Object(i["t"])(),
								  Object(i["f"])(
										i["a"],
										{ key: 0 },
										[
											0 ===
											(null ===
												(W = t.navs.find(function (t) {
													return t.active;
												})) || void 0 === W
												? void 0
												: W.key)
												? (Object(i["t"])(),
												  Object(i["f"])(
														V,
														{
															key: 0,
															startSpace: !1,
															columns: t.columns,
															dataSource:
																null === ($ = t.playListDetail.tracks) || void 0 === $
																	? void 0
																	: $.map(function (t, e) {
																			return Object(n["a"])(Object(n["a"])({}, t), {}, { index: e });
																	  }),
														},
														{
															toolBar: a(function (e) {
																var c = e.id,
																	n = e.index,
																	a = e.name;
																return [
																	Object(i["i"])("span", C, Object(i["E"])(String(n + 1).padStart(2, "0")), 1),
																	Object(i["i"])("span", E, [
																		t.likedMusicList.includes(c)
																			? (Object(i["t"])(),
																			  Object(i["f"])(
																					G,
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
																					Z,
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
																		K,
																		{
																			onClick: function (e) {
																				return t.handleDownloadMusic({ id: c, name: a });
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
										],
										64
								  ))
								: Object(i["g"])("", !0),
							2 === t.currentActiveNavIndex
								? (Object(i["t"])(),
								  Object(i["f"])("div", A, [
										(Object(i["t"])(!0),
										Object(i["f"])(
											i["a"],
											null,
											Object(i["z"])(t.subscribers, function (t, e) {
												return (
													Object(i["t"])(),
													Object(i["f"])("div", { key: e, class: "subscriber w-50 position-relative" }, [
														Object(i["i"])("div", B, [
															Object(i["i"])(
																X,
																{
																	class: "rounded-circle overflow-hidden cursor-pointer flex-shrink-0",
																	src: t.avatarUrl,
																	width: "100",
																	height: "100",
																},
																null,
																8,
																["src"]
															),
															Object(i["i"])("span", U, Object(i["E"])(t.nickname), 1),
															2 === t.gender
																? (Object(i["t"])(),
																  Object(i["f"])(tt, {
																		key: 0,
																		class: "ms-2 flex-shrink-0",
																		width: "20",
																		height: "20",
																  }))
																: Object(i["g"])("", !0),
															1 === t.gender
																? (Object(i["t"])(),
																  Object(i["f"])(et, {
																		key: 1,
																		class: "ms-2 flex-shrink-0",
																		width: "16.8",
																		height: "16.8",
																  }))
																: Object(i["g"])("", !0),
														]),
													])
												);
											}),
											128
										)),
								  ]))
								: Object(i["g"])("", !0),
						])
					);
				}),
				S = c("2909"),
				Y = c("1da1"),
				N = (c("96cf"), c("a15b"), c("99af"), c("159b"), c("668f")),
				q = c("6c02"),
				z = c("d4c0"),
				J = c("5502"),
				P = c("54ba"),
				T = c("3c08"),
				W = c("6e21"),
				$ = Object(i["j"])({
					setup: function () {
						var t = Object(q["c"])(),
							e = Object(J["b"])(),
							c = Object(i["x"])({
								columns: [
									{
										title: "",
										span: 2,
										dataIndex: "toolBar",
										slots: { customRender: "toolBar" },
										colItemStyle: { "text-align": "center" },
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
										span: 3,
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
											return Object(z["g"])(t);
										},
									},
								],
								playListDetail: { coverImgUrl: "https://p1.music.126.net/jWE3OEZUlwdz0ARvyQ9wWw==/109951165474121408.jpg", tags: [] },
								navs: [
									{ title: "歌曲列表", active: !0, key: 0 },
									{
										title: Object(i["d"])(function () {
											return "评论(".concat(c.playListDetail.commentCount || 0, ")");
										}),
										key: 1,
									},
									{ title: "收藏者", key: 2 },
								],
								likedMusicList: Object(i["d"])(function () {
									return e.state.likedMusicList;
								}),
								EditOutlinedIconActive: !1,
								userInfo: Object(i["d"])(function () {
									return e.state.userInfo;
								}),
								iconIsUp: !1,
								descRef: Object(i["y"])(null),
								showDownArrowIcon: !1,
								subscribers: [],
							}),
							a = Object(i["d"])(function () {
								var t;
								return (
									(null ===
										(t = c.navs
											.map(function (t, e) {
												return Object(n["a"])(Object(n["a"])({}, t), {}, { index: e });
											})
											.find(function (t) {
												return t.active;
											})) || void 0 === t
										? void 0
										: t.index) || 0
								);
							}),
							s = Object(i["k"])(),
							r = s.appContext.config.globalProperties.$toast,
							l = (function () {
								var a = Object(Y["a"])(
									regeneratorRuntime.mark(function a(s) {
										return regeneratorRuntime.wrap(function (a) {
											while (1)
												switch ((a.prev = a.next)) {
													case 0:
														return (
															Object(N["f"])({ id: s, t: Date.now() }).then(
																(function () {
																	var a = Object(Y["a"])(
																		regeneratorRuntime.mark(function a(s) {
																			return regeneratorRuntime.wrap(function (a) {
																				while (1)
																					switch ((a.prev = a.next)) {
																						case 0:
																							if (200 !== s.code) {
																								a.next = 20;
																								break;
																							}
																							return (
																								(a.t0 = n["a"]),
																								(a.t1 = Object(n["a"])({}, s.playlist)),
																								(a.t2 = {}),
																								(a.next = 6),
																								Object(z["b"])(s.playlist.tracks)
																							);
																						case 6:
																							if (
																								((a.t3 = a.sent),
																								(a.t4 = { tracks: a.t3 }),
																								(c.playListDetail = (0, a.t0)(a.t1, a.t2, a.t4)),
																								Object(i["o"])(function () {
																									c.showDownArrowIcon =
																										c.descRef.scrollWidth > c.descRef.offsetWidth;
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
																								r.warn("歌单暂无歌曲，请去添加一些吧~")
																							);
																						case 13:
																							e.commit(
																								"changeCurrentMusicDetail",
																								s.playlist.tracks[0]
																							),
																								e.commit(
																									"changeCurrentPlayList",
																									[].concat(
																										Object(S["a"])(
																											JSON.parse(
																												JSON.stringify(s.playlist.tracks)
																											)
																										),
																										Object(S["a"])(e.state.currentPlayList)
																									)
																								),
																								e.dispatch("getCurrentMusicUrlInfo", {
																									id: s.playlist.tracks[0].id,
																								});
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
																								r.warn("歌单暂无歌曲，请添加一些再来下载吧~")
																							);
																						case 19:
																							s.playlist.tracks.forEach(function (t, e) {
																								setTimeout(function () {
																									d({ id: t.id, name: t.name });
																								}, 60 * e);
																							});
																						case 20:
																						case "end":
																							return a.stop();
																					}
																			}, a);
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
							o = function (t, c) {
								Object(P["h"])({ id: c, like: t }).then(
									(function () {
										var c = Object(Y["a"])(
											regeneratorRuntime.mark(function c(n) {
												return regeneratorRuntime.wrap(function (c) {
													while (1)
														switch ((c.prev = c.next)) {
															case 0:
																if (200 !== n.code) {
																	c.next = 4;
																	break;
																}
																return (c.next = 3), e.dispatch("getLikedMusicList");
															case 3:
																r.success(t ? "已添加到我喜欢的音乐" : "取消喜欢成功");
															case 4:
															case "end":
																return c.stop();
														}
												}, c);
											})
										);
										return function (t) {
											return c.apply(this, arguments);
										};
									})()
								);
							},
							u = function (t) {
								Object(N["i"])({ id: t }).then(function (t) {
									200 === t.code && (c.subscribers = t.subscribers);
								});
							},
							d = function (t) {
								var e = t.id,
									c = t.name;
								Object(W["c"])({ id: e }).then(function (t) {
									if (200 === t.code) {
										var e = t.data;
										e && e.length
											? Object(T["c"])(e[0].url, c)
													.then(function () {
														r.success("已添加至下载");
													})
													.catch(function () {
														r.warn("下载失败");
													})
											: r.warn("获取音乐链接失败");
									}
								});
							};
						return (
							Object(i["L"])(
								function () {
									return t.query;
								},
								function (t) {
									l(t.id), u(t.id);
								},
								{ immediate: !0 }
							),
							Object(n["a"])(
								Object(n["a"])({}, Object(i["F"])(c)),
								{},
								{ YYYYMMDD: z["a"], collectMusic: o, handleDownloadMusic: d, playCount: z["f"], currentActiveNavIndex: a }
							)
						);
					},
				}),
				_ = (c("abee"), c("6b0d")),
				F = c.n(_);
			const H = F()($, [
				["render", R],
				["__scopeId", "data-v-15cb12a5"],
			]);
			e["default"] = H;
		},
		a1fa: function (t, e, c) {},
		abee: function (t, e, c) {
			"use strict";
			c("a1fa");
		},
	},
]);
//# sourceMappingURL=chunk-a8c8c8c4.956d7569.js.map
