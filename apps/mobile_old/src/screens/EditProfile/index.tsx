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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u6g6sgei_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 17,
								height: 10,
								marginLeft: 263,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/c63oj15a_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 10,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/dnkylw2h_expires_30_days.png"}} 
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
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ufi8rjf4_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 24,
						height: 23,
						marginBottom: 31,
						marginLeft: 23,
					}}
				/>
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
								top: 98,
								right: -123,
								left: -123,
								alignSelf: "stretch",
								backgroundColor: "#FFFFFF",
								borderTopLeftRadius: 40,
								borderTopRightRadius: 40,
								paddingTop: 222,
								paddingHorizontal: 20,
							}}>
							<View 
								style={{
									marginBottom: 29,
								}}>
								<View 
									style={{
										position: "absolute",
										bottom: 12,
										left: 4,
										paddingBottom: 37,
										paddingRight: 14,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
										}}>
										{"Display Name"}
									</Text>
								</View>
								<View 
									style={{
										height: 43,
										borderColor: "#8B8B8B",
										borderRadius: 10,
										borderWidth: 1,
									}}>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 29,
								}}>
								<View 
									style={{
										position: "absolute",
										bottom: 12,
										left: 9,
										paddingBottom: 37,
										paddingRight: 93,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 12,
										}}>
										{"Email Address"}
									</Text>
								</View>
								<View 
									style={{
										height: 43,
										borderColor: "#8B8B8B",
										borderRadius: 10,
										borderWidth: 1,
									}}>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 29,
								}}>
								<View 
									style={{
										position: "absolute",
										bottom: 12,
										left: 4,
										paddingBottom: 37,
										paddingRight: 152,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
										}}>
										{"Address"}
									</Text>
								</View>
								<View 
									style={{
										height: 43,
										borderColor: "#8B8B8B",
										borderRadius: 10,
										borderWidth: 1,
									}}>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 148,
								}}>
								<View 
									style={{
										position: "absolute",
										bottom: 11,
										left: 4,
										paddingBottom: 38,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
										}}>
										{"Phone  Number"}
									</Text>
								</View>
								<View 
									style={{
										height: 43,
										borderColor: "#8B8B8B",
										borderRadius: 10,
										borderWidth: 1,
									}}>
								</View>
							</View>
							<TouchableOpacity 
								style={{
									alignItems: "center",
									backgroundColor: "#FC6901",
									borderRadius: 11,
									paddingVertical: 23,
									marginBottom: 50,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 18,
									}}>
									{"Save Details"}
								</Text>
							</TouchableOpacity>
						</View>
						<View >
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hl0me70n_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 97,
									width: 194,
									height: 194,
									marginBottom: 8,
								}}
							/>
							<View 
								style={{
									alignSelf: "flex-start",
									alignItems: "center",
									marginLeft: 24,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
										fontWeight: "bold",
										marginBottom: 8,
									}}>
									{"Jhon Abraham"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"@jhonabraham"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}