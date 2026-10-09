import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF00",
						paddingBottom: 24,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 25
						},
						shadowRadius: 50,
						elevation: 50,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingVertical: 12,
							paddingHorizontal: 16,
						}}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 13,
								fontWeight: "bold",
							}}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/l292utfo_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 48,
								height: 15,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingVertical: 10,
							paddingHorizontal: 16,
							shadowColor: "#0000000D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 2,
							elevation: 2,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/aw88ugf3_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 36,
									height: 36,
								}}
							/>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingLeft: 12,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 18,
										fontWeight: "bold",
										marginRight: 7,
									}}>
									{"Saved Ads"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"(12)"}
								</Text>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/srdispvv_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 76,
								height: 36,
							}}
						/>
					</View>
					<ScrollView 
						horizontal
						showsHorizontalScrollIndicator={false} 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							backgroundColor: "#FFFFFF",
							paddingVertical: 10,
							paddingHorizontal: 16,
							marginBottom: 12,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FC6901",
								borderRadius: 9999,
								paddingVertical: 6,
								paddingHorizontal: 16,
								marginRight: 8,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"All items"}
							</Text>
							<View 
								style={{
									paddingHorizontal: 4,
								}}>
								<View 
									style={{
										alignSelf: "flex-start",
										backgroundColor: "#FFFFFF33",
										borderRadius: 9999,
										paddingVertical: 2,
										paddingHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"12"}
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 7,
								paddingHorizontal: 16,
								marginRight: 9,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Mobiles"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 7,
								paddingHorizontal: 16,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Electronics"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 7,
								paddingHorizontal: 16,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Vehicles"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 7,
								paddingHorizontal: 16,
								marginRight: 9,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Mobiles"}
							</Text>
						</TouchableOpacity>
					</ScrollView>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 15,
							marginHorizontal: 16,
						}}>
						<Text 
							style={{
								color: "#555F6F",
								fontSize: 12,
							}}>
							{"Showing all saved items in Lahore"}
						</Text>
						<View 
							style={{
								alignItems: "center",
							}}>
							<View 
								style={{
									paddingBottom: 8,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/71gxkqo7_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 31,
									}}
								/>
								<View 
									style={{
										alignSelf: "flex-start",
										paddingHorizontal: 4,
										marginLeft: 19,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
										}}>
										{"Recent"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							paddingHorizontal: 16,
							marginBottom: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 12,
							}}>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
									marginRight: 12,
								}}>
								<ImageBackground 
									source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xc58vj2b_expires_30_days.png"}} 
									resizeMode = {'stretch'}
									imageStyle={{borderRadius: 8,}}
									style={{
										paddingVertical: 8,
										marginBottom: 8,
									}}
									>
									<View 
										style={{
											alignItems: "flex-end",
											marginBottom: 88,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mnxvrjfy_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 28,
												height: 28,
												marginRight: 8,
											}}
										/>
									</View>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#2A313DCC",
											borderRadius: 4,
											paddingVertical: 2,
											paddingHorizontal: 6,
											marginLeft: 8,
										}}>
										<Text 
											style={{
												color: "#EBF1FF",
												fontSize: 10,
											}}>
											{"Featured"}
										</Text>
									</View>
								</ImageBackground>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$1,200"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"MacBook Pro M2 13-inch"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yjtrssdx_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Gulberg, Lahore"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Yesterday"}
											</Text>
											<Text 
												style={{
													color: "#00685F",
													fontSize: 10,
												}}>
												{"Verified"}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
								}}>
								<View 
									style={{
										paddingBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zvba15d1_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 176,
											height: 151,
										}}
									/>
								</View>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$450"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"Google Pixel 7 Pro"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/l59mihmz_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"DHA Phase 5, Lahore"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"2 days ago"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Used"}
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 12,
							}}>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
									marginRight: 12,
								}}>
								<View 
									style={{
										paddingBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/sevgvrng_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 176,
											height: 151,
										}}
									/>
								</View>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$85"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"Nike Air Jordan 1"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kbr59rsq_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Johar Town, Metro"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Yesterday"}
											</Text>
											<View 
												style={{
													backgroundColor: "#89F5E74D",
													borderRadius: 4,
													paddingHorizontal: 4,
												}}>
												<Text 
													style={{
														color: "#005049",
														fontSize: 10,
													}}>
													{"New"}
												</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
								}}>
								<View 
									style={{
										paddingBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kw4a5po9_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 176,
											height: 151,
										}}
									/>
								</View>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$620"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"iPad Pro 11-inch M1"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ax4m86tg_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Downtown, Metro"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"3 days ago"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Like New"}
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
									marginRight: 12,
								}}>
								<View 
									style={{
										paddingBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/dopwq4q4_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 176,
											height: 151,
										}}
									/>
								</View>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$240"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"Sony WH-1000XM5 ANC"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5p6iubd5_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Model Town, Lahore"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Yesterday"}
											</Text>
											<Text 
												style={{
													color: "#00685F",
													fontSize: 10,
												}}>
												{"Verified"}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									flex: 1,
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
								}}>
								<View 
									style={{
										paddingBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tjvc2aq3_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 176,
											height: 151,
										}}
									/>
								</View>
								<View >
									<View >
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$1,450"}
											</Text>
										</View>
										<View >
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
												}}>
												{"Yamaha YBR 125G (2023)"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 19,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/iut0sa4e_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 10,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Cantt, Lahore"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"4 days ago"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"2.4k km"}
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							alignItems: "center",
							paddingBottom: 4,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bacoak6x_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 48,
								height: 48,
								marginBottom: 7,
							}}
						/>
						<View 
							style={{
								alignSelf: "stretch",
								alignItems: "center",
								marginBottom: 7,
								marginHorizontal: 16,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"You've reached the end of your saved ads."}
							</Text>
						</View>
						<Text 
							style={{
								color: "#A63500",
								fontSize: 12,
								fontWeight: "bold",
							}}>
							{"Explore more listings"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}