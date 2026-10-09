import React from "react";
import { View, ScrollView, Image, Text, } from "react-native";
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8o6ypxhw_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 17,
								height: 10,
								marginLeft: 263,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wvxbldvg_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 10,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rv8w8u3q_expires_30_days.png"}} 
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
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 51,
						marginLeft: 23,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u5gx96jo_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 23,
							marginRight: 101,
						}}
					/>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 20,
						}}>
						{"Settings"}
					</Text>
				</View>
				<View 
					style={{
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
							marginLeft: 172,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 19,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4ofmoeka_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 62,
								height: 60,
								marginRight: 10,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 20,
									fontWeight: "bold",
									marginBottom: 6,
								}}>
								{"Jhon Abraham"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 3,
									marginRight: 59,
								}}>
								{"Never give up 💪"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z8v99gy4_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					</View>
					<View 
						style={{
							width: 375,
							height: 1,
							backgroundColor: "#F5F6F6",
							marginBottom: 33,
						}}>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4x0dked1_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								paddingRight: 2,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 16,
									marginBottom: 6,
								}}>
								{"Account"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 2,
								}}>
								{"Privacy, security, change number"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3yw3msbf_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								paddingRight: 2,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 16,
									marginBottom: 6,
								}}>
								{"Chat"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 2,
								}}>
								{"Chat history,theme,wallpapers"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/w3jbdo17_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								paddingRight: 2,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 16,
									marginBottom: 6,
								}}>
								{"Notifications"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 2,
								}}>
								{"Messages, group and others"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gjv1otcy_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								paddingRight: 2,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 16,
									marginBottom: 6,
								}}>
								{"Help"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 2,
								}}>
								{"Help center,contact us, privacy policy"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/y57uaqgf_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								paddingRight: 2,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 16,
									marginBottom: 6,
								}}>
								{"Storage and data"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginLeft: 2,
								}}>
								{"Network usage, stogare usage"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lpxemru7_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<Text 
							style={{
								color: "#000D07",
								fontSize: 16,
							}}>
							{"Invite a friend"}
						</Text>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 179,
							marginLeft: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/oex74xov_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
								marginRight: 12,
							}}
						/>
						<Text 
							style={{
								color: "#000D07",
								fontSize: 16,
							}}>
							{"Sign Out"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}