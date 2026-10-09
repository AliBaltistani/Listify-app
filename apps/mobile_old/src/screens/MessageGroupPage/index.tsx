import React from "react";
import { View, ScrollView, Text, Image, } from "react-native";
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
					paddingTop: 13,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 28,
						marginLeft: 34,
						marginRight: 19,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 15,
						}}>
						{"9:41"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2iu4hozr_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 17,
							height: 10,
							marginRight: 5,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/94igi7y6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 15,
							height: 10,
							marginRight: 5,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/peso4nl7_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 11,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 40,
						marginHorizontal: 22,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/aynd13am_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 41,
							height: 41,
						}}
					/>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 20,
								marginRight: 130,
							}}>
							{"Home"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/a8ddkc4y_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 44,
								height: 44,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 30,
						marginLeft: 21,
					}}>
					<View 
						style={{
							marginRight: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/peg9k0o5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 58,
								height: 58,
								marginBottom: 10,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"My status"}
						</Text>
					</View>
					<View 
						style={{
							marginRight: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gr6nkj4j_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 58,
								height: 58,
								marginBottom: 10,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								marginLeft: 16,
							}}>
							{"Adil"}
						</Text>
					</View>
					<View 
						style={{
							marginRight: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tomvwf13_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 58,
								height: 58,
								marginBottom: 10,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"Marina"}
						</Text>
					</View>
					<View 
						style={{
							marginRight: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zpnbohxb_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 58,
								height: 58,
								marginBottom: 10,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								marginLeft: 11,
							}}>
							{"Dean"}
						</Text>
					</View>
					<View >
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tulfq9qq_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 58,
								height: 58,
								marginBottom: 10,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								marginLeft: 14,
							}}>
							{"Max"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderBottomRightRadius: 40,
						borderBottomLeftRadius: 40,
						paddingTop: 14,
						marginBottom: 1,
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
							marginBottom: 30,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mkjcnf4g_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
								}}>
								{"Alex Linderson"}
							</Text>
							<Text 
								style={{
									color: "#797C7A",
									fontSize: 12,
									marginRight: 21,
								}}>
								{"How are you today?"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<View >
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginBottom: 7,
								}}>
								{"2 min ago"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/x09e68ax_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 23,
									marginLeft: 31,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 30,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ursso42f_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
									marginRight: 77,
								}}>
								{"Team Align"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
								}}>
								{"Don’t miss to attend the meeting."}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<View >
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginBottom: 7,
								}}>
								{"2 min ago"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/volkfbk5_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 22,
									marginLeft: 31,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 30,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rceumz33_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
									marginRight: 34,
								}}>
								{"John Ahraham"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
								}}>
								{"Hey! Can you join the meeting?"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 12,
							}}>
							{"2 min ago"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 30,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wgro10wn_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
								}}>
								{"Sabila Sayma"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
									marginRight: 17,
								}}>
								{"How are you today?"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 12,
							}}>
							{"2 min ago"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 30,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/y8mq3016_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
								}}>
								{"John Borino"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
								}}>
								{"Have a good day 🌸"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 12,
							}}>
							{"2 min ago"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 195,
							marginHorizontal: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z1xzdqwi_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 52,
								height: 52,
								marginRight: 12,
							}}
						/>
						<View >
							<Text 
								style={{
									color: "#000D07",
									fontSize: 18,
									marginBottom: 6,
								}}>
								{"Angel Dayna"}
							</Text>
							<Text 
								style={{
									color: "#797C7B",
									fontSize: 12,
								}}>
								{"How are you today?"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 12,
							}}>
							{"2 min ago"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}