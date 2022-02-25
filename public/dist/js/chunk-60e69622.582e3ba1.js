(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-60e69622"],
	{
		"12d1": function (t, e, n) {},
		"7f2d": function (t, e, n) {
			"use strict";
			n.d(e, "a", function () {
				return i;
			}),
				n.d(e, "c", function () {
					return a;
				}),
				n.d(e, "b", function () {
					return o;
				});
			var c = n("b32d"),
				i = function (t) {
					return c["a"].get("/album", { params: { id: t } });
				},
				a = function (t) {
					var e = t.id,
						n = t.t;
					return c["a"].get("/album/sub", { params: { id: e, t: void 0 === n ? 1 : n, timeStamp: Date.now() } });
				},
				o = function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { limit: 999, offset: 0 },
						e = t.limit,
						n = t.offset;
					return c["a"].get("/album/sublist", { params: { limit: e, offset: n, timeStamp: Date.now() } });
				};
		},
		"999d": function (t, e, n) {
			"use strict";
			n.r(e);
			var c = n("5530"),
				i = (n("b0c0"), n("7db0"), n("d81d"), n("4d90"), n("caad"), n("2532"), n("ac1f"), n("1276"), n("a4d3"), n("e01a"), n("7a23")),
				a = Object(i["R"])("data-v-14fa592a");
			Object(i["w"])("data-v-14fa592a");
			var o = { class: "px-5 py-4" },
				l = { class: "pb-5 d-flex" },
				s = { class: "flex-grow-1 ms-2" },
				r = { class: "d-flex align-items-center" },
				u = Object(i["i"])("div", { class: "MusicListTag rounded flex-center me-3" }, "专辑", -1),
				d = { class: "fs-3 fw-bold canSelect text-ellipsis", style: { "max-width": "400px" } },
				b = { class: "mt-4 d-flex" },
				f = Object(i["h"])("已收藏"),
				j = Object(i["h"])("收藏"),
				m = Object(i["h"])("下载全部"),
				O = { class: "mt-4 mb-1" },
				v = Object(i["i"])("span", null, "标签：", -1),
				p = { key: 0, class: "text-muted px-2" },
				h = { key: 0, class: "text-black-50" },
				k = { class: "mt-2" },
				g = Object(i["i"])("span", null, "时间：", -1),
				x = Object(i["i"])("div", { class: "boderLine w-100 border-top ms-2 mb-4" }, null, -1),
				w = { class: "text-muted me-3" },
				y = { class: "me-3" },
				C = Object(i["i"])("div", { class: "fw-bold fs-5 mb-4" }, "专辑介绍", -1),
				M = { class: "text-muted mb-4" },
				I = { key: 0, class: "text-center text-muted" },
				L = { key: 1, class: "text-center" };
			Object(i["u"])();
			var B = a(function (t, e, n, B, S, A) {
					var _,
						D,
						R,
						V,
						Y,
						T = Object(i["B"])("AlbumCover"),
						E = Object(i["B"])("PlayAllListBtn"),
						N = Object(i["B"])("CustomButton"),
						z = Object(i["B"])("HorizontalNav"),
						$ = Object(i["B"])("LikedIcon"),
						q = Object(i["B"])("HaveLikedIcon"),
						J = Object(i["B"])("DownloadMusicIcon"),
						U = Object(i["B"])("MusicList"),
						H = Object(i["B"])("CommonModal");
					return (
						Object(i["t"])(),
						Object(i["f"])("div", o, [
							Object(i["i"])("div", l, [
								Object(i["i"])(T, { src: t.albumInfo.picUrl || "", size: "210", bodyClass: "rounded-5", class: "me-5" }, null, 8, [
									"src",
								]),
								Object(i["i"])("div", s, [
									Object(i["i"])("div", r, [u, Object(i["i"])("div", d, Object(i["E"])(t.albumInfo.name), 1)]),
									Object(i["i"])("div", b, [
										Object(i["i"])(E, { musicList: t.songs }, null, 8, ["musicList"]),
										t.collected
											? (Object(i["t"])(),
											  Object(i["f"])(
													N,
													{
														key: 0,
														class: "ms-2",
														icon: "collected",
														onClick:
															e[1] ||
															(e[1] = function (e) {
																return t.judgeIsCollected(0);
															}),
													},
													{
														default: a(function () {
															return [f];
														}),
														_: 1,
													}
											  ))
											: (Object(i["t"])(),
											  Object(i["f"])(
													N,
													{
														key: 1,
														class: "ms-2",
														icon: "collect",
														onClick:
															e[2] ||
															(e[2] = function (e) {
																return t.judgeIsCollected(1);
															}),
													},
													{
														default: a(function () {
															return [j];
														}),
														_: 1,
													}
											  )),
										Object(i["i"])(
											N,
											{ onClick: t.downloadAll, class: "ms-2", icon: "download" },
											{
												default: a(function () {
													return [m];
												}),
												_: 1,
											},
											8,
											["onClick"]
										),
									]),
									Object(i["i"])("div", O, [
										v,
										(Object(i["t"])(!0),
										Object(i["f"])(
											i["a"],
											null,
											Object(i["z"])((null === (_ = t.albumInfo) || void 0 === _ ? void 0 : _.artists) || [], function (e, n) {
												var c, a;
												return (
													Object(i["t"])(),
													Object(i["f"])("span", { class: "colorA", key: n }, [
														Object(i["i"])(
															"span",
															{
																onClick: function (n) {
																	return t.$route.query.artistId == e.id
																		? t.$router.back()
																		: t.$router.push({ name: "artistDetail", query: { id: e.id } });
																},
																class: "cursor-pointer",
															},
															Object(i["E"])(e.name),
															9,
															["onClick"]
														),
														n !=
														(null === (c = t.albumInfo) || void 0 === c || null === (a = c.artists) || void 0 === a
															? void 0
															: a.length) -
															1
															? (Object(i["t"])(), Object(i["f"])("span", p, "/"))
															: Object(i["g"])("", !0),
													])
												);
											}),
											128
										)),
										null !== (D = t.albumInfo) && void 0 !== D && null !== (R = D.artists) && void 0 !== R && R.length
											? Object(i["g"])("", !0)
											: (Object(i["t"])(), Object(i["f"])("span", h, "无")),
									]),
									Object(i["i"])("div", k, [
										g,
										Object(i["i"])("span", null, Object(i["E"])(t.YYYYMMDD(t.albumInfo.publishTime)), 1),
									]),
								]),
							]),
							Object(i["i"])(
								z,
								{
									navs: t.navs,
									"onUpdate:navs":
										e[3] ||
										(e[3] = function (e) {
											return (t.navs = e);
										}),
								},
								null,
								8,
								["navs"]
							),
							x,
							0 === t.currentActiveNavIndex
								? (Object(i["t"])(),
								  Object(i["f"])(
										i["a"],
										{ key: 0 },
										[
											0 ===
											(null ===
												(V = t.navs.find(function (t) {
													return t.active;
												})) || void 0 === V
												? void 0
												: V.key)
												? (Object(i["t"])(),
												  Object(i["f"])(
														U,
														{
															key: 0,
															startSpace: !1,
															columns: t.columns,
															dataSource:
																null === (Y = t.songs) || void 0 === Y
																	? void 0
																	: Y.map(function (t, e) {
																			return Object(c["a"])(Object(c["a"])({}, t), {}, { index: e });
																	  }),
														},
														{
															toolBar: a(function (e) {
																var n = e.id,
																	c = e.index,
																	a = e.name;
																return [
																	Object(i["i"])("span", w, Object(i["E"])(String(c + 1).padStart(2, "0")), 1),
																	Object(i["i"])("span", y, [
																		t.likedMusicList.includes(n)
																			? (Object(i["t"])(),
																			  Object(i["f"])(
																					q,
																					{
																						key: 1,
																						class: "cursor-pointer",
																						onClick: function (e) {
																							return t.collectMusic(!1, n);
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
																					$,
																					{
																						key: 0,
																						class: "cursor-pointer",
																						onClick: function (e) {
																							return t.collectMusic(!0, n);
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
																		J,
																		{
																			onClick: function (e) {
																				return t.handleDownloadMusic({ id: n, name: a });
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
								  Object(i["f"])(
										i["a"],
										{ key: 1 },
										[
											C,
											Object(i["i"])("div", M, [
												(Object(i["t"])(!0),
												Object(i["f"])(
													i["a"],
													null,
													Object(i["z"])(t.albumInfo.description.split("\n"), function (t, e) {
														return Object(i["t"])(), Object(i["f"])("p", { key: e }, Object(i["E"])(t), 1);
													}),
													128
												)),
											]),
										],
										64
								  ))
								: Object(i["g"])("", !0),
							Object(i["i"])(
								H,
								{
									title: "专辑收藏成功",
									cancelable: !0,
									onCancel: t.handleModalCancel,
									onConfirm: t.handleModalConfirm,
									visible: t.commonModalVisible,
									"onUpdate:visible":
										e[4] ||
										(e[4] = function (e) {
											return (t.commonModalVisible = e);
										}),
								},
								{
									default: a(function () {
										return [
											t.collectType
												? (Object(i["t"])(), Object(i["f"])("div", I, "可以在“我的音乐-我的收藏”中查看"))
												: (Object(i["t"])(), Object(i["f"])("div", L, "确定不再收藏该专辑？")),
										];
									}),
									_: 1,
								},
								8,
								["onCancel", "onConfirm", "visible"]
							),
						])
					);
				}),
				S = n("1da1"),
				A = (n("96cf"), n("a15b"), n("159b"), n("7f2d")),
				_ = n("54ba"),
				D = n("6e21"),
				R = n("0613"),
				V = n("3c08"),
				Y = n("d4c0"),
				T = n("6c02"),
				E = "__confirmedCollect__",
				N = Object(i["j"])({
					setup: function () {
						var t = Object(T["c"])(),
							e = Object(i["x"])({
								songs: [],
								albumInfo: {},
								navs: [
									{ title: "歌曲列表", key: 0, active: !0 },
									{ title: "评论（0）", key: 1 },
									{ title: "专辑详情", key: 2 },
								],
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
											return Object(Y["g"])(t);
										},
									},
								],
								likedMusicList: Object(i["d"])(function () {
									return R["a"].state.likedMusicList;
								}),
								subAlbumList: [],
								commonModalVisible: !1,
								collectType: 0,
							}),
							n = Object(i["d"])(function () {
								var t;
								return (
									(null ===
										(t = e.navs
											.map(function (t, e) {
												return Object(c["a"])(Object(c["a"])({}, t), {}, { index: e });
											})
											.find(function (t) {
												return t.active;
											})) || void 0 === t
										? void 0
										: t.index) || 0
								);
							}),
							a = Object(i["k"])(),
							o = a.appContext.config.globalProperties.$toast,
							l = t.query.id,
							s = Object(i["d"])(function () {
								return e.subAlbumList.some(function (t) {
									return t.id == l;
								});
							}),
							r = function () {
								Object(A["a"])(l).then(
									(function () {
										var t = Object(S["a"])(
											regeneratorRuntime.mark(function t(n) {
												var c, i;
												return regeneratorRuntime.wrap(function (t) {
													while (1)
														switch ((t.prev = t.next)) {
															case 0:
																if (200 !== n.code) {
																	t.next = 6;
																	break;
																}
																return (
																	(e.navs[1].title = "评论（".concat(
																		(null === (c = n.album) ||
																		void 0 === c ||
																		null === (i = c.info) ||
																		void 0 === i
																			? void 0
																			: i.commentCount) || 0,
																		"）"
																	)),
																	(e.albumInfo = n.album),
																	(t.next = 5),
																	Object(Y["b"])(n.songs)
																);
															case 5:
																e.songs = t.sent;
															case 6:
															case "end":
																return t.stop();
														}
												}, t);
											})
										);
										return function (e) {
											return t.apply(this, arguments);
										};
									})()
								);
							};
						r();
						var u = function (t) {
								var e = t.id,
									n = t.name;
								Object(D["c"])({ id: e }).then(function (t) {
									if (200 === t.code) {
										var e = t.data;
										e && e.length
											? Object(V["c"])(e[0].url, n)
													.then(function () {
														o.success("已添加至下载");
													})
													.catch(function () {
														o.warn("下载失败");
													})
											: o.warn("获取音乐链接失败");
									}
								});
							},
							d = function (t, e) {
								Object(_["h"])({ id: e, like: t }).then(
									(function () {
										var e = Object(S["a"])(
											regeneratorRuntime.mark(function e(n) {
												return regeneratorRuntime.wrap(function (e) {
													while (1)
														switch ((e.prev = e.next)) {
															case 0:
																if (200 !== n.code) {
																	e.next = 4;
																	break;
																}
																return (e.next = 3), R["a"].dispatch("getLikedMusicList");
															case 3:
																o.success(t ? "已添加到我喜欢的音乐" : "取消喜欢成功");
															case 4:
															case "end":
																return e.stop();
														}
												}, e);
											})
										);
										return function (t) {
											return e.apply(this, arguments);
										};
									})()
								);
							},
							b = function () {
								if (!e.songs.length) return o.warn("歌单暂无歌曲，请添加一些再来下载吧~");
								e.songs.forEach(function (t, e) {
									setTimeout(function () {
										u({ id: t.id, name: t.name });
									}, 60 * e);
								});
							},
							f = function () {
								return Object(A["b"])().then(function (t) {
									200 === t.code && (e.subAlbumList = t.data);
								});
							};
						f();
						var j = function (t) {
								Object(A["c"])({ id: l, t: t }).then(
									(function () {
										var n = Object(S["a"])(
											regeneratorRuntime.mark(function n(c) {
												var i;
												return regeneratorRuntime.wrap(function (n) {
													while (1)
														switch ((n.prev = n.next)) {
															case 0:
																if (200 !== c.code) {
																	n.next = 4;
																	break;
																}
																return (n.next = 3), f();
															case 3:
																if (t) {
																	i = !1;
																	try {
																		i = sessionStorage[E] && !0 === JSON.parse(sessionStorage[E]);
																	} catch (a) {
																		i = !1;
																	}
																	i ? o.success("已收藏") : (e.commonModalVisible = !0);
																} else o.success("已取消收藏"), (e.commonModalVisible = !1);
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
							},
							m = function (t) {
								(e.collectType = t), t ? j(1) : (e.commonModalVisible = !0);
							},
							O = function () {
								e.commonModalVisible = !1;
							},
							v = function () {
								e.collectType ? ((e.commonModalVisible = !1), (sessionStorage[E] = !0)) : j(0);
							};
						return Object(c["a"])(
							Object(c["a"])({}, Object(i["F"])(e)),
							{},
							{
								YYYYMMDD: Y["a"],
								handleDownloadMusic: u,
								collectMusic: d,
								downloadAll: b,
								subAlbum: j,
								collected: s,
								handleModalCancel: O,
								handleModalConfirm: v,
								judgeIsCollected: m,
								currentActiveNavIndex: n,
							}
						);
					},
				}),
				z = (n("9fae"), n("6b0d")),
				$ = n.n(z);
			const q = $()(N, [
				["render", B],
				["__scopeId", "data-v-14fa592a"],
			]);
			e["default"] = q;
		},
		"9fae": function (t, e, n) {
			"use strict";
			n("12d1");
		},
	},
]);
//# sourceMappingURL=chunk-60e69622.582e3ba1.js.map
