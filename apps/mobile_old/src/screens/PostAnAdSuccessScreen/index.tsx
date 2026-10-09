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
					paddingTop: 12,
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
						marginBottom: 121,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 8,
						}}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 12,
								fontWeight: "bold",
							}}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g1hmf7g6_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 49,
								height: 15,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 8,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									width: 24,
									height: 6,
									backgroundColor: "#FC6901",
									borderRadius: 9999,
									marginRight: 6,
								}}>
							</View>
							<View 
								style={{
									width: 24,
									height: 6,
									backgroundColor: "#FC6901",
									borderRadius: 9999,
									marginRight: 6,
								}}>
							</View>
							<View 
								style={{
									width: 24,
									height: 6,
									backgroundColor: "#FC6901",
									borderRadius: 9999,
									marginRight: 6,
								}}>
							</View>
							<View 
								style={{
									paddingHorizontal: 6,
								}}>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Step 3 of 3"}
								</Text>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/cwwzbsnk_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 36,
								height: 36,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 49,
						marginHorizontal: 16,
					}}>
					<TouchableOpacity 
						style={{
							backgroundColor: "#FFDBCF",
							borderRadius: 9999,
							paddingVertical: 11,
							paddingHorizontal: 8,
							marginBottom: 20,
						}} onPress={()=>alert('Pressed!')}>
						<View 
							style={{
								alignSelf: "flex-start",
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FFFFFF00",
									borderRadius: 9999,
									padding: 24,
									marginHorizontal: 8,
									shadowColor: "#0000001A",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 6,
									elevation: 6,
								}}>
								<View 
									style={{
										alignSelf: "flex-start",
										backgroundColor: "#FFFFFF00",
										borderRadius: 9999,
										paddingVertical: 34,
										paddingHorizontal: 30,
										shadowColor: "#D0440080",
										shadowOpacity: 0.5,
										shadowOffset: {
										    width: 0,
										    height: 10
										},
										shadowRadius: 25,
										elevation: 25,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/b7ymqq9b_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 35,
											height: 27,
										}}
									/>
								</View>
							</View>
							<View 
								style={{
									width: 12,
									height: 12,
									backgroundColor: "#008378",
									borderRadius: 9999,
									marginBottom: 112,
								}}>
							</View>
							<View 
								style={{
									width: 10,
									height: 13,
									backgroundColor: "#6BD8CB",
									borderRadius: 2,
									marginLeft: 110,
								}}>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8g6a3y5k_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								top: 0,
								right: 16,
								width: 22,
								height: 30,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u78w8eu7_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: 11,
								left: 16,
								width: 11,
								height: 26,
							}}
						/>
						<View 
							style={{
								position: "absolute",
								bottom: 24,
								right: 12,
								width: 14,
								height: 14,
								backgroundColor: "#FFB59C",
								borderRadius: 9999,
							}}>
						</View>
						<View 
							style={{
								position: "absolute",
								top: 8,
								left: 43,
								width: 16,
								height: 16,
								backgroundColor: "#A6350066",
								borderRadius: 2,
							}}>
						</View>
					</TouchableOpacity>
					<Text 
						style={{
							color: "#151C27",
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 7,
						}}>
						{"Ad Published Successfully!"}
					</Text>
					<View 
						style={{
							paddingHorizontal: 5,
							marginBottom: 23,
						}}>
						<Text 
							style={{
								color: "#555F6F",
								fontSize: 14,
								textAlign: "center",
								width: 299,
							}}>
							{"Your listing is now live for buyers to see.\nBuyers can now chat with you or call directly."}
						</Text>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 13,
							marginBottom: 12,
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
								alignItems: "center",
								backgroundColor: "#E2E8F8",
								borderRadius: 8,
								marginRight: 12,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/a6l96yhn_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 8,}}
								style={{
									paddingTop: 3,
									paddingLeft: 4,
									paddingRight: 41,
								}}
								>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFFE3",
										borderRadius: 4,
										paddingVertical: 2,
										paddingHorizontal: 4,
										marginBottom: 58,
									}}>
									<View 
										style={{
											width: 6,
											height: 6,
											backgroundColor: "#00685F",
											borderRadius: 9999,
											marginRight: 2,
										}}>
									</View>
									<Text 
										style={{
											color: "#00685F",
											fontSize: 9,
											fontWeight: "bold",
										}}>
										{"LIVE"}
									</Text>
								</View>
							</ImageBackground>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 2,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#89F5E7",
										borderRadius: 9999,
										paddingVertical: 2,
										paddingHorizontal: 8,
									}}>
									<View 
										style={{
											width: 6,
											height: 6,
											backgroundColor: "#00685F",
											borderRadius: 9999,
											marginRight: 4,
										}}>
									</View>
									<Text 
										style={{
											color: "#00201D",
											fontSize: 10,
										}}>
										{"Live & Active"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 11,
									}}>
									{"Just now"}
								</Text>
							</View>
							<View 
								style={{
									marginBottom: 1,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"iPhone 14 Pro Max 256GB"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 2,
								}}>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 20,
										fontWeight: "bold",
										marginRight: 5,
									}}>
									{"$890"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 11,
										textDecorationLine: "line-through",
									}}>
									{"$920"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vfbg7txt_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 11,
										marginRight: 4,
									}}
								/>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Lahore, Pakistan"}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F0F3FF",
							borderColor: "#E2E8F8",
							borderRadius: 8,
							borderWidth: 1,
							paddingVertical: 11,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ldvusf2g_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 28,
								height: 28,
								marginLeft: 11,
								marginRight: 10,
							}}
						/>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 11,
								fontWeight: "bold",
								width: 297,
							}}>
							{"Pro tip: Fast responders close deals 2x faster! Keep push\nnotifications turned on."}
						</Text>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFFCC",
						paddingVertical: 12,
						marginBottom: 48,
					}}>
					<TouchableOpacity 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 9999,
							paddingVertical: 14,
							marginBottom: 10,
							marginHorizontal: 16,
							shadowColor: "#D0440057",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 8
							},
							shadowRadius: 20,
							elevation: 20,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
								marginRight: 8,
							}}>
							{"View Ad"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/j7eg92ii_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 12,
								height: 12,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#FC6901",
							borderRadius: 9999,
							borderWidth: 2,
							paddingVertical: 14,
							marginBottom: 10,
							marginHorizontal: 16,
						}} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rxwj50fz_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 15,
								height: 13,
								marginRight: 5,
							}}
						/>
						<Text 
							style={{
								color: "#A63500",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"Back to Home"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							width: 128,
							height: 4,
							backgroundColor: "#151C2733",
							borderRadius: 9999,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}