import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
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
					backgroundColor: "#FC6901",
					paddingTop: 7,
				}}>
				<View 
					style={{
						alignSelf: "flex-start",
						alignItems: "center",
						marginBottom: 33,
						marginLeft: 21,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingVertical: 10,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3bv5c9t0_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 17,
								height: 10,
								marginLeft: 263,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/7cb75dzc_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 10,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9wuf2rjq_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 11,
							}}
						/>
					</View>
					<Text 
						style={{
							position: "absolute",
							bottom: -5,
							left: 13,
							color: "#FFFFFF",
							fontSize: 15,
						}}>
						{"9:41"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingVertical: 8,
						marginBottom: 18,
						marginHorizontal: 23,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8635y6a6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 23,
						}}
					/>
					<View 
						style={{
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kj5og9xs_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 41,
								width: 82,
								height: 82,
								marginBottom: 12,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 20,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Jhon Abraham"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
								}}>
								{"@jhonabraham"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 24,
							height: 23,
						}}>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 48,
					}}>
					<View 
						style={{
							alignItems: "center",
						}}>
						<View 
							style={{
								position: "absolute",
								top: 71,
								right: -78,
								left: -78,
								alignSelf: "stretch",
								backgroundColor: "#FFFFFF",
								borderTopLeftRadius: 40,
								borderTopRightRadius: 40,
								paddingTop: 14,
							}}>
							<View 
								style={{
									width: 30,
									height: 3,
									backgroundColor: "#E6E6E6",
									borderRadius: 100,
									marginBottom: 24,
									marginLeft: 173,
								}}>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingRight: 4,
									marginBottom: 30,
									marginLeft: 24,
								}}>
								<Text 
									style={{
										color: "#797C7B",
										fontSize: 14,
										marginBottom: 10,
									}}>
									{"Display Name"}
								</Text>
								<Text 
									style={{
										color: "#000D07",
										fontSize: 18,
										marginLeft: 4,
									}}>
									{"Jhon Abraham"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingRight: 4,
									marginBottom: 30,
									marginLeft: 24,
								}}>
								<Text 
									style={{
										color: "#797C7B",
										fontSize: 14,
										marginBottom: 10,
									}}>
									{"Email Address"}
								</Text>
								<Text 
									style={{
										color: "#000D07",
										fontSize: 18,
										marginLeft: 4,
									}}>
									{"jhonabraham20@gmail.com"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingRight: 4,
									marginBottom: 30,
									marginLeft: 24,
								}}>
								<Text 
									style={{
										color: "#797C7B",
										fontSize: 14,
										marginBottom: 10,
									}}>
									{"Address"}
								</Text>
								<Text 
									style={{
										color: "#000D07",
										fontSize: 18,
										marginLeft: 4,
									}}>
									{"33 street west subidbazar,sylhet"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingRight: 4,
									marginBottom: 30,
									marginLeft: 24,
								}}>
								<Text 
									style={{
										color: "#797C7B",
										fontSize: 14,
										marginBottom: 10,
									}}>
									{"Phone  Number"}
								</Text>
								<Text 
									style={{
										color: "#000D07",
										fontSize: 18,
										marginLeft: 4,
									}}>
									{"(320) 555-0104"}
								</Text>
							</View>
							<View 
								style={{
									marginBottom: 138,
									marginLeft: 20,
									marginRight: 31,
								}}>
								<View >
									<View 
										style={{
											alignItems: "flex-end",
											marginBottom: 20,
										}}>
										<Text 
											style={{
												color: "#20A090",
												fontSize: 14,
												fontWeight: "bold",
												marginRight: 2,
											}}>
											{"View All"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/sqmqsu10_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 16,
												height: 111,
												flex: 1,
												marginRight: 24,
											}}
										/>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/qlqt6le4_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 16,
												height: 111,
												flex: 1,
												marginRight: 24,
											}}
										/>
										<View 
											style={{
												flex: 1,
												paddingTop: 1,
												paddingHorizontal: 1,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5atihavj_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													position: "absolute",
													top: 0,
													right: 0,
													left: 0,
													borderRadius: 16,
													height: 110,
												}}
											/>
											<TouchableOpacity 
												style={{
													alignItems: "center",
													backgroundColor: "#000D07CC",
													borderRadius: 16,
													paddingVertical: 49,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#FFFFFF",
														fontSize: 16,
													}}>
													{"255+"}
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
								<Text 
									style={{
										position: "absolute",
										top: -4,
										left: 4,
										color: "#000000",
										fontSize: 14,
									}}>
									{"My Products"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginLeft: 20,
								}}>
								<Text 
									style={{
										color: "#BA1A1A",
										fontSize: 18,
										marginRight: 22,
									}}>
									{"Sign Out"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hzchi2hb_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5tr13ouo_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 44,
									height: 44,
									marginRight: 33,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/n2nrg7cb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 61,
									height: 79,
									marginRight: 16,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9aylmbfb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 44,
									height: 44,
									marginRight: 33,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4nxveo92_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 44,
									height: 44,
								}}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}