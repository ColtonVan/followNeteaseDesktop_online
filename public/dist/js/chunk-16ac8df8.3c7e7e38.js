(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-16ac8df8"],
	{
		"25ad": function (e, t, a) {
			"use strict";
			a.r(t);
			a("b0c0"), a("7db0");
			var n = a("7a23"),
				c = Object(n["R"])("data-v-66693a88");
			Object(n["w"])("data-v-66693a88");
			var i = { class: "px-5 py-4" },
				l = { class: "d-flex mt-5" },
				o = { class: "editForm d-flex flex-column align-items-start" },
				s = Object(n["i"])("span", { class: "labelName" }, "歌单名：", -1),
				r = Object(n["i"])("span", { class: "labelName" }, "标签：", -1),
				d = { class: "d-flex align-items-center position-relative" },
				u = { class: "position-relative" },
				b = Object(n["i"])("span", { class: "labelName" }, "简介：", -1),
				m = { class: "textareaOuter w-100 pb-3" },
				f = { class: "position-absolute bottom-0 text-muted remainLength" },
				j = { class: "d-flex opBtns mt-5" },
				O = { class: "ms-5 ps-5 d-flex flex-column align-items-center" },
				g = Object(n["i"])(
					"div",
					{ class: "text-black-50 mb-3" },
					[Object(n["h"])("选择合适的标签，最多可以选"), Object(n["i"])("span", { class: "maxTagSum" }, "3"), Object(n["h"])("个")],
					-1
				),
				p = { class: "tagLabelName text-black-50 flex-grow-1 flex-shrink-0" },
				v = { class: "d-flex flex-wrap tags" };
			Object(n["u"])();
			var h = c(function (e, t, a, h, x, w) {
					var y = Object(n["B"])("horizontal-nav"),
						L = Object(n["B"])("CommonModal"),
						k = Object(n["B"])("CommonToast");
					return (
						Object(n["t"])(),
						Object(n["f"])(
							n["a"],
							null,
							[
								Object(n["i"])("div", i, [
									Object(n["i"])(y, { navs: e.navs }, null, 8, ["navs"]),
									Object(n["i"])("div", l, [
										Object(n["i"])("div", o, [
											Object(n["i"])("label", null, [
												s,
												Object(n["O"])(
													Object(n["i"])(
														"input",
														{
															type: "text",
															class: "flex-grow-1",
															"onUpdate:modelValue":
																t[1] ||
																(t[1] = function (t) {
																	return (e.name = t);
																}),
														},
														null,
														512
													),
													[[n["J"], e.name]]
												),
											]),
											Object(n["i"])("label", null, [
												r,
												Object(n["i"])("div", d, [
													(Object(n["t"])(!0),
													Object(n["f"])(
														n["a"],
														null,
														Object(n["z"])(e.tags, function (e) {
															return (
																Object(n["t"])(),
																Object(n["f"])(
																	"div",
																	{ key: e.id, class: "rounded-pill border text-muted px-2 me-2 flex-center" },
																	Object(n["E"])(e.name || e),
																	1
																)
															);
														}),
														128
													)),
													Object(n["i"])(
														"div",
														{
															onClick:
																t[2] ||
																(t[2] = function (t) {
																	return (e.modalVisible = !0);
																}),
															class: ["colorA cursor-pointer", { "ms-4": e.tags.length }],
														},
														" 添加标签 ",
														2
													),
												]),
											]),
											Object(n["i"])("label", u, [
												b,
												Object(n["i"])("div", m, [
													Object(n["O"])(
														Object(n["i"])(
															"textarea",
															{
																ref: "descRef",
																rows: "5",
																class: "flex-grow-1 w-100",
																maxlength: "1000",
																"onUpdate:modelValue":
																	t[3] ||
																	(t[3] = function (t) {
																		return (e.desc = t);
																	}),
															},
															null,
															512
														),
														[[n["J"], e.desc]]
													),
												]),
												Object(n["i"])("span", f, Object(n["E"])(1e3 - e.desc.length), 1),
											]),
											Object(n["i"])("div", j, [
												Object(n["i"])(
													"div",
													{
														onClick:
															t[4] ||
															(t[4] = function () {
																return e.handleSave && e.handleSave.apply(e, arguments);
															}),
														class: "opBtn saveBtn rounded-pill text-white",
													},
													"保 存"
												),
												Object(n["i"])(
													"div",
													{
														onClick:
															t[5] ||
															(t[5] = function (t) {
																return e.$router.back();
															}),
														class: "opBtn cancelBtn border rounded-pill ms-4",
													},
													"取 消"
												),
											]),
										]),
										Object(n["i"])("div", O, [
											Object(n["i"])(
												"img",
												{ class: "rounded-3 coverImg", width: "160", height: "160", src: e.imgFile, alt: "" },
												null,
												8,
												["src"]
											),
											Object(n["i"])(
												"div",
												{
													onClick:
														t[6] ||
														(t[6] = function () {
															return e.handleEditCover && e.handleEditCover.apply(e, arguments);
														}),
													class: "opBtn cancelBtn rounded-pill border mt-4",
												},
												"编辑封面"
											),
										]),
									]),
								]),
								Object(n["i"])(
									L,
									{
										title: "添加标签",
										onConfirm: e.modalConfirm,
										visible: e.modalVisible,
										"onUpdate:visible":
											t[7] ||
											(t[7] = function (t) {
												return (e.modalVisible = t);
											}),
										bodyStyle: "min-height: 220px",
										bodyClass: "w-100 overflow-scroll hideScrollBar",
									},
									{
										default: c(function () {
											return [
												g,
												(Object(n["t"])(!0),
												Object(n["f"])(
													n["a"],
													null,
													Object(n["z"])(e.tagList, function (t, a) {
														return (
															Object(n["t"])(),
															Object(n["f"])("div", { class: "d-flex justify-content-between w-100 mb-2", key: a }, [
																Object(n["i"])(
																	"div",
																	p,
																	Object(n["E"])(
																		e.tagLabelNames.find(function (e, t) {
																			return t == a;
																		})
																	),
																	1
																),
																Object(n["i"])("div", v, [
																	(Object(n["t"])(!0),
																	Object(n["f"])(
																		n["a"],
																		null,
																		Object(n["z"])(t, function (t) {
																			return (
																				Object(n["t"])(),
																				Object(n["f"])(
																					"div",
																					{
																						class: "tagItem mb-2 d-flex justify-content-start",
																						key: t.name,
																					},
																					[
																						Object(n["i"])(
																							"div",
																							{
																								onClick: function (a) {
																									return e.clickTagItem(t);
																								},
																								class: [
																									{ activeTagInner: t.active },
																									"tagInner rounded-pill flex-center text-ellipsis cursor-pointer",
																								],
																							},
																							Object(n["E"])(t.name),
																							11,
																							["onClick"]
																						),
																					]
																				)
																			);
																		}),
																		128
																	)),
																]),
															])
														);
													}),
													128
												)),
											];
										}),
										_: 1,
									},
									8,
									["onConfirm", "visible"]
								),
								Object(n["i"])(k, { ref: "commonToast" }, null, 512),
							],
							64
						)
					);
				}),
				x = a("5530"),
				w = a("2909"),
				y = (a("13d5"), a("99af"), a("a4d3"), a("e01a"), a("a15b"), a("d81d"), a("caad"), a("2532"), a("4de4"), a("898f")),
				L = a("3c08"),
				k = a("668f"),
				C = a("6c02"),
				D = a("5502"),
				T = Object(n["j"])({
					components: { HorizontalNav: y["default"] },
					setup: function () {
						var e,
							t = Object(C["c"])(),
							a = (Object(C["d"])(), Object(D["b"])()),
							c = Object(n["x"])({
								navs: [{ title: "编辑歌单信息", active: !0 }],
								tags: [],
								tagList: [],
								mergedTagList: Object(n["d"])(function () {
									return c.tagList.reduce(function (e, t) {
										return [].concat(Object(w["a"])(e), Object(w["a"])(t));
									}, []);
								}),
								tagLabelNames: ["语种", "风格", "场景", "情感", "主题"],
								name: "",
								desc: "",
								imgFile: "https://p1.music.126.net/jWE3OEZUlwdz0ARvyQ9wWw==/109951165474121408.jpg",
								formData: null,
								modalVisible: !1,
								commonToast: Object(n["y"])(null),
								playListDetail: {},
								descRef: Object(n["y"])(null),
							}),
							i = function () {
								Object(k["f"])({ id: t.query.id }).then(function (e) {
									200 === e.code &&
										((c.playListDetail = e.playlist),
										(c.imgFile = c.playListDetail.coverImgUrl),
										(c.name = c.playListDetail.name || ""),
										(c.desc = c.playListDetail.description || ""),
										(c.tags = c.playListDetail.tags || []));
								});
							},
							l = function () {
								i();
								var a = new L["a"]();
								(e = function () {
									a.select();
								}),
									a.handleCallback(function (e) {
										(c.formData = new FormData()), c.formData.append("id", t.query.id), c.formData.append("imgFile", e[0]);
										var a = new FileReader();
										a.readAsDataURL(e[0]),
											(a.onload = function (e) {
												c.imgFile = e.target.result;
												var t = new Image();
												(t.src = c.imgFile),
													(t.onload = function () {
														c.formData.append("imgSize", t.width || t.naturalWidth || 300);
													});
											});
									});
							};
						Object(n["L"])(
							function () {
								return t.query;
							},
							function (e) {
								l(),
									"true" == e.desc &&
										Object(n["o"])(function () {
											c.descRef.focus();
										});
							},
							{ immediate: !0 }
						);
						var o = function () {
								var e = c.name,
									n = c.tags,
									i = c.desc;
								if (!e) return c.commonToast.warn("歌单名不能为空");
								Object(k["j"])({
									name: e,
									tags: n
										.map(function (e) {
											return e.name;
										})
										.join(";"),
									desc: i,
									id: t.query.id,
								}).then(function (e) {
									if (200 === e.code) {
										if ((c.commonToast.success("歌单信息更新成功"), !c.formData || !c.formData.get("imgFile")))
											return l(), a.dispatch("getCreatedMusicList");
										Object(k["k"])(c.formData)
											.then(function (e) {
												200 === e.code
													? (l(), a.dispatch("getCreatedMusicList"), c.commonToast.success("歌单封面更新成功"))
													: c.commonToast.success(e.msg || "歌单封面更新失败,可能原因为图片过大");
											})
											.catch(function (e) {
												c.commonToast.success(e.msg || "歌单封面更新失败,可能原因为图片过大");
											});
									}
								});
							},
							s = function () {
								Object(k["c"])().then(function (e) {
									200 === e.code &&
										(c.tagList = e.tags
											.reduce(function (e, t) {
												return e
													.map(function (e) {
														return e.category;
													})
													.includes(t.category)
													? e
													: [].concat(Object(w["a"])(e), [t]);
											}, [])
											.map(function (t) {
												return e.tags.filter(function (e) {
													return e.category == t.category;
												});
											}));
								});
							};
						s();
						var r = function () {
								(c.tags = Object(w["a"])(
									c.mergedTagList.filter(function (e) {
										return e.active;
									})
								)),
									(c.modalVisible = !1);
							},
							d = function (e) {
								e.active
									? (e.active = !1)
									: c.mergedTagList.filter(function (e) {
											return e.active;
									  }).length < 3
									? (e.active = !0)
									: c.commonToast.warn("最多可选三个标签");
							};
						return Object(x["a"])(
							Object(x["a"])({}, Object(n["F"])(c)),
							{},
							{ handleEditCover: e, handleSave: o, modalConfirm: r, clickTagItem: d }
						);
					},
				}),
				B = (a("fb69"), a("6b0d")),
				F = a.n(B);
			const E = F()(T, [
				["render", h],
				["__scopeId", "data-v-66693a88"],
			]);
			t["default"] = E;
		},
		3575: function (e, t, a) {},
		fb69: function (e, t, a) {
			"use strict";
			a("3575");
		},
	},
]);
//# sourceMappingURL=chunk-16ac8df8.3c7e7e38.js.map
