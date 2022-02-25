(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-5031a7e2"],
	{
		"0934": function (t, e, n) {
			"use strict";
			n("7bf1");
		},
		"7bf1": function (t, e, n) {},
		"7f2d": function (t, e, n) {
			"use strict";
			n.d(e, "a", function () {
				return i;
			}),
				n.d(e, "c", function () {
					return s;
				}),
				n.d(e, "b", function () {
					return l;
				});
			var c = n("b32d"),
				i = function (t) {
					return c["a"].get("/album", { params: { id: t } });
				},
				s = function (t) {
					var e = t.id,
						n = t.t;
					return c["a"].get("/album/sub", { params: { id: e, t: void 0 === n ? 1 : n, timeStamp: Date.now() } });
				},
				l = function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { limit: 999, offset: 0 },
						e = t.limit,
						n = t.offset;
					return c["a"].get("/album/sublist", { params: { limit: e, offset: n, timeStamp: Date.now() } });
				};
		},
		cc5a: function (t, e, n) {
			"use strict";
			n.d(e, "c", function () {
				return i;
			}),
				n.d(e, "d", function () {
					return s;
				}),
				n.d(e, "g", function () {
					return l;
				}),
				n.d(e, "h", function () {
					return a;
				}),
				n.d(e, "f", function () {
					return o;
				}),
				n.d(e, "a", function () {
					return r;
				}),
				n.d(e, "b", function () {
					return u;
				}),
				n.d(e, "e", function () {
					return b;
				});
			var c = n("b32d"),
				i = function () {
					var t =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { limit: 30, offset: 0, initial: "", type: -1, area: -1 };
					return c["a"].get("/artist/list", { params: t });
				},
				s = function (t) {
					return c["a"].get("/artists", { params: { id: t } });
				},
				l = function (t) {
					return c["a"].get("/artist/top/song", { params: { id: t } });
				},
				a = function (t) {
					var e = t.id,
						n = t.t;
					return c["a"].get("/artist/sub", { params: { id: e, t: void 0 === n ? 1 : n } });
				},
				o = function () {
					return c["a"].get("/artist/sublist");
				},
				r = function (t) {
					var e = t.id,
						n = t.limit,
						i = void 0 === n ? 10 : n,
						s = t.offset,
						l = void 0 === s ? 0 : s;
					return c["a"].get("/artist/album", { params: { id: e, limit: i, offset: l } });
				},
				u = function (t) {
					return c["a"].get("/artist/desc", { params: { id: t } });
				},
				b = function (t) {
					return c["a"].get("/simi/artist", { params: { id: t } });
				};
		},
		d0e4: function (t, e, n) {
			"use strict";
			n.r(e);
			var c = n("5530"),
				i = (n("b0c0"), n("a15b"), n("d81d"), n("4d90"), n("caad"), n("2532"), n("ac1f"), n("1276"), n("7a23")),
				s = Object(i["R"])("data-v-5c05fcb7");
			Object(i["w"])("data-v-5c05fcb7");
			var l = { class: "topArea mt-3 d-flex position-relative" },
				a = { class: "ms-5" },
				o = { class: "fs-3 fw-bold" },
				r = { class: "alias text-muted" },
				u = Object(i["i"])("span", { class: "ms-2 flex-shrink-0" }, "收藏", -1),
				b = Object(i["i"])("span", { class: "ms-2 flex-shrink-0 text-dark-50" }, "已收藏", -1),
				d = { class: "canSelect" },
				f = Object(i["h"])("单曲数:"),
				j = { class: "text-muted" },
				O = { class: "d-inline-block mx-4" },
				m = Object(i["h"])("专辑数:"),
				v = { class: "text-muted" },
				h = Object(i["h"])("MV数:"),
				g = { class: "text-muted" },
				p = Object(i["i"])("div", { class: "boderLine w-100 border-top ms-2 mb-4" }, null, -1),
				k = { class: "d-flex" },
				x = Object(i["i"])(
					"div",
					{ class: "top50Cover rounded-4 overflow-hidden position-relative text-white flex-center flex-column fw-bold me-3" },
					[Object(i["i"])("div", null, "TOP"), Object(i["i"])("div", null, "50")],
					-1
				),
				w = { class: "ms-5 flex-grow-1" },
				y = { class: "d-flex align-items-center mb-3" },
				S = Object(i["i"])("span", { class: "fs-5 fw-bold me-4" }, "热门50首", -1),
				A = { class: "text-muted me-3" },
				C = { class: "me-3" },
				D = { class: "albums" },
				I = { class: "me-3" },
				M = { class: "fs-5 text-muted" },
				B = { class: "flex-grow-1 ms-5" },
				L = { class: "d-flex align-items-center mb-3" },
				E = { class: "text-muted me-3" },
				R = { class: "me-3" },
				z = { key: 1, class: "canSelect" },
				T = { class: "fw-bold fs-5 mb-4" },
				Y = Object(i["i"])("span", null, "简介", -1),
				q = { class: "text-muted mb-4 textDes" },
				U = { class: "fw-bold fs-5 mb-4" },
				V = { class: "text-muted mb-4 textDes" },
				N = { key: 2, class: "d-flex flex-wrap justify-content-between" };
			Object(i["u"])();
			var P = s(function (t, e, n, P, _, H) {
					var J,
						F = Object(i["B"])("CustomImg"),
						$ = Object(i["B"])("CollectListIcon"),
						G = Object(i["B"])("HorizontalNav"),
						K = Object(i["B"])("playSolidInnerIcon"),
						Q = Object(i["B"])("Divider"),
						W = Object(i["B"])("AddToCollectionIcon"),
						X = Object(i["B"])("LikedIcon"),
						Z = Object(i["B"])("HaveLikedIcon"),
						tt = Object(i["B"])("DownloadMusicIcon"),
						et = Object(i["B"])("MusicList"),
						nt = Object(i["B"])("AlbumCover"),
						ct = Object(i["B"])("ArtistItem"),
						it = Object(i["B"])("PlayAllListBtn"),
						st = Object(i["B"])("CollectionListModal");
					return (
						Object(i["t"])(),
						Object(i["f"])(
							i["a"],
							null,
							[
								Object(i["i"])(
									"div",
									{
										onScroll:
											e[7] ||
											(e[7] = function () {
												return t.handleScroll && t.handleScroll.apply(t, arguments);
											}),
										class: "px-5 h-100 hideScrollBar ".concat(t.isRequesting ? "overflow-hidden" : "overflow-scroll"),
									},
									[
										Object(i["i"])("div", l, [
											Object(i["i"])(
												F,
												{ class: "rounded-5 overflow-hidden", width: "200", height: "200", src: t.artist.img1v1Url },
												null,
												8,
												["src"]
											),
											Object(i["i"])("div", a, [
												Object(i["i"])("div", o, Object(i["E"])(t.artist.name), 1),
												Object(i["i"])(
													"div",
													r,
													Object(i["E"])(null === (J = t.artist.alias) || void 0 === J ? void 0 : J.join("、")),
													1
												),
												t.isSubed
													? (Object(i["t"])(),
													  Object(i["f"])(
															"div",
															{
																key: 1,
																onClick:
																	e[2] ||
																	(e[2] = function (e) {
																		return t.subArtist(0);
																	}),
																class: "collect my-3 rounded-pill border flex-center cursor-pointer hover-btn",
															},
															[
																Object(i["i"])($, {
																	color: "rgba(0,0,0,.5)",
																	class: "flex-shrink-0",
																	width: "20",
																	height: "20",
																}),
																b,
															]
													  ))
													: (Object(i["t"])(),
													  Object(i["f"])(
															"div",
															{
																key: 0,
																onClick:
																	e[1] ||
																	(e[1] = function (e) {
																		return t.subArtist(1);
																	}),
																class: "collect my-3 rounded-pill border flex-center cursor-pointer hover-btn",
															},
															[Object(i["i"])($, { class: "flex-shrink-0", width: "20", height: "20" }), u]
													  )),
												Object(i["i"])("div", d, [
													Object(i["i"])("span", null, [
														f,
														Object(i["i"])("span", j, Object(i["E"])(t.artist.musicSize), 1),
													]),
													Object(i["i"])("span", O, [m, Object(i["i"])("span", v, Object(i["E"])(t.artist.albumSize), 1)]),
													Object(i["i"])("span", null, [h, Object(i["i"])("span", g, Object(i["E"])(t.artist.mvSize), 1)]),
												]),
											]),
										]),
										Object(i["i"])(
											G,
											{
												class: "mt-4",
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
										p,
										0 === t.currentActiveNavIndex
											? (Object(i["t"])(),
											  Object(i["f"])(
													i["a"],
													{ key: 0 },
													[
														Object(i["i"])("div", k, [
															x,
															Object(i["i"])("div", w, [
																Object(i["i"])("div", y, [
																	S,
																	Object(i["i"])(K, {
																		onClick:
																			e[4] ||
																			(e[4] = function (e) {
																				(t.playingSongs = t.realSongs), t.playAll.clickPlayAll();
																			}),
																		class: "ms-1 hover-opacity",
																		width: "18",
																		height: "18",
																	}),
																	Object(i["i"])(Q, { class: "mx-4" }),
																	Object(i["i"])(W, {
																		onClick:
																			e[5] ||
																			(e[5] = function (e) {
																				(t.collectingSongs = t.realSongs), (t.colVisible = !0);
																			}),
																		class: "hover-opacity",
																		width: "18",
																		height: "18",
																	}),
																]),
																Object(i["i"])(
																	et,
																	{
																		columns: t.columns,
																		dataSource: t.songs.map(function (t, e) {
																			return Object(c["a"])(Object(c["a"])({}, t), {}, { index: e });
																		}),
																		startSpace: !1,
																		colItemStyle: { padding: ".7rem" },
																	},
																	{
																		toolBar: s(function (e) {
																			var n = e.id,
																				c = e.index,
																				s = e.name;
																			return [
																				Object(i["i"])(
																					"span",
																					A,
																					Object(i["E"])(String(c + 1).padStart(2, "0")),
																					1
																				),
																				Object(i["i"])("span", C, [
																					t.likedMusicList.includes(n)
																						? (Object(i["t"])(),
																						  Object(i["f"])(
																								Z,
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
																								X,
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
																					tt,
																					{
																						onClick: function (e) {
																							return t.handleDownloadMusic({ id: n, name: s });
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
																	["columns", "dataSource", "colItemStyle"]
																),
																10 === t.songs.length
																	? (Object(i["t"])(),
																	  Object(i["f"])(
																			"div",
																			{
																				key: 0,
																				onClick:
																					e[6] ||
																					(e[6] = function (e) {
																						return (t.songs = t.realSongs);
																					}),
																				style: { background: "#f1f1f1", "margin-left": "calc(1.5rem / -2)" },
																				class: "py-2 findAll text-end cursor-pointer w-100 text-muted",
																			},
																			" 查看全部" + Object(i["E"])(t.realSongs.length) + "首 > ",
																			1
																	  ))
																	: Object(i["g"])("", !0),
															]),
														]),
														Object(i["i"])("div", D, [
															(Object(i["t"])(!0),
															Object(i["f"])(
																i["a"],
																null,
																Object(i["z"])(t.hotAlbums, function (e, n) {
																	var l, a;
																	return (
																		Object(i["t"])(),
																		Object(i["f"])("div", { class: "d-flex mb-5", key: n }, [
																			Object(i["i"])("div", I, [
																				Object(i["i"])(
																					nt,
																					{
																						size: "150",
																						onClick: function (n) {
																							return t.navigateToAlbumDetail(e.id);
																						},
																						src: e.picUrl,
																					},
																					null,
																					8,
																					["onClick", "src"]
																				),
																				Object(i["i"])(
																					"div",
																					M,
																					Object(i["E"])(t.YYYYMMDD(e.publishTime)),
																					1
																				),
																			]),
																			Object(i["i"])("div", B, [
																				Object(i["i"])("div", L, [
																					Object(i["i"])(
																						"span",
																						{
																							onClick: function (n) {
																								return t.navigateToAlbumDetail(e.id);
																							},
																							class: "fs-5 fw-bold me-4 albumName text-ellipsis cursor-pointer",
																							title: e.name,
																						},
																						Object(i["E"])(e.name),
																						9,
																						["onClick", "title"]
																					),
																					Object(i["i"])(
																						K,
																						{
																							onClick: function (n) {
																								(t.playingSongs = e.realSongs),
																									t.playAll.clickPlayAll();
																							},
																							class: "ms-1 hover-opacity",
																							width: "18",
																							height: "18",
																						},
																						null,
																						8,
																						["onClick"]
																					),
																					Object(i["i"])(Q, { class: "mx-4" }),
																					Object(i["i"])(
																						W,
																						{
																							onClick: function (n) {
																								(t.collectingSongs = e.realSongs),
																									(t.colVisible = !0);
																							},
																							class: "hover-opacity",
																							width: "18",
																							height: "18",
																						},
																						null,
																						8,
																						["onClick"]
																					),
																				]),
																				Object(i["i"])(
																					et,
																					{
																						columns: t.columns,
																						dataSource: e.songs.map(function (t, e) {
																							return Object(c["a"])(
																								Object(c["a"])({}, t),
																								{},
																								{ index: e }
																							);
																						}),
																						startSpace: !1,
																						colItemStyle: { padding: ".7rem" },
																					},
																					{
																						toolBar: s(function (e) {
																							var n = e.id,
																								c = e.index,
																								s = e.name;
																							return [
																								Object(i["i"])(
																									"span",
																									E,
																									Object(i["E"])(String(c + 1).padStart(2, "0")),
																									1
																								),
																								Object(i["i"])("span", R, [
																									t.likedMusicList.includes(n)
																										? (Object(i["t"])(),
																										  Object(i["f"])(
																												Z,
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
																												X,
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
																									tt,
																									{
																										onClick: function (e) {
																											return t.handleDownloadMusic({
																												id: n,
																												name: s,
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
																						_: 2,
																					},
																					1032,
																					["columns", "dataSource", "colItemStyle"]
																				),
																				(null === e ||
																				void 0 === e ||
																				null === (l = e.realSongs) ||
																				void 0 === l
																					? void 0
																					: l.length) >
																				(null === e || void 0 === e || null === (a = e.songs) || void 0 === a
																					? void 0
																					: a.length)
																					? (Object(i["t"])(),
																					  Object(i["f"])(
																							"div",
																							{
																								key: 0,
																								style: {
																									background: "#f1f1f1",
																									"margin-left": "calc(1.5rem / -2)",
																								},
																								class: "py-2 findAll text-end cursor-pointer w-100 text-muted",
																								onClick: function (n) {
																									return t.navigateToAlbumDetail(e.id);
																								},
																							},
																							" 查看全部 > ",
																							8,
																							["onClick"]
																					  ))
																					: Object(i["g"])("", !0),
																			]),
																		])
																	);
																}),
																128
															)),
														]),
													],
													64
											  ))
											: Object(i["g"])("", !0),
										2 === t.currentActiveNavIndex
											? (Object(i["t"])(),
											  Object(i["f"])("div", z, [
													Object(i["i"])("div", T, [Object(i["i"])("span", null, Object(i["E"])(t.artist.name), 1), Y]),
													Object(i["i"])("div", q, Object(i["E"])(t.artistDesc.briefDesc), 1),
													(Object(i["t"])(!0),
													Object(i["f"])(
														i["a"],
														null,
														Object(i["z"])(t.artistDesc.introduction, function (t, e) {
															return (
																Object(i["t"])(),
																Object(i["f"])(
																	i["a"],
																	{ key: e },
																	[
																		Object(i["i"])("div", U, Object(i["E"])(t.ti), 1),
																		Object(i["i"])("div", V, [
																			(Object(i["t"])(!0),
																			Object(i["f"])(
																				i["a"],
																				null,
																				Object(i["z"])(t.txt.split("\n"), function (t, e) {
																					return (
																						Object(i["t"])(),
																						Object(i["f"])("p", { key: e }, Object(i["E"])(t), 1)
																					);
																				}),
																				128
																			)),
																		]),
																	],
																	64
																)
															);
														}),
														128
													)),
											  ]))
											: Object(i["g"])("", !0),
										3 === t.currentActiveNavIndex
											? (Object(i["t"])(),
											  Object(i["f"])("div", N, [
													(Object(i["t"])(!0),
													Object(i["f"])(
														i["a"],
														null,
														Object(i["z"])(t.similarArtists, function (t, e) {
															return (
																Object(i["t"])(),
																Object(i["f"])(
																	ct,
																	{
																		class: "mb-5",
																		key: e,
																		columns: "5",
																		picUrl: t.picUrl,
																		name: t.name,
																		id: t.id,
																		toDetail: !0,
																	},
																	null,
																	8,
																	["picUrl", "name", "id"]
																)
															);
														}),
														128
													)),
											  ]))
											: Object(i["g"])("", !0),
									],
									34
								),
								Object(i["i"])(it, { visible: !1, musicList: t.playingSongs, ref: "playAll" }, null, 8, ["musicList"]),
								Object(i["i"])(
									st,
									{
										tracks: t.collectingSongs
											.map(function (t) {
												return t.id;
											})
											.reverse(),
										visible: t.colVisible,
										"onUpdate:visible":
											e[8] ||
											(e[8] = function (e) {
												return (t.colVisible = e);
											}),
									},
									null,
									8,
									["tracks", "visible"]
								),
							],
							64
						)
					);
				}),
				_ = n("2909"),
				H = n("1da1"),
				J = (n("96cf"), n("7db0"), n("fb6a"), n("159b"), n("99af"), n("cc5a")),
				F = n("7f2d"),
				$ = n("54ba"),
				G = n("6e21"),
				K = n("d257"),
				Q = n("fb3b"),
				W = n("3c08"),
				X = n("d4c0"),
				Z = n("6c02"),
				tt = n("5502"),
				et = Object(i["j"])({
					setup: function () {
						var t = Object(Z["c"])(),
							e = Object(Z["d"])(),
							n = Object(tt["b"])(),
							s = Object(i["d"])(function () {
								return t.query.id;
							}),
							l = Object(i["x"])({
								artist: {},
								navs: [{ title: "专辑", active: !0 }, { title: "MV" }, { title: "歌手详情" }, { title: "相似歌手" }],
								realSongs: [],
								songs: [],
								subList: [],
								columns: [
									{ span: 2, dataIndex: "toolBar", slots: { customRender: "toolBar" }, colItemStyle: { "text-align": "center" } },
									{ span: 9, dataIndex: "name" },
									{
										span: 1,
										dataIndex: "dt",
										render: function (t) {
											return Object(X["g"])(t);
										},
									},
								],
								likedMusicList: Object(i["d"])(function () {
									return n.state.likedMusicList;
								}),
								playAll: Object(i["y"])(null),
								hotAlbums: [],
								playingSongs: [],
								isRequesting: !1,
								artistCoverLoaded: !1,
								colVisible: !1,
								collectingSongs: [],
								artistDesc: null,
								similarArtists: [],
							});
						Object(i["r"])(function () {
							Object(i["L"])(
								function () {
									return t.query;
								},
								function () {
									v(), A(), C(), b(), d(), f();
								},
								{ immediate: !0 }
							);
						});
						var a = Object(i["d"])(function () {
								var t;
								return (
									(null ===
										(t = l.navs
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
							o = Object(i["d"])(function () {
								return l.subList.some(function (t) {
									return t.id === s.value;
								});
							}),
							r = Object(i["k"])(),
							u = r.appContext.config.globalProperties.$toast,
							b = function () {
								Object(J["d"])(s.value).then(function (t) {
									200 === t.code && (l.artist = t.artist);
								});
							},
							d = function () {
								Object(J["g"])(s.value).then(function (t) {
									200 === t.code && ((l.songs = t.songs.slice(0, 10)), (l.realSongs = t.songs));
								});
							},
							f = function () {
								return Object(J["f"])().then(function (t) {
									200 === t.code && (l.subList = t.data);
								});
							},
							j = function (t) {
								Object(J["h"])({ id: s.value, t: t })
									.then(
										(function () {
											var e = Object(H["a"])(
												regeneratorRuntime.mark(function e(n) {
													return regeneratorRuntime.wrap(function (e) {
														while (1)
															switch ((e.prev = e.next)) {
																case 0:
																	if (200 !== n.code) {
																		e.next = 4;
																		break;
																	}
																	return (e.next = 3), f();
																case 3:
																	t ? u.success("收藏成功") : u.success("已取消收藏");
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
									)
									.catch(function (t) {
										-462 === t.code &&
											(console.warn(null === t || void 0 === t ? void 0 : t.data.blockText),
											u.error(null === t || void 0 === t ? void 0 : t.data.blockText));
									});
							},
							O = function (t, e) {
								Object($["h"])({ id: e.value, like: t }).then(
									(function () {
										var e = Object(H["a"])(
											regeneratorRuntime.mark(function e(c) {
												return regeneratorRuntime.wrap(function (e) {
													while (1)
														switch ((e.prev = e.next)) {
															case 0:
																if (200 !== c.code) {
																	e.next = 4;
																	break;
																}
																return (e.next = 3), n.dispatch("getLikedMusicList");
															case 3:
																u.success(t ? "已添加到我喜欢的音乐" : "取消喜欢成功");
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
							m = function (t) {
								var e = t.id,
									n = t.name;
								Object(G["c"])({ id: e.value }).then(function (t) {
									if (200 === t.code) {
										var e = t.data;
										e && e.length
											? Object(W["c"])(e[0].url, n)
													.then(function () {
														u.success("已添加至下载");
													})
													.catch(function () {
														u.warn("下载失败");
													})
											: u.warn("获取音乐链接失败");
									}
								});
							},
							v = function () {
								Object(J["a"])({ id: s.value }).then(function (t) {
									200 === t.code &&
										((l.hotAlbums = t.hotAlbums),
										l.hotAlbums.forEach(function (t, e) {
											Object(F["a"])(t.id).then(
												(function () {
													var t = Object(H["a"])(
														regeneratorRuntime.mark(function t(n) {
															return regeneratorRuntime.wrap(function (t) {
																while (1)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (200 !== n.code) {
																				t.next = 6;
																				break;
																			}
																			return (t.next = 3), Object(X["b"])(n.songs);
																		case 3:
																			(n.songs = t.sent),
																				(l.hotAlbums[e].songs = n.songs.slice(0, 10)),
																				(l.hotAlbums[e].realSongs = n.songs);
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
										}));
								});
							},
							h = 0,
							g = !0,
							p = function () {
								if (!g) return u.success("没有更多了~");
								l.isRequesting ||
									((h += 10),
									Object(J["a"])({ id: s.value, offset: h })
										.then(function (t) {
											if (200 === t.code) {
												if (((g = t.more), null === t || void 0 === t || !t.hotAlbums.length))
													return (g = !1), u.success("没有更多了~");
												(l.hotAlbums = [].concat(Object(_["a"])(l.hotAlbums), Object(_["a"])(t.hotAlbums))),
													l.hotAlbums.forEach(function (t, e) {
														Object(F["a"])(t.id).then(function (t) {
															200 === t.code &&
																((l.hotAlbums[e].songs = t.songs.slice(0, 10)), (l.hotAlbums[e].realSongs = t.songs));
														});
													});
											}
										})
										.then(function () {
											return (l.isRequesting = !1);
										}));
							},
							k = null,
							x = function () {
								k || (k = Object(K["a"])(p, 300, !0)), k();
							},
							w = Object(Q["c"])(),
							y = function (t) {
								0 === a.value &&
									w(t.target, function () {
										x();
									});
							},
							S = function (t) {
								e.push({ name: "albumDetail", query: { id: t, artistId: s.value } });
							},
							A = function () {
								Object(J["b"])(s.value).then(function (t) {
									200 === t.code && (l.artistDesc = t);
								});
							},
							C = function () {
								Object(J["e"])(s.value).then(function (t) {
									200 === t.code && (l.similarArtists = t.artists);
								});
							};
						return Object(c["a"])(
							Object(c["a"])({}, Object(i["F"])(l)),
							{},
							{
								isSubed: o,
								subArtist: j,
								collectMusic: O,
								handleDownloadMusic: m,
								YYYYMMDD: X["a"],
								handleScroll: y,
								console: console,
								navigateToAlbumDetail: S,
								currentActiveNavIndex: a,
							}
						);
					},
				}),
				nt = (n("0934"), n("6b0d")),
				ct = n.n(nt);
			const it = ct()(et, [
				["render", P],
				["__scopeId", "data-v-5c05fcb7"],
			]);
			e["default"] = it;
		},
	},
]);
//# sourceMappingURL=chunk-5031a7e2.0a24118c.js.map
